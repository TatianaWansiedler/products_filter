const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const SORT_PRODUCTS = 'SORT_PRODUCTS'
const FIND_PRODUCTS = 'FIND_PRODUCTS'

const products = [
    {id: 1, title: 'Самокат', price: 15000, discount: 5},
    {id: 2, title: 'Ролики', price: 10000, discount: ''},
    {id: 3, title: 'Лыжи', price: 17000, discount: 15},
    {id: 4, title: 'Велосипед', price: 25000, discount: 10},
]

const defaultState = JSON.parse(localStorage.getItem('products')) ?? products

const writeToStorage = (products) => localStorage.setItem('products',JSON.stringify(products))

export const addProductAction = (title, price, discount) => {
    return {
        type: ADD_PRODUCT,
        payload:{id: Date.now(),title,price,discount}
    }
}
export const removeProductAction = (payload) => ({type: REMOVE_PRODUCT, payload})
export const findProductAction = (payload) => ({type: FIND_PRODUCTS, payload})
export const sortProductAction = (payload) => ({type: SORT_PRODUCTS, payload})

export const productsReducer = (state = defaultState, action) => {
    if(action.type === ADD_PRODUCT) {
        const newState = [...state, action.payload]
        writeToStorage(newState)

        return newState
    } else if(action.type === REMOVE_PRODUCT) {

        const newState =  state.filter(({id})=> id!==action.payload)
        writeToStorage(newState)
        return newState

    } else if (action.type === SORT_PRODUCTS) {
        if (action.payload==='title') state.sort((a,b)=> a.title > b.title ? 1 : -1)
        else if (+action.payload === 2) state.sort((a,b)=> (b.price-b.price*b.discount/100) - (a.price-a.price*a.discount/100))
        else if (+action.payload === 1) state.sort((a,b)=> (a.price-a.price*a.discount/100) - (b.price-b.price*b.discount/100))
        return [...state]

    }else if (action.type === FIND_PRODUCTS) {
        return state.filter(({title})=> title.toLowerCase().startsWith(action.payload))
    }
    return state
}
