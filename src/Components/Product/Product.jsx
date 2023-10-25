import React from 'react';
import styles from './product.module.css';

const Products = ({ item, handleEditProduct, handleDeleteProduct }) => {
    return (

        <div className={styles.productContainer}>
            <div className={styles.productImg}>
                <img src={item?.thumbnail} alt={item?.title} />
                <h5>{item?.title}</h5>
            </div>

            <div className='f1'>
                <h4>Brand:</h4>
                {item?.brand ?? "N/A"}
            </div>
            <div className='f1'>
                <h4>Category:</h4>
                {item?.category ?? "N/A"}
            </div>
            <div className='f1'>
                <h4>Price:</h4>
                {item?.price ?? "N/A"}
            </div>

            <div className='f1'>
                <h4>Rating:</h4>
                {item?.rating ?? "N/A"}
            </div>
            <div className='f1'>
                <h4>Action:</h4>
                <button className={styles.actionBtn} type='button' onClick={() => handleEditProduct(item.id)}>Edit</button>&nbsp;&nbsp;
                <button className={styles.actionBtn} type='button' onClick={() => handleDeleteProduct(item.id)}>Delete</button>
            </div>
        </div>

    )
}

export default Products;