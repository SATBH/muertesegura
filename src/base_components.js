const genericComponent = (name) => ({style, text, children, classes, ...props}) => {
	const element = document.createElement(name)
	element.innerText = text || ""
	element.classList = classes

	if (style) {
		Object.entries(style).map(([attr, value]) => {
			element.style[attr] = value
		})
	}

	if (children){
		children.forEach((child) => element.appendChild(child))
	}

	for (const attr in props) {
		element.setAttribute(attr, props[attr])
	}

	return element
}


const Div = genericComponent('div')

const Link = ({classes,style, text, href}) => 
	genericComponent('a') ({style, text, classes, href})

const ComponentList = (propsArray, component) => propsArray.map(component)

const Nav = ({style, classes, routes, link_template, ...props}) => {
	return genericComponent('nav')(
		{
			...props,
			style,
			classes,
			children: routes.map(link_template)
		}
	)
}
