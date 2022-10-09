let productBox = document.querySelector(".product-box")
let Sdata = localStorage.getItem("apiData")
let data = JSON.parse(Sdata)
let i=0

function showProduct() {

    // fetch(`https://api.escuelajs.co/api/v1/products`)
    //  .then(response=>response.json())//text --> json
    //  .then(data=>{
    data.forEach((e) => {
        if(e.Genders=="w" && e.category.name=="Shoes"){
            productBox.innerHTML += `
            <div class="product">
                    <a href="../productInfo/productDetail.html"><img src="${e.category.image}" alt="" class="click changeimg" id="${e.id}"></a> 
                    <p class="p-type">${e.brand}</p>
                    <p class="s-product-brand">${e.category.name}</p>
                    <a href="../productInfo/productDetail.html" class="click p-title" id="${e.id}">${e.title}</a>
                    <p>${e.price}</p>
                </div>
            `
        }
    })
}
showProduct()


function changeImage(e) {

    if (e.target.classList[1] == "changeimg") {

        data.forEach((element) => {
            if (e.target.id == element.id) {
                // console.log(e.target.src)
                // let imgarr=element.images
                e.target.src = element.images[i]
                i++
                i=(i>2)? 0:i
            }
        })
    }
}

productBox.addEventListener("mouseover", changeImage)


function productShow(e) {
    // console.log(e.target)
    if (e.target.classList[0] == "click") {
        // console.log(e.target.id)
        let id = e.target.id
        localStorage.setItem("x", `${id}`)
    }
}
productBox.addEventListener("click", productShow)


