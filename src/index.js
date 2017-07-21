import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCxwCQ29xrPdVXM4O6aLSG0YuzYKLydnPM",
    authDomain: "bondeliafeltet.firebaseapp.com",
    databaseURL: "https://bondeliafeltet.firebaseio.com",
    projectId: "bondeliafeltet",
    storageBucket: "bondeliafeltet.appspot.com",
    messagingSenderId: "587435184899"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
