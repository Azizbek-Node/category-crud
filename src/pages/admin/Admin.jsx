// import ProductCreate from '@/components/ProductCreate'
// import React from 'react'

// const Admin = () => {
//   return (
//     <div>
//       <h2>Admin</h2>
//       <ProductCreate/>
//     </div>
//   )
// }

// export default Admin


import React from "react";
import ProductCreate from "../../components/ProductCreate";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-8">
      <div className="w-[50%] mx-auto text-center flex flex-col gap-4">
        <h2 className="text-3xl">Welcome Admin</h2>
        <div className="flex mx-auto w-[50%] justify-evenly">
          <button
            className="bg-blue-300 text-black p-4 rounded-lg"
            onClick={() => navigate("/create/product")}
          >
            Product
          </button>
          <button
            className="bg-blue-300 text-black p-4 rounded-lg"
            onClick={() => navigate("/create/category")}
          >
            Categories
          </button>
        </div>
      </div>
      {/* <ProductCreate /> */}
    </div>
  );
};

export default Admin;