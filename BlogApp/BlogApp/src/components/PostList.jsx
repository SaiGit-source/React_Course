import Post from './Post';
import classes from './PostList.module.css';
import NewPost from './NewPost'
import { useState } from 'react';
import Modal from './Modal';

function PostList({isPosting, onStopPosting}){
    /*
    const [enteredBody, setEnteredBody] = useState('');

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    } 
    // we are passing bodyChangeHandler function as a value to props of NewPost component

    const [enteredAuthor, setEnteredAuthor] = useState('');

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    } 
*/
// i dont want to set my enteredBody and enteredAuthor here hardcoded

// Modal component for Modal overlay look
    const [posts, setPosts]=useState([]); // we manage a list of posts

    function addPostHandler(postData){
       //setPosts([postData, ...posts]); 
       setPosts((existingPosts) => [postData, ...posts]); // better way to update state
    }
    // ...posts we add postData to existing posts []

    return (
       <>
       {isPosting ? <Modal onClose={onStopPosting}>
            <NewPost 
                onCancel={onStopPosting} onAddPost={addPostHandler} > 
            </NewPost>
        </Modal>
        : null}
        {posts.length > 0 && (
        <ul className={classes.posts}>
                {/* <Post author={enteredAuthor} body={enteredBody}></Post>
                <Post author="Go" body="React is in high demand!"></Post> */}
                {posts.map((post)=> <Post key={post.body} author={post.author} body={post.body}></Post>)}
                {/* convert to JSX element 
                key={post.body} to avoid React warning*/}
        </ul> 
        )}
        
        {posts.length === 0 && (
            <div style={{textAlign: 'center', color: 'white'}}>
            <h2>There are no posts yet</h2>
            <p>Start adding some posts!</p>
            </div>
            )}
       </>
    )
}

export default PostList;