let input = document.querySelector(".inputbox");


input.addEventListener("click", () => {
    input.innerHTML += `  <input type="text" class="itembox" placeholder="search here...">`
    // <span class="greater-in-input"><i class="fa-solid fa-greater-than"></i></span> `
})
