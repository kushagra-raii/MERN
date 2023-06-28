import './Item.css'

function Item(props) {
    const ItemName = props.name;
    return (
        <div className='item'>
            <p>{ItemName}</p>
        </div>
    );
}

export default Item;