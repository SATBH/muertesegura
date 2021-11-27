import NavBar from "./NavBar.js"
import Products from "./Products.js"

function doto(arg, functions){
	functions.forEach(func => func(arg))
}

doto(
	document.getElementById('app'),
	[
		NavBar(),
		Products()
	].map((elem) => (arg) => arg.appendChild(elem))
)
