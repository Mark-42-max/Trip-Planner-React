import { useState } from "react";
import Header from "./Components/Header"
import Logs from "./Components/Logs"

function App() {

  const [logs, setLogs] = useState(
  [
    {
    "index": 1,
    "destination": "Goa",
    "days": 12,
    "people": 15,
    "state": false
    },

    {
    "index": 2,
    "destination": "Manali",
    "days": 10,
    "people": 14,
    "state": true
    },

    {   
    "index": 3,
    "destination": "Lonavala",
    "days": 20,
    "people": 16,
    "state": false
    }
  ]
)

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
