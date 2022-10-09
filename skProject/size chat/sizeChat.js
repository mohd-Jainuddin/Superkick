let sizearr=[
   {
      name:"Adidas Originals Women",
      uk:[1,2,3,4,5,6,7,8,9],
      eu:[1,2,3,4,5,6,7,8,9],
      us:[1,2,3,4,5,6,7,8,9],
      cm:[1,2,3,4,5,6,7,8,9]
   },
   {
      name:"Adidas Originals men",
      uk:[1,2,3,4,5,6,7,8,9],
      eu:[1,2,3,4,5,6,7,8,9],
      us:[1,2,3,4,5,6,7,8,9],
      cm:[1,2,3,4,5,6,7,8,9]
   },
   {
      name:"Asics Women",
      uk:[1,2,3,4,5,6,7,8,9],
      eu:[1,2,3,4,5,6,7,8,9],
      us:[1,2,3,4,5,6,7,8,9],
      cm:[1,2,3,4,5,6,7,8,9]
   },
   {
      name:"Asics men",
      uk:[1,2,3,4,5,6,7,8,9],
      eu:[1,2,3,4,5,6,7,8,9],
      us:[1,2,3,4,5,6,7,8,9],
      cm:[1,2,3,4,5,6,7,8,9]
   },
   {
      name:"Adidas Originals Women",
      uk:[1,2,3,4,5,6,7,8,9],
      eu:[1,2,3,4,5,6,7,8,9],
      us:[1,2,3,4,5,6,7,8,9],
      cm:[1,2,3,4,5,6,7,8,9]
   },
   {
      name:"Adidas Originals men",
      uk:[1,2,3,4,5,6,7,8,9],
      eu:[1,2,3,4,5,6,7,8,9],
      us:[1,2,3,4,5,6,7,8,9],
      cm:[1,2,3,4,5,6,7,8,9]
   },
   {
      name:"Asics Women",
      uk:[1,2,3,4,5,6,7,8,9],
      eu:[1,2,3,4,5,6,7,8,9],
      us:[1,2,3,4,5,6,7,8,9],
      cm:[1,2,3,4,5,6,7,8,9]
   },
   {
      name:"Asics men",
      uk:[1,2,3,4,5,6,7,8,9],
      eu:[1,2,3,4,5,6,7,8,9],
      us:[1,2,3,4,5,6,7,8,9],
      cm:[1,2,3,4,5,6,7,8,9]
   },
   {
      name:"Adidas Originals Women",
      uk:[1,2,3,4,5,6,7,8,9],
      eu:[1,2,3,4,5,6,7,8,9],
      us:[1,2,3,4,5,6,7,8,9],
      cm:[1,2,3,4,5,6,7,8,9]
   },
   {
      name:"Adidas Originals men",
      uk:[1,2,3,4,5,6,7,8,9],
      eu:[1,2,3,4,5,6,7,8,9],
      us:[1,2,3,4,5,6,7,8,9],
      cm:[1,2,3,4,5,6,7,8,9]
   },
   {
      name:"Asics Women",
      uk:[1,2,3,4,5,6,7,8,9],
      eu:[1,2,3,4,5,6,7,8,9],
      us:[1,2,3,4,5,6,7,8,9],
      cm:[1,2,3,4,5,6,7,8,9]
   },
   {
      name:"Asics men",
      uk:[1,2,3,4,5,6,7,8,9],
      eu:[1,2,3,4,5,6,7,8,9],
      us:[1,2,3,4,5,6,7,8,9],
      cm:[1,2,3,4,5,6,7,8,9]
   },
   {
      name:"Adidas Originals Women",
      uk:[1,2,3,4,5,6,7,8,9],
      eu:[1,2,3,4,5,6,7,8,9],
      us:[1,2,3,4,5,6,7,8,9],
      cm:[1,2,3,4,5,6,7,8,9]
   },
   {
      name:"Adidas Originals men",
      uk:[1,2,3,4,5,6,7,8,9],
      eu:[1,2,3,4,5,6,7,8,9],
      us:[1,2,3,4,5,6,7,8,9],
      cm:[1,2,3,4,5,6,7,8,9]
   },
   {
      name:"Asics Women",
      uk:[1,2,3,4,5,6,7,8,9],
      eu:[1,2,3,4,5,6,7,8,9],
      us:[1,2,3,4,5,6,7,8,9],
      cm:[1,2,3,4,5,6,7,8,9]
   },
   {
      name:"Asics men",
      uk:[1,2,3,4,5,6,7,8,9],
      eu:[1,2,3,4,5,6,7,8,9],
      us:[1,2,3,4,5,6,7,8,9],
      cm:[1,2,3,4,5,6,7,8,9]
   },
]


let x=document.querySelector(".sizes")

function showallsize(){
   sizearr.forEach((e)=>{
      let div1=document.createElement("div")
      div1.classList.add("sizeChat")

      let div2=document.createElement("div")
      div2.classList.add("sizeBrand")
      let div3=document.createElement("div")
      div3.classList.add("size")
      div3.classList.add("hide")

      div1.append(div2,div3)
      
      let brandName=document.createElement("h2")
      brandName.classList.add("brandName")
      brandName.innerText=e.name

      let sizeBtn=document.createElement("button")
      sizeBtn.classList.add("sizeBtn")
      sizeBtn.innerText="+"

      div2.append(brandName,sizeBtn)

      let table=document.createElement("table")
      let thead=document.createElement("thead")
      let htr=document.createElement("tr")
      thead.append(htr)
      let uk=document.createElement("th")
      uk.innerText="UK"
      let eu=document.createElement("th")
      eu.innerText="EU"
      let us=document.createElement("th")
      us.innerText="US"
      let cm=document.createElement("th")
      cm.innerText="CM"
      htr.append(uk,eu,us,cm)

      let tbody=document.createElement("tbody")

      for(let i=0;i<e.cm.length-1;i++){
         let btr=document.createElement("tr")

         let uktd=document.createElement("td")
         uktd.innerText=e.uk[i]
         let eutd=document.createElement("td")
         eutd.innerText=e.eu[i]
         let ustd=document.createElement("td")
         ustd.innerText=e.us[i]
         let cmtd=document.createElement("td")
         cmtd.innerText=e.cm[i]

         btr.append(uktd,eutd,ustd,cmtd)
         tbody.append(btr)
      }
      table.append(thead,tbody)
      div3.append(table)
      x.append(div1)
   })
}

showallsize()

x.addEventListener("click",show)

function show(e){
   if(e.target.classList.value=="brandName"){
    e.target.parentElement.nextElementSibling.classList.toggle("hide")
   }
}
