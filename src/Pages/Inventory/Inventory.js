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
            <div>
                <Card >
                    <div className='product-details w-50 mx-auto'>
                        <Card.Img style={{ width: '15rem' }} variant="top" src={product.img} />
                        <Card.Body style={{ width: '15rem' }}>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text className='container-fluid'>
                                {product.description}
                            </Card.Text>
                            <Card.Text className='container-fluid'>
                                {product.price}
                            </Card.Text>
                            <Card.Text className='container-fluid'>
                                {product.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </div>
                </Card>
            </div>
            <div>
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