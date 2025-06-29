// Function to get query parameters from the URL

document.addEventListener("DOMContentLoaded", function () {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }
    
    // Fetch data from the JSON file
    fetch("assets/json/products.json")
    .then(response => response.json())
    .then(products => {
            const query = getQueryParam("query");
            const productsContainer = document.getElementById("productContainer"); 

            // Filter products based on the query
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(query.toLowerCase())
            );

            const productGrid = document.getElementById("product-grid");

            if(filteredProducts && filteredProducts.length > 0) {
                filteredProducts.forEach((product) => {
                    // Construct the cover image path using the first image ID
                    const coverImagePath = `assets/images/${product.imageIds[0]}.png`;
        
                    // Create product element
                    const productDiv = document.createElement("a");
                    productDiv.href = product.link;
                    productDiv.className =
                        "flex flex-col items-center justify-center gap-3 p-5 transition-all duration-300 border border-gray-700 rounded shadow-sm hover:-translate-y-1 hover:scale-105 hover:shadow-md";
        
                    // Product content
                    productDiv.innerHTML = `
                <img class="mx-auto h-36" src="${coverImagePath}" alt="${product.name}">
                <h2 class="text-md font-semibold 2xl:text-xl">
                  ${product.name}
                </h2>
              `;
        
                    // Append to the grid
                    productGrid.appendChild(productDiv);
                });
            } else {
                setTimeout(() => {
                    productGrid.innerHTML = "<p>No products found</p>";
                })
            }
         
    });
});
