function customRender(reactElement,mainContainer){
     const domElement = document.createElement
     (reactElement.type);
     domElement.innerHTML = reactElement.children
     domElement.setAttribute("href",reactElement.props)
}

const reactElement = {
     type: 'a',
     props: {
          href: 'https://www.w3schools.com/react/react_state.asp',
          target: '_blank'
     },
     children: 'Click me to visit google'
}

const mainContainer = document.querySelector("#root");

customRender(reactElement,mainContainer)