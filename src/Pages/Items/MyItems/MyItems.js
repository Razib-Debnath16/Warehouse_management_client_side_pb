import axios from 'axios';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useItems from '../../../Hooks/useItems';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useItems();
    const navigate = useNavigate();
    const email = user?.email;
    useEffect(() => {
        const products = async () => {
            const url = `https://warehouse-management-g5te.onrender.com/products/email?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setItems(data);
        }
        products();
    }, [user])
    if (!email) {
        navigate('/');
    }
    return (
        <div className='product-container'>
            {
                items.map(item => <MyItem key={item._id} item={item}></MyItem>)
            }
        </div>
    );
};

export default MyItems;