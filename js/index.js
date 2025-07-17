async function fetchCategories(){
    const response = await  fetch("https://fakestoreapi.com/products/categories");
    const data = await response.json()
    return data;
};


async function populateCategory (){
    const cateogries = await fetchCategories(); 
    const laoder  =document.getElementById("loader");
    laoder.style.display= "none";
    const categoryList  = document.getElementById("category-List");
    cateogries.forEach(category => {
        const categoryItem  = document.createElement("div");
        const aLink = document.createElement("a");
        categoryList.classList.add("catogry-list", "flex", "items-cetner", "justify-center", "gap-2", "sm:gap-1", "md:gap-2", "lg:gap-4", "xl:gap-6", "mt-6", "flex-wrap");
        categoryItem.classList.add("category-item","text-[1rem]","sm:text-md", "md:text-lg", "lg:text-xl", "xl:text-2xl"); 
        aLink.classList.add("capitalize");
        categoryItem.appendChild(aLink);
        aLink.href = `productList.html?category=${category}`;
        aLink.textContent = category;
        categoryList.appendChild(categoryItem);
    });
};
populateCategory();