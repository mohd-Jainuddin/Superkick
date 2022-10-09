let stores =[
    {
        city:"Mumbai",
        Contact:"Ground Floor, Yashwant Smruti Building, 12th Road, Khar West, Off-Linking Road, Near Madhu Park, Mumbai-400052",
        Phone:"+91 8097811422"
    },
    {
        city:"Bengaluru",
        Contact:"No. 1079, Ground Floor, 12th Main Rd, HAL 2nd Stage, Appareddipalya, Indiranagar, Bengaluru, Karnataka 560038",
        Phone:" +91 8043746613"
    },
    {
        city:"New Delhi",
        Contact:"39, Ground & Basement, Munika Marg, Vasant Vihar, New Delhi 110057",
        Phone:"+91 1146595396"
    },
    {
        city:"Guwahati",
        Contact:"Shop No. 26/26A City Center Mall, GS Road, Christian Basti, Guwahati, 781006",
        Phone:"+91 8453994654"
    },
    {
        city:"Hyderabad",
        Contact:"GROUND AND FIRST FLOOR, 8-2-589/3, Road No. 8, Banjara Hills, Hyderabad, Telangana 500034",
        Phone:"+91 845456982"
    }
]

let storelocation=document.querySelector(".stores")

stores.forEach((e)=>{
    storelocation.innerHTML +=`
    <div class="city">
            <h2>${e.city}</h2>
            <div class="info">
                <div class="contact">
                    <h3 class="adress">Contact:</h3>
                    <p class="adress_contant">${e.Contact}</p>
                    <h3 class="phone">Phone:<span>${e.Phone}</span></h3>
                    <h3 class="email">E-Mail:<span>info@superkicks.in</span></h3>
                </div>
                <div class="opening">
                    <h3 class="opening_hours">Opening hours:</h3>
                    <p>10:00 AM - 10:00 PM</p>
                    <p>Open all days</p>

                </div>
            </div>
        </div> 
    `
})
