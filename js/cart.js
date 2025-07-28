document.addEventListener("DOMContentLoaded",()=>{
    async function populateCart() {  
        // const queryparams = getQueryParams();
        // if(queryparams['id']) {
        //     const cartId = queryparams['id'];
        //     const cart = await getCartById(cartId);
        //     console.log(cart);
        // }

        const cart = await getCartById(1);
        const cartproduct = cart.products;
        console.log(cartproduct);
        const cartProductDownloadPromise = cartproduct.map(product =>{
            product.productId;
        })
    };
    populateCart();
})