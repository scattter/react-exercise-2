import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
// import Form from './Myform/Form';
import './styles/main.scss';


// function fetchData(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         // <-- start
//         // TODO 22: 通过Promise实现异步请求
//         xhr.open('GET', url, true);
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(xhr.response);
//                 } else {
//                     reject(xhr.response);
//                 }
//             }
//         };
//         xhr.send();
//         // end -->
//     });
// }

// const URL = 'http://localhost:3000/products';
// fetchData(URL)
//     .then(result => {
//         console.log(result);
//         document.writeln(result.name);
//     })
//     .catch(error => {
//         console.error(error);
//     });

ReactDOM.render(<App />, document.getElementById('root'));
