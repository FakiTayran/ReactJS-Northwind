import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { JsonToTable } from "react-json-to-table";


const ProductDetail = () => {
  const [product, setproduct] = useState({})
  let url = 'https://northwind.now.sh/api/products/';
  let { id } = useParams();
  console.log(id)
  useEffect(() => {
    fetch(url + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setproduct(data);
      });
  }, [])

  return (
    <>
      <h1>Product Detail ({product.name})</h1>

      <JsonToTable json={product} />
    </>
  )
}

export default ProductDetail
