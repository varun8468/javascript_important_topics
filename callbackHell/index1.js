const cart = ["shoes", "kurta", "pants"];

// api.createOrder(cart, function(){
//     api.proceedToPayment(function(){
//         api.showOrderSummary(function(){
//             api.updateWallet();
//         })
//     })
// })
// this is callback hell also known as pyramid of doom

// Inversion of Control
// you loose control of you code when you use callbacks

// in above example, we gave control of proceedToPayment  function to another function which is riskky...
// what if there are bugs in createOrder()??
// what if proceedToPayment called twice or never called??



// Promises ------------
const cart2 = ["shoes", "kurta", "pants"];

// createOrder(cart, function(orderId){
//     proceedToPayment(orderId);
// });

// const promise = createOrder(cart);

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

// promise gives the gauranty that callback function will be definitely called after promise object is assigned.
// we are not passing function to external function

const github_api = "https://api.github.com/users/akshaymarch7";

const user = fetch(github_api);
console.log(user);

// a promise is an object representing the eventual completion or failure of an asynchronous operation.


