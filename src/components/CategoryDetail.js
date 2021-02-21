import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { JsonToTable } from "react-json-to-table";



const CategoryDetail = () => {
    const [category, setcategory] = useState({})
    let url = 'https://northwind.now.sh/api/products/';
    let { id } = useParams();
    console.log(id)
    useEffect(() => {
        fetch(url + id)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setcategory(data);
            });
    }, [])

    return (
        <>
            <h1>Category Detail ({category.name})</h1>

            <JsonToTable json={category} />
        </>
    )
}

export default CategoryDetail