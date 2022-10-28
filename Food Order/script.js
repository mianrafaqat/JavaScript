let select1 = document.getElementById('selectbtn1') 
let popup = document.querySelector(".pop-up")
let popupBG = document.querySelector(".bg-popup")
let closebtn = document.querySelector(".close")
let addToCart = document.querySelector(".add-to-cart")
let cartBtn = document.querySelector(".cart-btn")
let Fprice = document.querySelector(".first-price")
select1.addEventListener("click", () => {
   popup.classList.add("open-popup")
   popupBG.classList.add("bg-active")
   
});
closebtn.addEventListener("click", () => {
    popup.classList.remove("open-popup")
    popupBG.classList.remove("bg-active")
})
popupBG.addEventListener("click", () => {
    popup.classList.remove("open-popup")
    popupBG.classList.remove("bg-active")
})

addToCart.addEventListener("click", () => {
    cartBtn.textContent = "Your Cart " + Fprice.textContent
    popup.classList.remove("open-popup")
    popupBG.classList.remove("bg-active")
})
//-------------------------------------------- API ---------------------------------------

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '324dcff337msh39553d7ed0dede4p1133e5jsn5f1e6e05e198',
// 		'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
// 	}
// };

// const bOne =document.querySelector(".burger-one")
// const done = document.querySelector(".description-one")
// const btwo = document.querySelector(".burger-two")
// const dtw0 = document.querySelector(".description-two")
// const pone = document.querySelector(".price")
// const imgOne = document.querySelector(".img-one")
// function myFunc(success) {
//     bOne.textContent = success[0]?.name
//     done.textContent = success[0]?.description
//     // btwo.textContent = sec
//     pone.textContent = success[0]?.price
//     // imgOne.src = success[0]?.img
//     console.log(success)
//     }
    
    
//     fetch('https://pizza-and-desserts.p.rapidapi.com/desserts', options)
//         .then(data => data.json())
//         .then(success => myFunc(success));



