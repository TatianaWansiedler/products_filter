import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProductAction } from '../../store/reducer/productsReducer';
import s from './style.module.css'



const ProductItem = ({id, title, price, discount}) => {
    const dispatch = useDispatch()

    const disc_price = (price - (price * discount/100)).toFixed(1)

    return (
        <div className={s.item}>
            <p className={s.title}>{title}</p>
            <div className={s.prices}>
                <p>Цена: </p>
                <div>
                    <span className={discount ? s.old_price : ''}>
                        {price} 
                    </span>
                    <span className={s.price_disc}> 
                        {   
                            discount ?
                            disc_price
                            : ''
                        } 
                    </span>
                </div>
            </div>
            < FontAwesomeIcon 
                className={s.del_btn} 
                onClick={() => dispatch(removeProductAction(id))} 
                icon={faTrash}
            />
        </div>
    );
};

export default ProductItem;