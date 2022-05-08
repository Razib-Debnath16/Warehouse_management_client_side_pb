import useItems from '../../Hooks/useItems';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useItems();

    return (
        <div>
            <h2 className='text-center my-4'>Our Products</h2>
            <div className='product-container'>
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>

        </div>
    );
};

export default Products;