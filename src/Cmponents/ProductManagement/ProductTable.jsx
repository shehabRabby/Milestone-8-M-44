import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div className="m-20 text-center">
            <h3>Total Products: {products.length}</h3>

            <table className='text-center'>
                <thead>
                    <tr className='border-1 bg-sky-300'>
                        <th className='border-1 p-2'>No</th>
                        <th className='border-1 p-2'>Product</th>
                        <th className='border-1 p-2'>Price</th>
                        <th className='border-1 p-2'>Quantity</th>
                        <th className='border-1 p-2'>Action</th>
                    </tr>
                </thead>

                <tbody className='border-1 bg-sky-100'>
                    {
                        products.map((product,index) => <tr key={index}>
                        <td className='border-1 p-2'>{index+1}</td>
                        <td className='border-1 p-2'>{product.name}</td>
                        <td className='border-1 p-2'>{product.price}</td>
                        <td className='border-1 p-2'>{product.quantity}</td>
                        <td className='border-1 p-2'></td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;