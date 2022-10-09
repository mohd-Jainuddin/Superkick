let d = localStorage.getItem("a")
let checkproduct = JSON.parse(d)
let Sdata=localStorage.getItem("apiData")
let data=JSON.parse(Sdata)
// console.log(checkproduct);

let checkoutproductD=document.querySelector(".checkout-product-details")
let checkoutPrice=document.querySelector(".checkout-price")

function showcheckoutproduct (){
    
    checkproduct.forEach(element => {
        data.forEach((e)=>{

            if(element.id==e.id){
                checkoutproductD.innerHTML+=`
             <div class="checkout-product">
                <img src="${e.images[0]}" alt="">
                <p>${e.title}</p>
                <h3>₹${e.price}</h3>
             </div>
                `
            }

        })
        
    });
}
showcheckoutproduct()

function showcheckoutPrice(){


    let subtotalprice=0
   
    checkproduct.forEach((element) => {
        data.forEach((e)=>{
            if(element.id==e.id){
            subtotalprice+=(e.price * element.qut)
            }

        })
    
    })

    checkoutPrice.innerHTML=`
    <div class="checkout-subtotal">
    <p>Subtotal</p>
    <h2>₹${subtotalprice}</h2>
</div>
<div class="checkout-shipping">
    <p>shipping</p>
    <div class="shipping-shipping-charge">
        <li>${(subtotalprice>=1000)? "Free":"flat"}</li>
        <p>₹${(subtotalprice)?((subtotalprice>=1000)? 0:250):0}</p>
    </div>
</div>
<div class="checkout-total">
    <h2>Total</h2>
    <div>
        <h2>₹${subtotalprice+((subtotalprice>=1000)? 0:((subtotalprice)?((subtotalprice>=1000)? 0:250):0))}</h2>
        <p>(includes ${Math.floor(((subtotalprice+((subtotalprice)?((subtotalprice>=1000)? 0:250):0))/100)*18)} 18% IGST)</p>
    </div>
</div>
<div class="checkout-emi">
    <p>Or 3 interest free payments of ₹${Math.floor((subtotalprice+((subtotalprice)?((subtotalprice>=1000)? 0:250):0))/3)} with </p>
</div>
<div class="checkout-proccid">
    <a href="">Proceed to Cashfee</a>
</div>
    `


}
showcheckoutPrice()