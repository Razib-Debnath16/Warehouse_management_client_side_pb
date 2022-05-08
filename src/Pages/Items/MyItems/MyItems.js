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
    const email = user.email;
    useEffect(() => {
        const url = `http://localhost:5000/products/email?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [user])
    if (!user) {
        navigate('/');
    }
    return (
        <div>
            {
                items.map(item => <MyItem key={item._id} item={item}></MyItem>)
            }
        </div>
    );
};

export default MyItems;