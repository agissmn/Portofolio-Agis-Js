window.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.getElementById('menu-toggle')
	const navMenus = document.getElementById('nav-menus')
	const navMenuList = Array.from(navMenus.children)
	const overlay = document.getElementById('overlay')
	const line1 = document.getElementById('line-1')
	const line2 = document.getElementById('line-2')
	const line3 = document.getElementById('line-3')

	menuToggle.addEventListener('click', () => {
		navMenus.classList.toggle('active')
		overlay.classList.toggle('active')
		menuToggle.classList.toggle('active')

		line1.classList.toggle('active')
		line2.classList.toggle('active')
		line3.classList.toggle('active')

		navMenuList.map((menu) => {
			menu.classList.toggle('active')

			return menu
		})
	})

	overlay.addEventListener('click', () => {
		navMenus.classList.remove('active')
		overlay.classList.remove('active')
		menuToggle.classList.remove('active')

		line1.classList.remove('active')
		line2.classList.remove('active')
		line3.classList.remove('active')

		navMenuList.map((menu) => {
			menu.classList.remove('active')

			return menu
		})
	})
})
