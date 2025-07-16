document.addEventListener("DOMContentLoaded", ()=>{
    async function fetchProducts (){
        const response = await axios.get("https://fakestoreapi.com/products")
        console.log(response.data)
        return response.data;
    };

    async function populateProducts() {
        const products = await fetchProducts();
        const productList = document.getElementById("product-list-wrapper");
        productList.classList.add("flex", "flex-wrap", "gap-2", "items-center", "justify-center");
        products.forEach(product => {
           let alink =  document.createElement("a");
           alink.href ="productDetail.html";
           alink.target="_blank";
           alink.classList.add("inline-block",  "shadow-lg", "rounded", "p-4","flex","items-center","justify-center");
           let productImageDiv = document.createElement("div");
           productImageDiv.classList.add("flex","items-center","justify-center");
           let productImage = document.createElement("img");
           productImage.src= product.image;
           let proDetail  = document.createElement("div");  
           let ProductPrice  = document.createElement("div");
           ProductPrice.classList.add("price", "text-center");
           proDetail.classList.add("pro-detail","wrap", "text-center","w-40");
           productImage.classList.add("w-30", "h-30", "rounded")


           ProductPrice.textContent = `\u20B9${product.price}`;
           proDetail.textContent = product.title.substring(0, 12) + "....";
            productImageDiv.appendChild(productImage)
             alink.appendChild(productImageDiv);
           alink.appendChild(proDetail);   
           alink.appendChild(ProductPrice);
            productList.appendChild(alink);

        });
    };
    populateProducts();
}); 