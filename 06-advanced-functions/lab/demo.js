function contextPrinter(a, b) {
    console.log(this, a, b);
}

function myFunc() {
    contextPrinter();
}

myFunc();

const myObj = {
    name: 'Peter',
    myFunc
};

const otherObj = {
    width: 5,
    height: 3
}

contextPrinter(11, 6);
contextPrinter.apply(myObj, [11, 6]);
contextPrinter.call(myObj, 11, 6);
contextPrinter.call(otherObj, 11, 6);

const boundFunc = contextPrinter.bind(myObj);
boundFunc(11, 6);



/*
const extractedFunc = myObj.contextPrinter();
extractedFunc();

document.querySelector('button').addEventListener('click', contextPrinter);
*/

