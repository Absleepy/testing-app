import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Product from '../Product/Product';
import { apiCall } from '../../Services/ApiCall';
import { getProducts, addProduct, deleteProduct, searchProduct, editProduct } from '../../Store/ProductSlice';
import styles from './products.module.css';
import Popup from '../Popup/Popup';


const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.data)
    const [editableMood, setEditableMood] = useState(false);
    const [searchValue, setSearchValue] = useState('')
    const [productKeys, setProductKeys] = useState({
        title: '',
        brand: '',
        category: '',
        price: 0,
        rating: 0
    })
    const [showPopup, setShowPopup] = useState(false);


    const fetchProducts = async () => {
        const _products = await apiCall('products', 'get', null);
        dispatch(getProducts(_products.data.products))
    }

    useEffect(() => {
        fetchProducts();
    }, [])


    const handleAddProduct = () => {
        setShowPopup(true)
        return false

    }
    const handleClosePopup = () => {
        setShowPopup(false);
        setProductKeys({
            title: '',
            brand: '',
            category: '',
            price: 0,
            rating: 0
        })
    }

    const handleChangeProductKeys = e => {
        const { name, value } = e.target;

        setProductKeys({
            ...productKeys,
            [name]: value
        })
    }
    const handleSubmitForm = async e => {
        const randomIndex = Math.floor(Math.random() * products.length);
        const randomObject = products[randomIndex];
        e.preventDefault();
        if (!editableMood) {
            try {
                const res = await apiCall('products/add', 'post', { ...productKeys });
                dispatch(addProduct({ ...res.data, thumbnail: randomObject.thumbnail, id: products.length + 1 }));
                handleClosePopup();
            }
            catch (err) {
                console.log(err)
            }
        }
        else {
            const res = await apiCall(`products/${productKeys?.id}`, 'put', { ...productKeys });
            console.log(res.data)
            dispatch(editProduct(productKeys));
            handleClosePopup();
        }

    }


    const handleEditProduct = async id => {
        setEditableMood(true);
        const editableProduct = products.find(x => x.id === id);
        setShowPopup(true);
        setProductKeys({ ...editableProduct });
    }
    const handleDeleteProduct = id => {
        dispatch(deleteProduct(id))
    }

    const handleSearchProduct = e => {
        const { value } = e.target;
        setSearchValue(value);
        dispatch(searchProduct(value))
    }

    return (
        <div className="container">

            <Popup handleSubmitForm={handleSubmitForm} handleChange={handleChangeProductKeys} productkeys={productKeys} handleClosePopup={handleClosePopup} showPopup={showPopup} />
            <div className={styles.productsContainer}>
                <div className="flex items-center justify-between">
                    <h1 className={styles.pageTitle}>Products List  </h1>

                    <button onClick={handleAddProduct} className={styles.addBtn}>
                        Add
                    </button>
                </div>
                <div className={styles.products}>

                    <input onChange={handleSearchProduct} type="search" placeholder='Search Products by title' value={searchValue} />
                    {
                        products?.map((item, i) => (
                            <Product handleDeleteProduct={handleDeleteProduct} handleEditProduct={handleEditProduct} key={item.id} item={item ?? {}} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Products