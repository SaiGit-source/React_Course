import Post from './Post';
import classes from './PostList.module.css';
import NewPost from './NewPost'

function PostList(props){
    return (
       <>
        <NewPost></NewPost>
        <ul className={classes.posts}>
                <Post author="Sai" body="React.js is awesome!"></Post>
                <Post author="Go" body="React is in high demand!"></Post>
        </ul> 
       </>
    )
}

export default PostList;