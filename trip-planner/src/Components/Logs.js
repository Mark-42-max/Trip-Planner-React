import Log from "./Log"

const Logs = ({logs, onClick,toggleState}) => {
    return (
        <div className = "content">
            {logs.map((log) => (<Log key = {log.id} log = {log} onClick = {onClick} toggleState = {toggleState}/>))}
        </div>
    )
}

export default Logs
