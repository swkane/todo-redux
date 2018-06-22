import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Index = () => (
    <Provider store={store} >
        <BrowserRouter basename={process.env.NODE_ENV === "production" ? "/todo-redux" : "/"}>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
