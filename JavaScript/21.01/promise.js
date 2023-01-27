//promise is a class in js
//constructor(function)
let myPromise= new Promise((fullfilled,notfullfilled)=>{
    let sum=num1+num2;
    if(sum>24){
        fullfilled();

    }else{
        notfullfilled();

    }
}
);
myPromise
.then(()=>{
    console.log("promise fullfill");

}
)
.catch(()=> {
    console.log("promise not fullfilled")

});