const $buttons = document.querySelectorAll("button")

$buttons.forEach(($button) => {
	$button.addEventListener("click", (e) => {
		const target = e.currentTarget
		const child = target.childNodes[0]
		const [layout, type] = child.id.split("-")

		if (type === "pl" || type === "ps") {
			const imgByType = {
				pl: {
					src: "./assets/pause.svg",
					id: `${layout}-ps`,
				},
				ps: {
					src: "./assets/play.svg",
					id: `${layout}-pl`,
				},
			}
			const img = document.createElement("img")
			img.setAttribute("src", imgByType[type].src)
			img.setAttribute("id", imgByType[type].id)
			target.replaceChild(img, child)
		}
	})
})
