import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import ManageTables from '../ManageTables/ManageTables';
import './ManageInventories.css';

const ManageInventories = () => {
    const [products, setProducts] = useItems();
    const navigate = useNavigate();
    const handleNewItem = () => {
        navigate('/addItems');
    }
    return (
        <div>
            <div className='w-50 mx-auto'>
                <Button className='addbutton' onClick={handleNewItem} variant="outline-info">Add New Item</Button>
            </div>
            <div className='table-container'>
                {
                    products.map(product => <ManageTables key={product._id} product={product}></ManageTables>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;