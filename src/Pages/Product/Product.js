import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = (params) => {

    const { _id, name, img, description, price } = params.product;
    const navigate = useNavigate();
    const navigateDetails = (id) => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='product'>
            <div >
                <Card className='card'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Button className='card-button' onClick={() => navigateDetails(_id)} variant="primary">Go somewhere</Button>
                </Card>
            </div>

        </div>
    );
};

export default Product;