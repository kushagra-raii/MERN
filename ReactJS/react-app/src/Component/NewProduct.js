import './NewProduct.css';
import ProductForm from './ProductForm'
export default function NewProduct(props) {
    function addProduct(product) {
        console.log("Inside newProduct");
        console.log(product);
        props.updateProduct(product);
    }
    return (
        <div className='newProduct'>
            <ProductForm addProduct={addProduct} />
        </div>
    );
}
