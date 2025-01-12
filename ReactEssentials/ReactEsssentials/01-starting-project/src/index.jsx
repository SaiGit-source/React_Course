import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// App component is encounted only here and only once and React will execute only once during encounter
// we need to tell React when App must be executed again -> thats where State comes into picture