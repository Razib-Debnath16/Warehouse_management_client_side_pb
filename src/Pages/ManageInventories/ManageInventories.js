import React from 'react';
import useItems from '../../Hooks/useItems';
import ManageTables from '../ManageTables/ManageTables';
import './ManageInventories.css';

const ManageInventories = () => {
    const [products, setProducts] = useItems();
    return (
        <div>
            <div className='table-container'>
                {
                    products.map(product => <ManageTables key={product._id} product={product}></ManageTables>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;