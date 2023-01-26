

export const Uni = (props) => {
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <div className = "border-2 rounded-2xl xl:py-20 py-5 m-5 px-10 text-center">
            <h2 className = "text-2xl">
                {props.name}
            </h2>
        </div>
    )
}