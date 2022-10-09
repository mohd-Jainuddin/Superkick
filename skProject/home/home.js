let stotrsimg=[
  "../img/BENGALURU-1-1.jpg",
  "../img/DELHI.jpg",
  "../img/guwahati-1.jpeg",
  "../img/MUMBAI-2.jpg",
  "../img/HYD.jpg"
]

let storesindia=document.querySelector(".stores-india")
let nextbtn=document.querySelector(".next")
let pevbtn=document.querySelector(".pev")
let flag=0

function show(){
    storesindia.innerHTML=null
 let storeimg=`
    <div> <a href="../stores/store.html"><img src="../img/BENGALURU-1-1.jpg" alt="" class="img"></a></div>
            <div> <a href="../stores/store.html"><img src="../img/DELHI.jpg" alt="" class="img"></a></div>
            <div> <a href="../stores/store.html"><img src="../img/guwahati-1.jpeg" alt="" class="img"></a></div>
            <div> <a href="../stores/store.html"><img src="../img/MUMBAI-2.jpg" alt="" class="img"></a></div> 
    `
    storesindia.innerHTML=storeimg
}
show()

function nextshow(e){
    // console.log(e.target)
    storesindia.innerHTML=null
        for(let i=0;i<4;i++){
            if(flag==stotrsimg.length){
                flag=0
                let storeimg=`
                <div> <a href="../stores/store.html"><img src="${stotrsimg[flag]}" alt="" class="img"></a></div>
        `
              storesindia.innerHTML+=storeimg
              flag++
            }
            else{
                let storeimg=`
                <div> <a href="../stores/store.html"><img src="${stotrsimg[flag]}" alt="" class="img"></a></div>
        `
              storesindia.innerHTML+=storeimg
              flag++
            }
        }
}
function pevshow(){
   
    storesindia.innerHTML=null
        for(let i=0;i<4;i++){
            if(flag<0){
                flag=4
                let storeimg=`
                <div> <a href="../stores/store.html"><img src="${stotrsimg[flag]}" alt="" class="img"></a></div>
        `
              storesindia.innerHTML+=storeimg
              flag--
            }
            else{
                let storeimg=`
                <div> <a href="../stores/store.html"><img src="${stotrsimg[flag]}" alt="" class="img"></a></div>
        `
              storesindia.innerHTML+=storeimg
              flag--
            }
           
        }
}
nextbtn.addEventListener("click",nextshow)
pevbtn.addEventListener("click",pevshow)









