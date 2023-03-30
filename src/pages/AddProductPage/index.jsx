import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductAction } from '../../store/reducer/productsReducer';
import s from './style.module.css'


const AddProductPage = () => {
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        const {title, price, discount} = e.target
        dispatch( addProductAction(title.value, price.value, discount.value) )
        console.log(title.value, price.value, discount.value);
        title.value= '' 
        price.value = ''
        discount.value = ''
    }

    return (
        <div className={s.container}>
            <form className={s.form} onSubmit={onSubmit}>
                <input type="text" name='title' placeholder='Название товара'/>
                <input type="number" name="price" placeholder='Цена'/>
                <input type="number" name="discount" placeholder='Процент скидки' />
                <input className={s.add_btn} type="submit" value="Добавить" />
            </form>
        </div>
    );
};

export default AddProductPage;