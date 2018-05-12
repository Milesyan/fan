import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// client
//   .query({
//     query: gql`
//     {
//       rates(currency: "USD") {
//         currency
//       }
//     }
//     `
//   })
//   .then(r => {
//     console.warn(r);
//   })
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
