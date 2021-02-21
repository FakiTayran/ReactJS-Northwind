import React,{useState,useEffect} from 'react'
import _ from 'lodash'
import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import {BrowserRouter, Link,Route } from 'react-router-dom' ;
import ProductDetail from './ProductDetail';




const ProductList = () => {

    const [products, setproducts] = useState([])

   
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Stock',
            dataIndex: 'unitsInStock',
            key: 'unitsInStock'
        },
        {
            title: 'Details',
            dataIndex: 'id',
            key: 'id',
            render: id => <Link to={`/ProductDetail/${id}`}>Details</Link>,
            
        }]

        useEffect(() => {
            fetch('https://northwind.now.sh/api/products')
            .then((res)=>res.json())
            .then((data)=>{
                setproducts(data);
            });
        },[])

    return (
        <>
           <Table dataSource={products} columns={columns}></Table>
        </>
    )
}

export default ProductList
