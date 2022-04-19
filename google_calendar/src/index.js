import App from './App'
import {Provider} from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');



const root = createRoot(container);
root.render(<Provider store={store}><Router><App tab="home" /></Router></Provider>);

