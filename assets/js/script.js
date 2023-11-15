const menuicon =document.querySelector(".fa-bars")
const menu =document.querySelector(".ul-item")

menuicon.addEventListener("click",function myf(){
        menu.classList.toggle("ul-itemdisp")
})
const navbar = document.querySelector(".shop")
const btn=document.querySelector(".fa-bag-shopping")

navbar.style.display="none"
btn.addEventListener("click", function myf(){
    navbar.style.display="block"

} )
const x=document.querySelector(".x")
x.addEventListener("click",function ff(){
    navbar.style.display="none"
})
