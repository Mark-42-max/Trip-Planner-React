import { useState } from "react";
import { useEffect } from "react";
import Header from "./Components/Header"
import Logs from "./Components/Logs"

function App() {

  const [logs, setLogs] = useState([])

  const fetchData = async () => {
    const res = await fetch('http://127.0.0.1:5000/logs');
    const data = await res.json();

    return data;
  }



  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData();

      setLogs([...dataFromServer]);
    }

    getData();

  }, [])

  const done = (index) => {
    setLogs(logs.filter((log) => log.index !== index));
  }

  const onToggleState = (index) => {
    setLogs(logs.map((log) => log.index === index ? {...log, state: !log.state} : log))
  }

  const onAdd = (newObj) => {

    const index = Math.floor(Math.random() * 10) + 1;

    const obj = {index, ...newObj}
    setLogs([...logs, obj]);
  }



  return (
    <div className = "container">
      <Header onSubmit = {onAdd} />
      {logs.length !== 0 ? <Logs logs = {logs} onClick = {done} toggleState = {onToggleState}/>: <h3 className = "h3">No Trips to view</h3>}
    </div>
  );
}

export default App;
