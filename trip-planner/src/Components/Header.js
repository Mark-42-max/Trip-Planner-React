import Button from "./Button";
import AddTrip from './AddTrip'
import { useState } from "react";

const Header = ({onSubmit}) => {

    const [show, setShow] = useState(false);

    const onClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <div className = "head">
                <h1>Trip Planner</h1>
                {show ? <Button cls = "anti-btn" text = "Close" onClick = {onClick}/>: <Button cls = "btn" text = "Add Trip" onClick = {onClick}/>}
            </div>
            <div>
                {show && <AddTrip onSubmit = {onSubmit}/>}
            </div>
        </div>

    )
}

export default Header
