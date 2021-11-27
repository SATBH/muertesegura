import Product from "./Product.js"

const Products = () => Div({
	classes: "",
	children: ComponentList([
	{
		image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png",
		brand: "LG",
		price: "200$",
		name: "something"
	}], Product)}) 

export default Products
