import products from './mockProducts'
import * as R from 'ramda';

export const fetchProducts = async () =>{
    return new Promise(resolve=>{
        resolve(products)
    })
}

export const loadMoreProducts = async ({offset}) =>{
    return new Promise(resolve=>{
        resolve(products)
    })
}

export const fetchProductById = async id =>{
    return new Promise((resolve,reject)=>{
        const product = R.find(R.propEq('id', id), products)
        resolve(product)
    })
}