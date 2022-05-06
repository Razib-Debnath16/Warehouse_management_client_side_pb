import React, { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems];
};

export default useItems;