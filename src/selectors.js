import * as R from 'ramda';

export const getProductById = (state, id) => R.prop(id, state.products);

export const getProducts = state =>{
    const products = R.map(id => getProductById(state, id), state.productsPage.ids);
    return products;
}

export const getRenderedProductsLength = state => R.length(state.productsPage.ids);

export const getTotalBasketCount = state => R.length(state.basket);

export const getTotalBasketPrice = state =>{
   const totalPrice = R.compose(
    R.sum, // 3. summarize  total price
    R.pluck('price'), // 2. picking the price property
    R.map(id => getProductById(state,id))// 1. getting an array of objects in basket
   )(state.basket)
   return totalPrice;
}

export const getBasketProductsWithCount = state =>{
    const uniqueIds = R.uniq(state.basket) // getting unique Ids from basket
    const productCount = id => R.compose(
       R.length, // cointing elements with the same id (how many times this product in a basket)
        R.filter(basketId=>R.equals(id,basketId)) // filtering elements with the same id
    )(state.basket)
    const productWithCount = product => R.assoc('count', productCount(product.id), product) // making a clone of an object of product, setting the specified property 'count' with the given value (function)
    const products = R.compose(
        R.map(productWithCount), // getting products which on basket more then one time
        R.map(id=>getProductById(state,id)) // getting product from each unique id
    )(uniqueIds)
    return products;
 }