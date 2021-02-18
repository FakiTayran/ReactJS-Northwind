import React, { useState, useEffect } from 'react'
import _ from 'lodash'

const SupplierList = () => {

    const [suppliers, setsupliers] = useState([])
    const [deleteState, setdeleteState] = useState(0)

    useEffect(() => {
        fetch('https://northwind.now.sh/api/suppliers')
            .then((res) => res.json())
            .then((data) => {
                let suppliers = _.orderBy(data,['companyName'])
                setsupliers(suppliers)
            });
    },[]);
    
    useEffect(()=>{
        let supplier = _.find(suppliers,{id:deleteState});
        console.log(supplier);
        let newList = suppliers.filter(function(supplier){return supplier.id!==deleteState})
        setsupliers(newList)
    },[deleteState]);
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>COMPANY NAME</th>
                        <th>CONTACT TITLE</th>
                        <th>CITY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        suppliers.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.companyName}</td>
                                <td>{item.contactName}</td>
                                <td>{item.address.city}</td>
                                <td><button onClick={() => setdeleteState(item.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SupplierList
