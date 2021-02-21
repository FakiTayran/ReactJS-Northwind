import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import {BrowserRouter, Link,Route } from 'react-router-dom' ;


const SupplierList = () => {

    const [suppliers, setsupliers] = useState([])
    const [deleteState, setdeleteState] = useState(0)
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName'
        },
        {
            title: 'Contact Title',
            dataIndex: 'contactTitle',
            key: 'contactTitle'
        },
        {
            title: 'Details',
            dataIndex: 'id',
            key: 'id',
            render: id => <Link to={`/SupplierDetail/${id}`}>Details</Link>,
        }]

    useEffect(() => {
        fetch('https://northwind.now.sh/api/suppliers')
            .then((res) => res.json())
            .then((data) => {
                let suppliers = _.orderBy(data, ['companyName'])
                setsupliers(suppliers)
            });
    }, []);

    //(Delete Supplier)
    // useEffect(()=>{   
    //     let supplier = _.find(suppliers,{id:deleteState});
    //     console.log(supplier);
    //     let newList = suppliers.filter(function(supplier){return supplier.id!==deleteState})
    //     setsupliers(newList)
    // },[deleteState]);

    return (
        <>
            <Table dataSource={suppliers} columns={columns}></Table>
        </>
        // <div>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>ID</th>
        //                 <th>COMPANY NAME</th>
        //                 <th>CONTACT TITLE</th>
        //                 <th>CITY</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {
        //                 suppliers.map((item) => (
        //                     <tr key={item.id}>
        //                         <td>{item.id}</td>
        //                         <td>{item.companyName}</td>
        //                         <td>{item.contactName}</td>
        //                         <td>{item.address.city}</td>
        //                         <td><button onClick={() => setdeleteState(item.id)}>Delete</button></td>
        //                     </tr>
        //                 ))
        //             }
        //         </tbody>
        //     </table>
        // </div>
    )
}

export default SupplierList
