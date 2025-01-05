// to start project: npm install, npm run dev
/*
function App() {
  return <h1>Hello World!</h1>;
}
*/ 
// instead of Hello world we could output Post.jsx component
// components should start with UpperCase character: <Post>, <post> is invalid because React will consider lowerCase character as default HTML element within React 
// for example, <div> doesn't start with Uppercase because it's a default HTML component
// Uppercase components are considered custom components

import Post from "./components/Post";

/*
function App() {
  return <Post></Post>;
}
but we want multiple Posts not just one
*/

// within <main> i can output multiple Posts because we are allowed to return only one element <main> within that i can have many sibling elements or you could have <></> empty as well
/*
function App() {
  return (
    <main>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </main>
  )
}
*/
// using props
/*
function App() {
  return (
    <main>
      <Post author="Sai" body="React.js is awesome!"></Post>
      <Post author="Go" body="React is in high demand!"></Post>
      <Post></Post>
      <Post></Post>
    </main>
  )
}
*/

import PostList from "./components/PostList";
function App() {
  return (
    <main>
      <PostList></PostList>
    </main>
  )
}
export default App;
