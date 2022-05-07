import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const location = useLocation();
    let stock;
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    const handleDelivered = event => {
        event.preventDefault();
        const name = product.name;
        const description = product.description;
        const price = product.price;
        const img = product.img;
        const supplierName = product.supplierName;
        if (product.quantity > 0) {
            const quantity = parseInt(product.quantity) - 1;
            const sold = parseInt(product.sold) + 1;
            const updatedProduct = { quantity, sold };
            const newProduct = { name, description, price, img, quantity: updatedProduct.quantity, sold: updatedProduct.sold, supplierName }
            setProduct(newProduct);
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedProduct)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                })

        }
    }
    const handleAddQuantity = event => {
        event.preventDefault();
        const name = product.name;
        const description = product.description;
        const price = product.price;
        const img = product.img;
        const newQuantity = event.target.quantity.value;
        const quantity = parseInt(product.quantity) + parseInt(newQuantity);
        const sold = product.sold;
        const supplierName = product.supplierName;
        const updatedProduct = { quantity, sold };
        const newProduct = { name, description, price, img, quantity: updatedProduct.quantity, sold: updatedProduct.sold, supplierName }
        setProduct(newProduct);
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })

    }
    return (
        <div className='inventory'>
            <div className='product-details'>
                <div>
                    <img src={product.img} alt="" />
                </div>
                <div className='ms-2'>
                    <h2>Name : {product.name}</h2>
                    <p>Description : {product.description}</p>
                    <p>Price : {product.price}</p>
                    <p>Quantity : {product.quantity}</p>
                    <p>Sold : {product.sold}</p>
                    <p>Supplier Name : {product.supplierName}</p>
                    <Button onClick={handleDelivered} variant="success">
                        Delivered
                    </Button>
                </div>
            </div>
            <div className='w-50 mx-auto'>
                <div>
                    <Form onSubmit={handleAddQuantity}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>How much quantity you want to add?</Form.Label>
                            <Form.Control name='quantity' className='w-50' type="number" placeholder="Enter Amount" />
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