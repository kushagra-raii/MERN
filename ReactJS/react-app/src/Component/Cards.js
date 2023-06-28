import './Cards.css'

function Cards(props) {
    return <div className="card">
        {props.children}
    </div>
}

export default Cards;