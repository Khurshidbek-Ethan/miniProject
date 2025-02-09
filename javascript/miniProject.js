const seriesDB = {
	count: 0,
	series: {},
	actors: {},
	genres: [],
	private: false,

	start: function () {
		seriesDB.count = +prompt('Nechta serial ko’rdingiz?', '')
		while (
			seriesDB.count == '' ||
			seriesDB.count == null ||
			isNaN(seriesDB.count)
		) {
			seriesDB.count = +prompt('Nechta serial ko’rdingiz?', '')
		}
	},
	setSeries: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt(`Oxirgi ko’rgan serialingiz ${i}?`, '')
			const b = prompt(`Nechi baho berasiz ${i}?`, '')
			if (a !== null && b !== null && a !== '' && b !== '') {
				seriesDB.sereies[a] = b
			} else {
				i--
			}
		}
	},

	detectingLevel: function () {
		if (seriesDB.count < 5) {
			console.log("Kam serial ko'ripsiz")
		} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
			console.log('Siz classik tamoshabin ekansiz')
		} else if (seriesDB.count >= 10) {
			console.log('Siz serialchi zvezda ekansiz')
		}

		console.log(seriesDB)
	},
	visibleDB: function () {
		if (seriesDB.private) {
			seriesDB.private = false
		} else {
			seriesDB.private = true
		}
	},
	showDB: function () {
		if (!seriesDB.private) {
			console.log(seriesDB)
		} else {
			console.log("Ma'lumot mahfiy saqlanmoqda")
		}
	},
	writeGeneres: function () {
		let geners = prompt(
			"Yaxshi ko'rgan janringizni vergul yordamida yozing!",
			''
		)

		while (geners === null && geners === '') {
			geners = prompt(
				"Yaxshi ko'rgan janringizni vergul yordamida yozing!",
				''
			)
		}

		if (geners) {
			seriesDB.genres = geners.split(', ')
			seriesDB.genres.sort()
		}

		// for (let i = 0; i < 3; i++) {
		// 	const gener = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`, '')
		// 	if (gener === null && gener === '') {
		// 		i--
		// 	} else {
		// 		seriesDB.genres[i] = gener
		// 	}
		// }
	},
}

const chiledObj = Object.create(seriesDB)
console.log(chiledObj)
