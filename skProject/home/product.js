let arr = [
  {
    id:20,
    img: "https://superkicks.in/wp-content/uploads/2021/09/CT8925-010-3-850x850.jpg",
    Brand: "Nike",
    name: "WMN’S NSW TOP",
    price: 1046,
  },
  {
    id:21,
    img: "https://superkicks.in/wp-content/uploads/2021/03/CZ8356-141-2-850x850.jpg.webp",
    Brand: "Nike",
    name: "HORT SLEEVES TOP NSW W",
    price: 1498,
  },
  {
    id:120,
    img: "https://superkicks.in/wp-content/uploads/2020/03/aztrek96-850x850.jpg.webp",
    Brand: "Reebok",
    name: "AZTREK 96'",
    price: 567,
  },
  {
    id:119,
    img: "https://superkicks.in/wp-content/uploads/2019/06/clleatherrc-2-850x850.jpg.webp",
    Brand: "Toms",
    name: "CL LEATHER RC 1.0",
    price: "839",
  },
  {
    id:52,
    img: "https://superkicks.in/wp-content/uploads/2022/08/HY6044-4.jpg-11-850x850.jpg",
    Brand: "Adidas",
    name: "VARSITY SWEAT PANTS ‘BEIGE’",
    price: 440,
  },
  {
    id:53,
    img: "https://superkicks.in/wp-content/uploads/2022/08/1-110-850x850.jpg",
    Brand: "Asics",
    name: "ADIDAS ADVENTURE RIDE TEC PANTS ‘LEGEND INK’",
    price: 660,
  },
  {
    id:82,
    img: "https://superkicks.in/wp-content/uploads/2022/07/1-121.jpg",
    Brand: "Adidas Original",
    name: "WMN’S OZWEEGO ‘ECRU TINT / HALO BLUSH’",
    price: 11999,
  },
  {
    id:84,
    img: "https://superkicks.in/wp-content/uploads/2022/09/1-13.jpg",
    Brand: "Puma",
    name: "OCA COLA x SUEDE ‘WHITE/RED’",
    price: 8999,
  },
  {
    id:79,
    img: "https://superkicks.in/wp-content/uploads/2022/09/1-26.jpg",
    Brand: "Nike",
    name: "AIR FORCE 1 ’07 LV8 ‘BLACK’",
    price: 9695,
  },
];
let crousel_container = document.querySelector(".product_container");
let prepbtn = document.querySelector(".crousel_btn1");
let nextpbtn = document.querySelector(".crousel_btn2");
function showproduct() {
  crousel_container.innerHTML = "";
  for (let i = 0; i<4; i++) {
    let html = `
    <div class="product">
    <a href="../productInfo/productDetail.html"><img src="${arr[i].img}" alt="" class="product_img" id="${arr[i].id}"></a>
                <p class="brand">${arr[i].Brand}</p>
                <p class="name">${arr[i].name}</p>
                <p class="price">${arr[i].price}</p>
      </div>
    `;
    crousel_container.innerHTML += html;
  }
}
showproduct()
prepbtn.addEventListener("click", next);
nextpbtn.addEventListener("click", next);
let count = 1;
function next() {
  crousel_container.innerHTML = "";
  for (let i = count; i < count+4; i++) {
    let html = `
      <div class="product">
          <a href="../productInfo/productDetail.html"><img src="${arr[i].img}" alt="" class="product_img" id="${arr[i].id}"></a>
                   <p class="brand">${arr[i].Brand}</p>
                   <p class="name">${arr[i].name}</p>
                   <p class="price">${arr[i].price}</p>
       </div>
      `;
      crousel_container.innerHTML += html;
    // console.log(html);
  }count++;
 
  if (count == 6) {
    count = 0;
  }
}

crousel_container.addEventListener("click",gotoProductPage)
function gotoProductPage(e){

  if(e.target.classList[0]=="product_img"){
    // console.log(e.target.id)
    localStorage.setItem("x",e.target.id)
  }
}