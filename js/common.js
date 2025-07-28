function  getQueryParams() {
    const queryParams = new URLSearchParams(window.location.search);
    const queryParamsObject  = Object.fromEntries(queryParams.entries());
    return queryParamsObject;
};

async function getCategoryById(id) {
    const product = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return product.data;
}

async function getCartById(id) {
    const cart = await axios.get(`https://fakestoreapi.com/carts/${id}`);
    return cart.data;
}

function removeLoader(){
    const loader = document.getElementById("loader");
    loader.style.display = "none";
}