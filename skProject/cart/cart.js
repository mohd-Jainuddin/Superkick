
let d = localStorage.getItem("a")
let cartdata = JSON.parse(d)
let CartItems = document.querySelector(".cart-items")
let cartTotal = document.querySelector(".cart-total")
// console.log(cartTotal)
let Sdata = localStorage.getItem("apiData")
let data = JSON.parse(Sdata)


let CouponCode = ["GHJC49", "GHJC99", "GHJC149", "GHJC199"]
let GiftCard = ["GHJC299", "GHJC399", "GHJC499", "GHJC999"]

let CouponCodebtn = document.querySelector(".coupon")
let GiftCardbtn = document.querySelector(".GiftCard")
let updatecart = document.querySelector(".update-cart")
let couponmessage = document.querySelector(".coupon-message")


function cartItemShow() {
    cartdata.forEach(element => {
        data.forEach((e) => {
            if (element.id == e.id) {
                CartItems.innerHTML += `
    
                    <div class="cart-item">
                
                        <div class="cart-product-item">
                          <p class="renove-item-cart" id="${element.id}">${'\uD83D\uDDD9'}</p>
                          <a href="../productInfo/productDetail.html" ><img src="${e.category.image}" alt=""></a>
                          <a class="cart-product-name">${e.title}</a>
                        </div>
                        <input type="number" name="" id="cart-qt" min="1" value="${element.qut}" class="${element.id}">
                        <p class="cart-item-price">₹${e.price * element.qut}</p>
                    </div>
                
                    `
            }
        })
    });
}

cartItemShow()

function cartSubtotalShow() {

    let subtotalprice = 0

    cartdata.forEach((element) => {
        data.forEach((e) => {
            if (element.id == e.id) {
                subtotalprice += (e.price * element.qut)
            }

        })

    })

    cartTotal.innerHTML = `
    <div class="cart-sub-total">
    <p>Subtotal</p>
    <p>₹${subtotalprice}</p>
   </div>

    <div class="cart-shipping">
    <p class="shipping">Shipping</p>
    <div class="flat-rate-part">
        <li>${(subtotalprice >= 1000) ? "Free" : "Flat"}</li>
        <p>₹${(subtotalprice) ? ((subtotalprice >= 1000) ? 0 : 250) : 0}</p>
    </div>
    <p class="shipping-address">Shipping to <span></span>.</p>
    <p class="cart-change-adress">Change address</p>
       </div>

       <div class="carttotal">
    <div class="cart-total-heading">
        <p>Total</p>
    </div>
    <div class="cart-total-price">
        <p class="c">₹${subtotalprice + ((subtotalprice >= 1000) ? 0 : ((subtotalprice) ? ((subtotalprice >= 1000) ? 0 : 250) : 0))}</p>
        <p>(includes ${Math.floor(((subtotalprice + ((subtotalprice) ? ((subtotalprice >= 1000) ? 0 : 250) : 0)) / 100) * 18)} ₹ 18% IGST)</p>
    </div>
     </div>

      <div class="cart-emi">
    <p>Or 3 interest free payments of ₹${Math.floor((subtotalprice + ((subtotalprice) ? ((subtotalprice >= 1000) ? 0 : 250) : 0)) / 3)} with </p>
     </div>

     <a href="../checkout/checkout.html"> <div class="process-checkout-btn">Proceed to checkout
     </div></a>
    `
}
cartSubtotalShow()

CartItems.addEventListener("click", Removeitem)

function Removeitem(e) {

    if (e.target.classList[0] == "renove-item-cart") {

        newArr = cartdata.filter((x) => x.id != e.target.id)
        cartdata = newArr

        let str1 = JSON.stringify(newArr)
        localStorage.setItem("a", str1)

        CartItems.innerHTML = ""
        cartTotal.innerHTML = ""
        cartSubtotalShow()
        cartItemShow()
    }
    else if (e.target.src) {
        // console.log(e.target.parentElement.previousElementSibling.id);
        localStorage.setItem("x", e.target.parentElement.previousElementSibling.id)
    }

    updatebag()
}

CouponCodebtn.addEventListener("click", applyCoupon)


function applyCoupon(e) {
    let flag=0
let cartTotal=document.querySelector(".c")  
    CouponCode.forEach((ele) => {
        if (ele == e.target.previousElementSibling.value) {
            let discount=parseInt(e.target.previousElementSibling.value.slice(4))
            cartTotal.innerText=`₹${(parseInt(cartTotal.innerText.slice(1))-discount>=0)? parseInt(cartTotal.innerText.slice(1))-discount:0}`
            couponmessage.innerHTML = `You Save ${discount}`
            couponmessage.style.color="green"
            CouponCode.splice(CouponCode.indexOf(e.target.previousElementSibling.value),1)
            flag++
        }
    })
    if(!flag){
        couponmessage.innerHTML = `Invalid Coupon Code`
        couponmessage.style.color="red"
    }

}

GiftCardbtn.addEventListener("click",applyGift)

function applyGift(e) {
    let flag=0
    let cartTotal=document.querySelector(".c")  
    GiftCard.forEach((ele) => {
            if (ele == e.target.previousElementSibling.value) {
                let discount=parseInt(e.target.previousElementSibling.value.slice(4))
                cartTotal.innerText=`₹${(parseInt(cartTotal.innerText.slice(1))-discount>=0)? parseInt(cartTotal.innerText.slice(1))-discount:0}`
                couponmessage.innerHTML = `You Save ${discount}`
                couponmessage.style.color="green"
                GiftCard.splice(GiftCard.indexOf(e.target.previousElementSibling.value),1)
                flag++
            }
           
        })
        if(!flag){
            couponmessage.innerHTML = `Invalid Coupon Code`
            couponmessage.style.color="red"
        }

    }

updatecart.addEventListener("click",updatedcart)

function updatedcart(e){
    // console.log("done")
    // if(e.target.id=="cart-qt"){
        let cart=[]
        let qtchange=document.querySelectorAll("#cart-qt")
        qtchange.forEach((e)=>{
            cartdata.forEach((el)=>{
                if(e.classList.value==el.id){
                    el.qut=e.value
                    // console.log(e.value);
                    // console.log(el.qut);
                    // console.log(el);
                    cart.push(el)
                    
                }
            })
            
        })
        localStorage.setItem("a",JSON.stringify(cart))
        // console.log(cart);
        CartItems.innerHTML = ""
        cartTotal.innerHTML = ""
        cartSubtotalShow()
        cartItemShow()
        updatebag()
}

function updatebag(){
     let bag = document.querySelector(".bag");
    let cart=JSON.parse(localStorage.getItem("a"))
    bag.innerText=cart.length
    
    let Totalprice = document.querySelector(".counter");
    let TotalPeoduct=JSON.parse(localStorage.getItem("apiData"))
    let headerprice = 0
    cart.forEach((element) => {
        TotalPeoduct.forEach((e) => {
            if (element.id == e.id) {
                headerprice += (e.price * element.qut)
            }
    
        })
    
    })
    
    // console.log(headerprice)
    Totalprice.innerText=headerprice
}