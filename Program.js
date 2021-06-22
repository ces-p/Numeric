
function abs(n){
    mask = n>>31;
    mask ^ n;  
    return (mask^n) - mask ;
}
console.log(abs(20));
