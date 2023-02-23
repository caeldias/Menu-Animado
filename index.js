const navBar = document.querySelector('.navbar')
const allLi = document.querySelectorAll('li')

allLi.forEach( (li, index) => {

    li.addEventListener("click", e => {
        navBar.querySelector(".active-List").classList.remove("active-List")
        li.classList.add("active-List")

        const indicator = document.querySelector(".indicator")
        indicator.style.transform = `translateX(calc(${index * 90}px))`
    })

})
