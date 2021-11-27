const Product = ({name, brand, image, price}) => {
	return Div({
		classes: "flex-v align-center",
		children: [
			Img({
				classes: "bg-green",
				image,
			}),
			Div({
				classes: "",
				text: brand,
			}),
			Div({
				classes: "",
				text: name,
			}),
			Div({
				classes: "",
				text: price,
			}),
		]
	})
}

export default Product
