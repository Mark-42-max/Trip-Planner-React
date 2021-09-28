import { useState } from "react";
import { useEffect } from "react";
import Header from "./Components/Header"
import Logs from "./Components/Logs"

function App() {

  const [logs, setLogs] = useState([])

  //Fetching Data
  const fetchData = async () => {
    const res = await fetch('http://127.0.0.1:5000/logs');
    const data = await res.json();

    return data;
  }


  //Show logs
  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData();

      setLogs([...dataFromServer]);
    }

    getData();

  }, [])

  //Delete Data from server and show in the ui
  const done = async (id,index) => {
    await fetch(`http://127.0.0.1:5000/logs/${id}`, {

    method: 'DELETE',
    })

    setLogs(logs.filter((log) => log.index !== index));
  }

  //Toggle status to the server
  const onToggleState = async (index, id) => {

    //fetching log
    const fromServer = await fetch(`http://127.0.0.1:5000/logs/${id}`);
    const data = await fromServer.json();

    //update log set to an object
    const updLog = {...data, state: !data.state};
    console.log(updLog);

    //pushing to server
    const toServer = await fetch(`http://127.0.0.1:5000/logs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updLog)
    });

    //modifying ui
    const newLog = await toServer.json();

    setLogs(logs.map((log) => log.index === index ? {...log, state: newLog.state} : log))
  }

  //Add log to the server
  const onAdd = async (newObj) => {


    const res = await fetch('http://127.0.0.1:5000/logs', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newObj)
    });

    const obj = await res.json();
    const index = Math.floor(Math.random() * 1000) + 1;
    const data = {index, ...obj}

    setLogs([...logs, data]);
  }


  //Main app return
  return (
    <div className = "container">
      <Header onSubmit = {onAdd} />
      {logs.length !== 0 ? <Logs logs = {logs} onClick = {done} toggleState = {onToggleState}/>: <h3 className = "h3">No Trips to view</h3>}
    </div>
  );

  // {
  //   id: 2,
  //   index: 2,
  //   destination: "Manali",
  //   days: 10,
  //   people: 14,
  //   state: true
  // },
  // {
  //   id: 3,
  //   index: 3,
  //   destination: "Lonavala",
  //   days: 20,
  //   people: 16,
  //   state: false
  // }
}

export default App;
