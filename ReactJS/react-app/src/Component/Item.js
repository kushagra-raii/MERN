import './Item.css'

function Item(props) {
    const ItemName = props.name;
    return (
        <div>
            <p className="nirma">{ItemName}</p>
            {props.children}
        </div>
    );
}

export default Item;