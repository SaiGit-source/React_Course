import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css'; // we are importing css into jsx file
// css from index.css is added dynamic into DOM by vite

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
