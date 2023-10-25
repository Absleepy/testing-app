import React from 'react'
import styles from './popup.module.css';

const Popup = ({ handleSubmitForm, productkeys, handleChange, handleClosePopup, showPopup }) => {
    return (
        <div className={`${styles.popupContainer} ${showPopup ? styles.showPopup : ''}`}>

            <form onSubmit={handleSubmitForm} className={styles.form}>
                <div className="flex justify-between">
                    <h3>Add Product</h3>
                    <button type='button' onClick={handleClosePopup} className={styles.closePopup} title='close'>
                        &times;
                    </button>
                </div>

                <div className={styles.inpContainer}>
                    <label htmlFor="title">Title</label>
                    <input onChange={handleChange} id='title' name='title' placeholder='Title' type="text" value={productkeys?.title} />
                </div>
                <div className={styles.inpContainer}>
                    <label htmlFor="brand">Brand</label>
                    <input onChange={handleChange} id='brand' name='brand' placeholder='Brand Name' type="text" value={productkeys?.brand} />
                </div>
                <div className={styles.inpContainer}>
                    <label htmlFor="category">Category</label>
                    <input onChange={handleChange} id='category' name='category' placeholder='Category Name' type="text" value={productkeys?.category} />
                </div>
                <div className={styles.inpContainer}>
                    <label htmlFor="price">Price</label>
                    <input onChange={handleChange} id='price' name='price' placeholder='Price' type="text" value={productkeys?.price} />
                </div>
                <div className={styles.inpContainer}>
                    <label htmlFor="rating">Rating</label>
                    <input onChange={handleChange} id='rating' name='rating' placeholder='Rating' type="text" value={productkeys?.rating} />
                </div>

                <div className={styles.formActionBtns}>
                    <button type='button' onClick={handleClosePopup} title='close'>
                        Cancel
                    </button>
                    <button type='submit' onClick={handleSubmitForm} title='close'>
                        Done
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Popup