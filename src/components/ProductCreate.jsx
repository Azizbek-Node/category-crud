import { request } from '@/api'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ProductCreate = () => {
    const token = useSelector(s=>s.token.value)
    const[categories,setCategories]=useState(null)
    useEffect(()=>{
        request
            .get("/product-category/get")
            .then(res=>{
                setCategories(res.data)
            })
    },[])

    const handleCreateProduct=e=>{
        e.preventDefault();
        let formData = new FormData(e.target);
        const product = Object.fromEntries(formData);
        product.price = +product.price
        product.categoryId = +product.categoryId;
        product.stock = +product.stock;
        product.average_rating = 0
        
        request
            .post("/product/create",product,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
    }
    
  return (
    <div className="flex flex-col text-center gap-4 mt-8">
      <p className="text-3xl">ProductCreate</p>
      <form
        className="flex flex-col w-[50%] mx-auto gap-4"
        onSubmit={handleCreateProduct}
        action=""
      >
        <input
          className="border-2 border-blue-300 rounded-lg p-3"
          type="text"
          name="name"
        />
        <textarea
          className="border-2 border-blue-300 rounded-lg p-3"
          name="description"
          id=""
        ></textarea>
        <input
          className="border-2 border-blue-300 rounded-lg p-3"
          type="number"
          name="price"
        />
        <input
          className="border-2 border-blue-300 rounded-lg p-3"
          type="text"
          name="image"
        />
        <select
          name="categoryId"
          id=""
          className="border-2 border-blue-300 rounded-lg p-3"
        >
          {categories?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          className="border-2 border-blue-300 rounded-lg p-3"
          type="number"
          name="stock"
        />
        <button className="border p-3 bg-blue-300 rounded-lg">Create</button>
      </form>
    </div>
  );
}

export default ProductCreate  