
let y=parseInt(localStorage.getItem("x")) 
let Sdata=localStorage.getItem("apiData")
let data=JSON.parse(Sdata)

let singleproductpage=document.querySelector(".single-product-page")
let suggestionProduct=document.querySelector(".s-products")
// console.log(popupbox);
let cartArray=[]


// console.log(cancelbtn);

function showSelectProduct(){

    // fetch(`https://api.escuelajs.co/api/v1/products`)
    //  .then(response=>response.json())//text --> json
    //  .then(data=>{

        // console.log(data)
        
        data.forEach((e)=>{
       
            if(e.id==y){
              singleproductpage.innerHTML=`
              <section class="all-product-img">
                  <img class="smallimg" src="${e.images[0]}" alt="">
                  <img class="smallimg" src="${e.images[1]}" alt="">
                  <img class="smallimg" src="${e.images[2]}" alt="">
              </section>
              
              <section class="product-img">
                  <img class="zoomimg"src="${e.category.image}" alt="">
              </section>
              <section class="product-info">
                  <h3 class="product-brand-name">${e.brand}</h3>
                  <h1 class="product-name">${e.title}</h1>
                  <h2 class="product-price"><span>₹</span>${e.price}</h2>
                  <p class="product-details">${e.description}</p>
                  <div class="product-size-chat"><a href="../size chat/sizeChat.html">SIze Chat</a></div>
                  <div class="add-cart-box">
                      <input type="number" name="" id="" min="1" value="1">
                      <button id="${e.id}">Add cart</button>
                  </div>
              </section>
              `
            }
          })   
    //    })
       
    }
     
showSelectProduct()
singleproductpage.addEventListener("mouseover",showImage)

function showImage(e){
        if(e.target.src){
            document.querySelector(".zoomimg").src=e.target.src
        }
}


function suggestionProductShow(){

//  fetch(`https://api.escuelajs.co/api/v1/products`)
//      .then(response=>response.json())//text --> json
//      .then(data=>{

        // console.log(data)
for(let i=1;i<5;i++) {
    data.forEach((e)=>{
    if(e.id==(y+i)){
        suggestionProduct.innerHTML+=`
        <div class="s-product">
        <a href="productDetail.html"><img src="${e.category.image}" alt="" class="s-product-img Sclick" id="${e.id}"></a>
            <p class="p-type">New Arivable</p>
            <p class="s-product-brand">${e.brand}</p>
            <p class="s-product-name Sclick" id="${e.id}">${e.title}</p>
            <p class="s-product-price"><span>₹</span>${e.price}</p>
        </div>
        `
    }
})   
}   
      
// })
}
suggestionProductShow()


suggestionProduct.addEventListener("click",suggestionProductshow)

function suggestionProductshow(e){

    // console.log(e.target.classList[1])
    if(e.target.classList[1]=="Sclick"){
        console.log(e.target.id)
        let id=e.target.id
        localStorage.setItem("x",`${id}`)

    }
}


singleproductpage.addEventListener("click",addproducttocartarray)

function addproducttocartarray(e){
    // check if local is empty ---> if empty push to cartArry else----.> fetch the data from local push to cartarray then push the new data and stored in the local.
    if(e.target.id==y){
        // let popupcontainer=document.getElementById("all_cartitem")
    document.querySelector(".checkout_boxp").classList.remove("hide")

        if(localStorage.getItem("a")){
            // console.log(JSON.parse(localStorage.getItem("a")))
            // console.log((typeof (JSON.parse(localStorage.getItem("a")))))

            let c=JSON.parse(localStorage.getItem("a"))

            // console.log(e.target.id)
            // console.log(e.target.previousElementSibling.value);
            
          c.push({
                id: e.target.id,
                qut:e.target.previousElementSibling.value
            })
            let str1=JSON.stringify(c)
            localStorage.setItem("a",str1)
        
        }
        else{
            cartArray.push({
                id: e.target.id,
                qut:e.target.previousElementSibling.value
            })

            let str1=JSON.stringify(cartArray)
            localStorage.setItem("a",str1)
        }
        localStorage.getItem("a")
      
        
    }
    let bag = document.querySelector(".bag");
    let cart=JSON.parse(localStorage.getItem("a"))
    bag.innerText=cart.length
    console.log(  document.getElementById("all_cartitem"));
    
    console.log(cart);
    let Totalprice = document.querySelector(".counter");
    let TotalPeoduct=JSON.parse(localStorage.getItem("apiData"))
    let headerprice = 0

    document.getElementById("all_cartitem").innerHTML=null
    cart.forEach((element) => {
        TotalPeoduct.forEach((e) => {
            if (element.id == e.id) {
                headerprice += (e.price * element.qut)
                console.log(element)
                document.getElementById("all_cartitem").innerHTML+=` 
               
                    <div class="delete_items" >
                    <h2 class="cancelation_btn2" value=${e.id}>${"&times;"}</h2>
                    <p class="brandname">${e.title}</p>
                       <a href="">
                      <img class="finalbillcart" src="${e.category.image}" alt="">
                        </a>
                     </div>`
            }
            
            document.getElementById("all_cartitem").innerHTML+=` 
               
               <div class="delete_items" >
               <h2 class="cancelation_btn2" value=${e.id}>${"&times;"}</h2>
                   <p class="brandname">${e.title}</p>
                   <a href="">
                   <img class="finalbillcart" src="${e.category.image}" alt="">
                   </a>
                </div>`

    
        })
    
    })
    document.querySelector(".subp").innerHTML=headerprice
    console.log(headerprice)
    Totalprice.innerText=headerprice

}




let popupbox=document.querySelector(".checkout_boxp")
let cancelbtn=document.querySelector(".cancelation_btn1")
let addbox=document.querySelector(".bag")
cancelbtn.addEventListener("click",removebox)

addbox.addEventListener("click",addbox1)

function removebox(){
    popupbox.classList.add("hide")
}
let popupcontainer=document.getElementById("all_cartitem")
function addbox1(){
    popupbox.classList.remove("hide")

    let popuparr=JSON.parse(localStorage.getItem("a"))
    document.getElementById("all_cartitem").innerHTML=null
    popuparr.forEach(element => {
        data.forEach(e=>{
            if (element.id == e.id) {
                // headerprice += (e.price * element.qut)
                popupcontainer.innerHTML+=` 
                
                <div class="delete_items" >
                <h2 class="cancelation_btn2" value=${e.id}>${"&times;"}</h2>
                    <p class="brandname">${e.title}</p>
                    <a href="">
                    <img class="finalbillcart" src="${e.category.image}" alt="">
                    </a>
                 </div>`
            }
        })
    });
}

popupcontainer.addEventListener("click",removecart)

function removecart(){
    if (e.target.classList[0] == "cancelation_btn2") {

        newArr = cartdata.filter((x) => x.id != e.target.id)
        cartdata = newArr

        let str1 = JSON.stringify(newArr)
        localStorage.setItem("a", str1)

        CartItems.innerHTML = ""
        cartTotal.innerHTML = ""
        cartSubtotalShow()
        cartItemShow()
    }
}



