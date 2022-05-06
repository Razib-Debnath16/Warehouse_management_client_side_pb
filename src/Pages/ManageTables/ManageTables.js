import { Button, Table } from 'react-bootstrap';
import useItems from '../../Hooks/useItems';

const ManageTables = (params) => {
    const { _id, name, description, price, quantity, supplierName } = params.product;
    const [items, setItems] = useItems();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                    }
                })
        }
    };
    return (
        <div>
            <Table striped bordered hover variant="BLUE">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Supplier Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{description}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td>{supplierName}</td>
                        <td><Button onClick={() => handleDelete(_id)}>Delete</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};
export default ManageTables;