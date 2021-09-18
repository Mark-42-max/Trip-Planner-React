

const Button = ({cls, text, onClick}) => {
    return (
        <>
            <button className = {cls} onClick = {onClick}>{text}</button>
        </>
    )
}

export default Button
