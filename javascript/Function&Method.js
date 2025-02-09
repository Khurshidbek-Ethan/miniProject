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
