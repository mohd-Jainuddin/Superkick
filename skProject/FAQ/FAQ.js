const questions = document.querySelectorAll("#que");

questions.forEach(function (que) {
    const btn = que.querySelector('#btn');
    btn.addEventListener("click", () => {
        questions.forEach((item) => {
            if (item != que) {
                item.classList.remove("show-text");
            }
        })
        que.classList.toggle("show-text");
    })
})