// React components are just functions
const names = ["Abc", "Xyz"];

import classes from './Post.module.css';

function Post(props) {
    const chosenName = Math.random() > 0.5 ? names[0] : names[1]; // 50-50 chance of either of names
/*
    return (
    <div>
        <p>Developer is Sai</p>
        <p>React.js is awesome!</p>
    </div>
    );
*/

/*
    return (
        <div>
            <p>Developer is {chosenName}</p>
            <p>React.js is awesome!</p>
        </div>
    );
*/
// inline styles
/*
return (
    <div style={{color: 'red', textAlign: 'left'}}>
        <p>Author is {props.author}</p>
        <p>Body is {props.body}</p>
    </div>
);
*/
// styles in css file
//className instead of class
/*
return (
    <div className='post'>
        <p>Author is {props.author}</p>
        <p>Body is {props.body}</p>
    </div>
);  
}
*/

// the other option is Post.module.css -> .module part is important this tells Vite, we want to use a feature called as css modules
// styles from Post.module.css
return (
    <li className={classes.post}>
        <p className={classes.author}>Author is {props.author}</p>
        <p className={classes.text}>Body is {props.body}</p>
    </li>
);  
}


export default Post;