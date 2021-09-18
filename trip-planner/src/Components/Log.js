import {FaTimes} from "react-icons/fa"

const Log = ({log, onClick,toggleState}) => {
    return (
        <div className = {`${log.state ? "reminder" : "task"}`} onDoubleClick = {() => toggleState(log.index)}>
            <div>
                <p>{log.destination}</p>
                <p>Days Stayed: {log.days}</p>
                <p>Number of People: {log.people}</p>
            </div>
            <div>
                <FaTimes className = "hover" onClick = {() => onClick(log.index)}/>
            </div>
        </div>

    )
}

export default Log
