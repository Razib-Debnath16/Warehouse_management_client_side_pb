import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div className='inventory'>
            <div className='product-details'>
                <div>
                    <img src={product.img} alt="" />
                </div>
                <div>
                    <h2>Name : {product.name}</h2>
                    <p>Description : {product.description}</p>
                    <p>Price : {product.price}</p>
                    <p>Quantity : {product.quantity}</p>
                    <p>Sold : {product.sold}</p>
                    <p>Supplier Name : {product.supplierName}</p>
                    <Button variant="success" type="submit">
                        Delivered
                    </Button>
                </div>
            </div>
            <div className='w-50 mx-auto'>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>How much quantity you want to add?</Form.Label>
                            <Form.Control className='w-50' type="number" placeholder="Enter Amount" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Restock
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Inventory;