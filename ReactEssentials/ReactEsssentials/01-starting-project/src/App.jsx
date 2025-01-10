// our first custom component
function Header() {
  return (
    <header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      Fundamental React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>

  )
}
// instead of calling the function, we use it like an HTML element (<Header></Header>)
// Header();

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        <h3>I am the first custom component!</h3>
      </main>
    </div>
  );
}

export default App;
