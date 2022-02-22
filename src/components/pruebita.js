var getNumber = {
    constructor: function(){ 
         return this.number, this.nombre;
    }    
}

var a = {
    number : 22,
    nombre : 'Edwar Cullen',
    __proto__:getNumber
}

var b = {
    number : 30,
    __proto__:getNumber
}

console.log(a);