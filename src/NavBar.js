import {centerChildren} from "./classes.js"
const routes = [
	{
		text: "home",
		href: "/public/"
	},
	{
		text: "Quienes Somos",
		href: "/public/quienesSomos"
	}
]

const NavBar = Nav({
	classes: " nav gap-2 " + centerChildren,
	style: {
		height: "3rem"
	},
	routes,
	link_template: (route) => Link({
		classes: [],
		style: {
		},
		text: route.text,
		href: route.href
	})
})

export default NavBar
