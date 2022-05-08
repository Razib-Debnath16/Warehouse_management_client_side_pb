import React from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyItem = (params) => {
    const { name, description, img, price, supplierName, email, sold } = params.item;
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    if (!user) {
        navigate('/');
    }
    return (
        <div>
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
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default MyItem;