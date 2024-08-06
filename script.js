
let checkCat = ["men's clothing","jewelery","electronics","women's clothing"];
console.log(checkCat.includes("jewelery"))

let productDiv = document.querySelector(".product")
var categoryListDiv = document.querySelector(".categoryList") 
let allcat = [];
let displayProduct = async (allCheckCat=[])=> {
  
    productDiv.innerHTML = '';
    let product = await fetch('https://fakestoreapi.com/products');
    let finalProduct = await product.json();    
    finalProduct.forEach(element => {


        if(!allcat.includes(element.category)){
        categoryListDiv.innerHTML += ` <label for="">
                    <input type="checkbox" onclick= 'categoryFilter()' value="${element.category}"> ${element.category}
                </label>`
                allcat.push(element.category)
        }

        if(allCheckCat.length==0){
            allCheckCat = allcat;;
        }

        if(allCheckCat.includes(element.category)){

        productDiv.innerHTML += ` <div class="productItems">
                <img src="${element.image}">
                <h4>${element.category}</h4>
                <p>Price Rs.${element.price} / ${element.rating.rate}</p>
                <h3>${element.title}</h3>
            </div>`
        }
    });
    
}

displayProduct();
 
let categoryFilter=()=>{
    let checkInput=document.querySelectorAll("input[type='checkbox']");
    let checkdata=[];
    checkInput.forEach((e)=>{
        if(e.checked){
            checkdata.push(e.value);
        }
    })
    displayProduct(checkdata)
}