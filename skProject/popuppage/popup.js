let checkout_container = document.querySelector(".checkout_boxp");
let checkout_content = document.querySelector("#all_cartitem");

let removebut1 = document.querySelector(".cancelation_btn1");
let removebut2 = document.querySelector(".cancelation_btn2");

let cartitmesv = document.querySelector(".delete_items");

let subpcontainer = document.querySelector(".subbtn");
letdata1 = JSON.parse(localStorage.getItem("a"));

// console.log(cartproduct);
let data1 = JSON.parse(localStorage.getItem("apiData"));

let addcbtn = document.querySelector(".addtocart");
let cart_container = document.querySelector(".checkout_box");
// console.log(addcartbtn);
// console.log(data1);

let datastorearr=[]

  for(let i =0; i<data1.length; i++){
addcbtn.addEventListener("click",(e)=>{
  
 
if(e.target.id==data1[i].id){
  datastorearr.push(data1[i])
  console.log(data1[i].id,"hello");
  console.log(e.target.id);
  console.log(datastorearr,"hi");
}

 
 

}) 


}
 


function showcart() {
 for(let i =0; i<datastorearr.length; i++){
  let popup = `
    
       <div class="delete_items" >
       <h2 class="cancelation_btn2" onclick="removeitems(event)" value=${datastorearr[i].id}>${"&times;"}</h2>
           <p class="brandname">${datastorearr[i].title}</p>
           <a href="">
           <img class="finalbillcart" src="${datastorearr[i].category.image}" alt="">
           </a>
        </div>

     
       `;
       checkout_content.innerHTML += popup;
      }
 }
      
  

showcart();

addcbtn.addEventListener("click", showpoup);

function showpoup() {
  checkout_container.classList.remove("hide");
  showcart();
  
}

removebut1.addEventListener("click", hidepopup);

function hidepopup() {
  checkout_container.classList.add("hide");
  div.classList.add("blur")
}

function removeitems(event) {
  console.log(event.id);
  data1.forEach((element) => {
    if (element.id == event.target.id) {
      newArr =data1.filter((x) => x.id != event.target.id);
     data1 = newArr;

      let str1 = JSON.stringify(newArr);
      localStorage.setItem("a", str1);

      cartitmesv.innerHTML = "";
      checkout_container.innerHTML = "";
    } else if (event.target.src) {
      localStorage.setItem(
        "x",
        event.target.parentElement.previousElementSibling.id
      );
    }
  });
  newArr =data1.filter((x) => x.id != event.target.id);
 data1 = newArr;

  let str1 = JSON.stringify(newArr);
  localStorage.setItem("a", str1);

  cartitmesv.innerHTML = "";
  checkout_container.innerHTML = "";
  showcart();
}

removeitems()

// function showsubtotalcart() {
//   let sprice = 0;

//  data1.forEach((element) => {
//     data1.forEach((event) => {
//       if (element.id == event.id) {
//         sprice += event.price * element.qut;
//       }
//     });
//   });

//   subpcontainer.innerHTML = `
//   <div class="cartsprice">
//   <p>Subtotal</p>
//   <p>₹${
//     (sprice,
//     sprice >= 1000 ? "Free" : "Flat",
//     sprice ? (sprice >= 1000 ? 0 : 250) : 0,
//     sprice + (sprice >= 1000 ? 0 : sprice ? (sprice >= 1000 ? 0 : 250) : 0),
//     Math.floor(
//       ((sprice + (sprice ? (sprice >= 1000 ? 0 : 250) : 0)) / 100) * 18
//     ),
//     Math.floor((sprice + (sprice ? (sprice >= 1000 ? 0 : 250) : 0)) / 3))
//   } 
//    </p>
//    </div>`;
// }
// showsubtotalcart();
