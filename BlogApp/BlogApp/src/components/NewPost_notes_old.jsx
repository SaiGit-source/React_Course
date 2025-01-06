import classes from './NewPost.module.css';
// when i type name in this form it should go int Post thats where State can help us
/*
Website we are building typically have different states: if we have a dynamic website -> a website where things change after it was initially loaded.. even in the Blog App, we want to change Text after the website is rendered. that means the website has different states -> changing texts
*/
// to update text as we type -> register state and setup eventListener to tell React when the state should be updated
// lets listen to keystroke in that textArea
// addEventListener in Javascript
// declarative approach in React -> prop -> onKeyDown or onChange
// we are passing changeBodyHandler() function to onChange prop -> eventListener

import { useState } from 'react';
// useState is a React hook, starts with 'use'.
// you must execute within React compoent functions
// when you execute useState, you register a new state slice/value
// you get the latest JSX snapshot from function and if it deviates from the previous, React will update part in UI that needs updating
function NewPost() {
    // let enteredBody=''; // the problem is, when this code is loaded once then React doesn't know about the updated value for this variable. so we need a special React feature 
    const [enteredBody, setEnteredBody] = useState('');
    //const stateData = useState('');
    //stateData[0] // current value
    //stateData[1] // state updating function
    // how to get useState from NewPost to PostList?
    

    function changeBodyHandler(event){
        console.log(event.target.value);
        // enteredBody=event.target.value; this doesn't work thats why we need State
        setEnteredBody(event.target.value);
    }

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
            </p>
            <p>{enteredBody}</p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required />
            </p>
        </form>
    )

}

export default NewPost;