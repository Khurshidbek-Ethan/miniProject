// const person = {
// 	name: 'Ethan',
// 	years: 32,
// 	hobbies: {
// 		sport: 'Ping-pong',
// 		game: 'UFC',
// 	},
// }

// //Object ichidagi objectni olish
// for (let x in person) {
// 	if (typeof person[x] === 'object') {
// 		for (let j in person[x]) {
// 			console.log(`Property:${j} -> ${person[x][j]}`)
// 		}
// 	} else {
// 		console.log(`Property:${x} -> ${person[x]}`)
// 	}
// }

// // for in - faqat object un
// // for of - faqat array un

/////////////
// Prototype

// const suCars = {
// 	weight: 1000,
// 	length: 3,
// }

// const nexia = {
// 	wight: 800,
// }

// Object.setPrototypeOf(nexia, suCars)
// console.log(nexia) //nexiani ildizi suCars va suCarsniham ildizi yani prototypesi xarhil default methodlari

////////////////////

//Dom eski yolli

// const boxId = document.getElementById('box')
// console.log(boxId)
// const boxClass = document.getElementsByClassName('#box')
// console.log(boxClass) // HTMLCollection ni qaytaryapdi HTMLCollection degani bu array degani
// const buttons = document.getElementsByTagName('button')
// console.log(buttons) // bu ham  HTMLCollection ni qaytaryapdi HTMLCollection degani bu array degani
// console.log(buttons.length) //5

// Yangi yolli
// const getBox = document.querySelector('.box') // id yoki classni qolga olmoqchi bolsak albatta aytishimiz kerak boladi
// console.log(getBox)
// const getButton = document.querySelector('button')
// console.log(getButton)
// const getButtons = document.querySelectorAll('button')
// console.log(getButtons) // NodeList array qaytaradi

// const wrapper = document.querySelector('.wrapper')
// const hearts = wrapper.querySelectorAll('.heart') // agar bizga aynan wrapperni ichidahi heartni olib ber desak
// console.log(wrapper)
// console.log(hearts)
///////////////////////////////////////////////
// const box = document.querySelector('#box'),
// buttons = document.querySelectorAll('button'),
// circles = document.querySelectorAll('.circle')

// box.style.backgroundColor = 'red'
// box.style.width = '400px'
// //
// buttons[1].style.width = '200px'
// circles[0].style.borderRadius = '0'
// circles[1].style.cssText = 'background-color:red'

/// Solishtirish
// const buttons = document.querySelectorAll('button'), // NodeList da biz forEach() va array ga qandeymethodlar bolsa ishlatoramiz
// 	circles = document.getElementsByClassName('circle') // HTMLCollection da forEach amallarni ishlotolmeymiz  faqat for  ni ishlatamiz

// console.log(buttons)
// console.log(circles)

// for (let i = 0; i < circles.length; i++) {
// 	circles[i].style.borderRadius = '0'
// }

// buttons.forEach(item => {
// 	item.style.borderRadius = '100%'
// })

// const div = document.createElement('div')
// div.classList.add('heart')
// div.style.background = 'black'
// document.querySelector('.wrapper').append(div)
// // document.body.append(div)
////////

const div = document.createElement('div')
div.style.width = '400px'
div.style.height = '200px'
div.style.background = 'black'
document.querySelector('.app').append(div)

//////

const box = document.createElement('div')
box.style.background = 'red'
box.innerHTML = 'F'
box.classList.add('circle')
box.insertAdjacentHTML
document.querySelector('.circle__wrapper').append(box)

// Old version -> innerHTML <- ni orniga last Version -> insertAdjacentHTML <-
