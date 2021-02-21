import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { JsonToTable } from "react-json-to-table";


const SupplierDetail = () => {
  const [supplier, setsupplier] = useState({})
  let url = 'https://northwind.now.sh/api/suppliers/';
  let { id } = useParams();
  console.log(id)
  useEffect(() => {
    fetch(url + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setsupplier(data);
      });
  }, [])

  return (
    <>
          <h1>Supplier Detail ({supplier.companyName})</h1>

      <JsonToTable json={supplier} />
    </>
  )
}

export default SupplierDetail