import React, { useState } from 'react';

const ProductForm = ({handleAddProducts}) => {

    const [error,setError] = useState("");
    const handleProductSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.Quantity.value;

        if(name.length === 0) {
            setError("Please Provide Product Name")
            return;
        }else if (price.length == 0){
            setError("Please provide a price")
            return;
        }else if(price < 0){
            setError("Price cannot be negative")
            return;
        }else{
            setError("");
        }

        const newProduct = {name,price,quantity}

        // console.log(newProduct);
        handleAddProducts(newProduct)
    }
    return (
        <div className="m-20 text-center">
            <h3 className='text-2xl font-bold'>Add Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input  className=' h-8 w-100  bg-gray-100 px-2' type="text" name='name' placeholder='Product Name' /><br />
                <input className=' h-8 w-100  bg-gray-100 px-2 mt-2' type="text" name='price' placeholder='Product Price' /><br />
                <input className=' h-8 w-100  bg-gray-100 px-2 mt-2' type="text" name='Quantity' placeholder='Product Quantity' /><br />
                <input className='bg-gray-400 px-5 mt-2' type="submit" value="Submit"/>
            </form>
            <p className='text-center text-xl mt-2 text-red-500'><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;