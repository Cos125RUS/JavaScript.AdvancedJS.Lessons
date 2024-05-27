// const genNum = () => {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const randomNumber = Math.floor(Math.random() * 10) + 1;
//             if (randomNumber) {
//                 resolve(randomNumber);
//             } else reject('error');
//         }, 1000);
//     });
// };
// 
// genNum().then(num => console.log(num)).catch(err => console.err(err)).finally(() => console.log("finish"));



// const fetchData = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then((response) => {
//                 response.json();
//             })
//             .then(data => resolve(data))
//             .catch((err) => {
//                 reject('err');
//             });
//     });
// };

// fetchData('https://api.example.com/data')
//     .then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.error('error:', err.message);
//     });



Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    // new Promise((resolve, reject) => setTimeout(() => reject(new Error('err')), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))

])
.then(console.log).catch(console.error);