import Beer from './Beer.jsx'


function Beers ({list}) {
    const a = 10
    console.log(<Beer key={100} info={list[0]} randomNum={a}/>);
    return (
        <div className='beers'>
            {list.map((item, index) => <Beer key={index} info={item} randomNum={a}/>)}
        </div>
    )
}

export default Beers

