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
Totalprice.innerText=headerprice


let username=document.querySelector(".fa-user")
// console.log(username)

if(localStorage.getItem("userName")){
    username.innerText=localStorage.getItem("userName")
}

// localStorage.setItem

// let user=localStorage.getItem("userName")
// console.log(user)


// console.log(totalPric)















// input.addEventListener("click", () => {
//     input.innerHTML += `  <input type="text" class="itembox" placeholder="search here...">`
    // <span class="greater-in-input"><i class="fa-solid fa-greater-than"></i></span> `
// })
