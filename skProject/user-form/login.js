let registerbtn= document.querySelector("#Resister-btn")
let LogInbtn= document.querySelector("#LogIn-btn")
let userpage=document.querySelector(".container1")
let loginmessage=document.querySelector(".login-message")
// console.log(loginmessage)


let userArr=[]

if(!(localStorage.getItem("user"))){
    localStorage.setItem("user",JSON.stringify(userArr))
}

registerbtn.addEventListener("click",registeuser)

function registeuser(){
    let flag=0
    let ur= JSON.parse(localStorage.getItem("user"))
    regEmail=document.querySelector("#resister-email")
    if((regEmail.value).length>=11 && (regEmail.value).endsWith("@gmail.com")){
         // console.log(regEmail.value)
    ur.forEach(element => {
        if(element.emailId==(regEmail.value)){
            flag++
            // console.log(element)
        }
    });
    if(!flag){
        passcode=Math.floor((Math.random()*10000))
        // alert(passcode)
        ur.push({
            emailId:regEmail.value,
            password:passcode
        })
        localStorage.setItem("user",JSON.stringify(ur))
        loginmessage.innerText=(`Register Successfully. Your Password is ${passcode} ` )
        // setTimeout(() => {
        //     loginmessage.innerText=null
        // }, 2000);
    }else{
        loginmessage.innerText=("already register")
    //     setTimeout(() => {
    //         loginmessage.innerText=null
    //     }, 2000);
    }
    }else{
        loginmessage.innerText=("invalid")
        // setTimeout(() => {
        //     loginmessage.innerText=null
        // }, 2000);
    }
   
}

LogInbtn.addEventListener("click",loginuser)

function loginuser(el){
    let v=0
    logEmail=document.querySelector("#login-email").value.trim()
    logpass=document.querySelector("#login-pass").value
    let udata= JSON.parse(localStorage.getItem("user"))
    // console.log(logEmail,logpass)
    // console.log(e.target)
    udata.forEach((e)=>{
        if(logEmail==e.emailId && logpass==e.password){
            // alert("loggin successfull")
            v++

            window.location.href="http://127.0.0.1:5501/skProject/home/home.html"

            let z= e.emailId.slice(0,-10)

            localStorage.setItem("userName",z)
          
        }
        // console.log("dgff")
    })
    if(!v){
        loginmessage.innerText=("invalid email or passcode")
        // setTimeout(() => {
        //     loginmessage.innerText=null
        // }, 2000);
    }

}