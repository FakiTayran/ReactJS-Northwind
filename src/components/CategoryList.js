import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import {BrowserRouter, Link,Route } from 'react-router-dom' ;


const CategoryList = () => {
    
    const [categories, setcategories] = useState([])
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Details',
            dataIndex: 'id',
            key: 'id',
            render: id => <Link to={`/CategoryDetail/${id}`}>Details</Link>,
        }]


    useEffect(() => {
        fetch('https://northwind.now.sh/api/categories')
            .then((res) => res.json())
            .then((data) => {
                setcategories(data)
            });
    }, []);

    return (
        <Table dataSource={categories} columns={columns}></Table>

    )
}

export default CategoryList
