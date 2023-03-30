import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import { findProductAction, sortProductAction } from '../../store/reducer/productsReducer';
import s from './style.module.css'

const ShowProductsPage = () => {

    const products = useSelector(({products}) => products)

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        const {title} = e.target
        console.log(title.value);
        dispatch(findProductAction(title.value.toLowerCase()))
    }
    const sortOnChange = (e) => {
        console.log(e.target.value);
        dispatch(sortProductAction(e.target.value))
    }

    return (
        <div >
            <div className={s.form_container}>
                <form className={s.form} onSubmit={onSubmit}>
                    <input className={s.input_title} type="text" name='title' placeholder='Название'/>
                    <input className={s.input_btn} type="submit" value="Найти" />
                </form>
                <select className={s.sort} onChange={sortOnChange} defaultValue='3'>
                    <option value="3" disabled>Отсортировать по</option>
                    <option value="title">По наименованию товара</option>
                    <option value="1">По возрастанию цены</option>
                    <option value="2">По убыванию цены</option>
                </select>
            </div>
            <div className={s.products_container}>
                {
                    products.map(el => <ProductItem key={el.id} {...el}/>)
                }
            </div>
        </div>
    );
};

export default ShowProductsPage;