export default function TabButton(props) {
    //document.querySelector('button').addEventListener('click'); this is vanilla Javascript
    // we want to write declarative code
    // i can write onClick prop anywhere button, li etc
    // onClick={handleClick} -> dont use ()
    // we are moving handleClick() function outside because the function displays different content based on the click event

    return (          
        <li>
            <button onClick={props.whenClicked}>{props.children}</button>
        </li>
    )
}

// we always get {props.children} children by default from React, it is the contents between tabs
//           <TabButton>Components</TabButton>  -> Components is children
// this way of building components where other components can wrap component or contents is called 'Component Composition'
// this is the Children approach, other is Attributes. <TabButton label="Components" />

