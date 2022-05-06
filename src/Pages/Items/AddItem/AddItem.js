import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddItem.css';

const AddItem = () => {
    const handleAddItem = (event) => {
        event.PreventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        const sold = event.target.sold.value;
        const quantity = event.target.quantity.value;
    }
    return (
        <div className='add-items'>
            <Form onSubmit={handleAddItem}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="name" name='name' placeholder="Product Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="text-area" name='description' placeholder="Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="text" name='price' placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="text" name='quantity' placeholder="Quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="text" name='supplierName' placeholder="Supplier Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="text" name='sold' placeholder="Sold" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="text" name='img' placeholder="Image url" />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Add Item
                </Button>
            </Form>
        </div>
    );
};

export default AddItem;