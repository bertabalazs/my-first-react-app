function Beer ({info, randomNum}) {
    const {title,sub,text} = info
    return (
        <div className="beer">
            <h1>{title}</h1>
            <p>{sub}</p>
            <p>{text}</p>
            <button onClick={() => console.log(`clicked`)}>Click me</button>
        </div>
    )
}


export default Beer