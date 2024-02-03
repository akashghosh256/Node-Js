
function add(a,b ){
   return (a+b); 
}
function sub(a,b){
    return (a-b); 
 }
 // always export then only function can be globally ascessible by other modules
 
// module.exports = "Akash"
//module.exports =add

module.exports = {
    add,
    Minus:sub  //changing the function name
}















