document.addEventListener("DOMContentLoaded",()=>{
    async function populateProducts() {
        const queryparams =  getQueryParams();
        if(queryparams['id']){
            const productId = queryparams['id'];
            const product =await getCategoryById(productId);
            console.log(product);

            const ProductName = document.getElementById("product-name");
            const ProductPrice = document.getElementById("product-price");
            const ProductDescription = document.getElementById("product-detail-data");
            const ProductImage = document.getElementById("product-img");
            

            ProductName.textContent = product.title;
            ProductPrice.textContent = `\u20B9 ${product.price}`;
            ProductDescription.textContent = product.description;
            ProductImage.src =product.image;

        }
    }
    populateProducts()

    
});