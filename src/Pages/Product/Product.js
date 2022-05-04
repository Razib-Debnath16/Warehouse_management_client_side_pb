import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = (params) => {

    const { _id, name, img, description, price } = params.product;
    const navigate = useNavigate();
    const navigateDetails = (id) => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => navigateDetails(_id)} variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;