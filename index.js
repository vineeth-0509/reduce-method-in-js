const prices=[5,30,10,25,15,20];
const total=prices.reduce(sum);
console.log(`$${total.toFixed(3)}`);

function sum(accumulator,element){
    return accumulator+ element;
}