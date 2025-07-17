document.addEventListener("DOMContentLoaded", async ()=>{
    async function fetchProducts  (){
        const response = await axios.get("https://fakestoreapi.com/products")
        console.log(response.data)
        return response.data;
    };

    async function fetchProductByCategory(category){
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        console.log(response.data)
        return response.data;
    }


    async function fetchCategories(){
    const response = await  fetch("https://fakestoreapi.com/products/categories");
    const data = await response.json()
    return data;
    };

    const downloadProducts = await fetchProducts();
    async function populateProducts(flag, customProducts) {
        let products = customProducts;
        const queryParams = new URLSearchParams(window.location.search);
        const queryParamsObject  = Object.fromEntries(queryParams.entries());
        if (flag == false) {
            if(queryParamsObject['category']){
                products = await fetchProductByCategory(queryParamsObject['category']);
            }else { 
                products = await fetchProducts();
            }
        };
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

    async function populateCategory(){
        const cateogries = await fetchCategories();
        const categoryList = document.getElementById("category-list")
        cateogries.forEach(cateogrie =>{
            const alink =document.createElement("a");
            alink.href = `productList.html?category=${cateogrie}`;
            alink.classList.add("p-2", "text-black", "hover:text-gray-400", "border-b-1", "bg-sky-100");
            alink.textContent = cateogrie;
            categoryList.appendChild(alink);
        })
    }   
    async function downloadContentAndPopulate() {
        Promise.all([populateProducts(false), populateCategory()])
       .then(()=>{   
        const loader = document.getElementById("loader");
        loader.style.display = "none";
       })
    }
    downloadContentAndPopulate()

    const filterSearch = document.getElementById("searched")
    filterSearch.addEventListener("click",  ()=>{
        const productList = document.getElementById("product-list-wrapper");
        const MinPrice = Number(document.getElementById("minPrice").value);
        const MaxPrice = Number(document.getElementById("maxPrice").value);
        const products =  downloadProducts;
        const filteredProducts = products.filter(product => product.price >= MinPrice && product.price <= MaxPrice);
        productList.innerHTML = "";
        populateProducts(true, filteredProducts);
    });
    const filterClear = document.getElementById("Clear");
    filterClear.addEventListener("click", ()=>{
        window.location.reload();
    })
}); 