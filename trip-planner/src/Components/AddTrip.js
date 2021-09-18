import { useState } from "react"

const AddTrip = ({onSubmit}) => {



    const [destination, setDest] = useState("");
    const [day, setDay] = useState (0);
    const [people, setPeople] = useState(0);
    const [state, setState] = useState(false);

    const onAdd = (e) => {
        e.preventDefault();

        if(!destination){
            alert("Please enter destinationination");
        }

        onSubmit({destination, day, people, state});

        setDest("");
        setDay(0);
        setPeople(0);
        setState(false);
    }


    return (
        <form onSubmit = {onAdd}>
            
            <label>Destination</label>
            <div className = "form-control">
                <input type="text" placeholder = "Where do you wanna visit" value = {destination} onChange = {(e) => {setDest(e.target.value)}}/>
            </div>

            
            <label>Days Planned</label>
            <div className = "form-control">
                <input type="text" placeholder = "Number of days to stay" value = {day} onChange = {(e) => {setDay(e.target.value)}}/>
            </div>

            <label>Number of People </label>
            <div className = "form-control">
                <input type="text" placeholder = "Number of tourists" value = {people} onChange = {(e) => {setPeople(e.target.value)}}/>
            </div>

            <div className = "checkbox"> 
                <label>Trip Status</label>
                <input type="checkbox" checked = {state} value = {state} onChange = {(e) => {setState(e.currentTarget.checked)}}/>
            </div>

            <input type="submit" value="Add" className = "btn-large"/>
        </form>
    )
}

export default AddTrip
