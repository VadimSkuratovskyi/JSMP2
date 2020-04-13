function welcomeNewUser(greeting, company_name) {
    console.log(`${greeting} ${this.name} from ${company_name}`);
}

const persone = {
    name: "Vadym",
};

const persone1 = {
    name: "Vasyl",
};

function my_bind(fn, context, ...firstArgs) {
    return function (...args) {
        return fn.call(context, ...[...firstArgs, ...args])
    }
}
Function.prototype.myBind = function(context, ...firstArgs) {
    const func = this;
    return function(...args){
        return func.call(context, ...[...firstArgs, ...args]);
    };
};

// simple function realization
let vadymGreeting = my_bind(welcomeNewUser, persone, "Hello");
console.log(vadymGreeting("EPAM"));
console.warn("-------------------------------------------");
console.log(my_bind(welcomeNewUser, persone1, "Hi")("IHS"));


// Function.prototype realization
let olegGreeting = welcomeNewUser.myBind({name: "Oleg"}, "Hi");
console.log(olegGreeting("Facebook"));
