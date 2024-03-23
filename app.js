//  mod=10%3;

// // // pre and posr incre

// // let a=10;
// // let newa=a++;
// // let newb=++a;

// // // strings

// // let name="farooq";
// // console.log(name.length,name[0]);


// // let fanme="syed";
// // let lname="farooq";
// // let fullname = fanme + lname;
// // console.log(fullname);

// // // asignment

// // let name1="farooq";
// // console.log((name1.length),name1[0],name1[name1.length-1]);

// // let n="farooq";
// // console.log(`my name is ${n}`);


// // // operators

// // let age=8;

// // console.log(age==age);

// // // condtional statments

// // let input="green"
// // let color1="red";
// // let color2="org";
// // let color3="green";

// // if(input==color1){
// //     console.log("stop");
// // }
// // if(input==color2){
// //     console.log("wait");
// // }
// // if(input==color3){
// //     console.log("Go");
// // }

// // // -------------------------------
// // let size="";
// // if(size=="xl"){
// //     console.log("price 250");}

// // else if(size=="l"){
// //     console.log("price 200");
// // }

// // else if(size=="m"){
// //     console.log("price 100");
// // }
// // else{
// //     console.log("50")
// // }
// // // ----------nested if&else------

// let mar=34;



// if(mar>=35)
//     if(mar>=80){
//         console.log("a")
//     } 
//     else{
//         console.log("b")
//     }
// }
// else{
//     console.log("fail")
// }
// -----------------------
// if((mar>=35)&&(mar>=80)){
//    console.log("super") 
// }
// else if( (mar>=50)&&(mar>=35)){
//     console.log("ok")
// }
// else{
//     console.log("waste")
// }


// ----------------
// let str="apple";
// if((str.length>3)&&(str[0]='a')){
//     console.log("Good string");
// }

// let name=prompt("enter your name");
// console.log(name);

// alert("hey evvvara meru");

// ----------

// 
// string methods


// let string="syedomarfarooq";
// console.log(string.trim().toUpperCase());


// console.log(string.repeat(3,"syed"));

// let mess="help";

// console.log(mess.trim().toUpperCase());


// let name=["syed","farooq","omar"];


// name.push("fayaz");
// name.pop();

// let name1=['jan','jul','mar','aug'];


// for(i=1;i<=5;i++){
//     for(j=1;j<=5;j++){
//         console.log(j);
//     }
// }

// for (let i=0;i<=50;i++){
//     console.log(i);
// }


// for(let i=1;i<=3;i++){
//     for (j=0;j<=5;j++){
//         console.log(j);
//     }
// }


// let i=1;
// while(i<=5){
//     console.log(i);

// i++}


// const place="hyderabad";
// let guss=prompt("Guss rey");

// while(true){
//     if (place==guss){console.log("good guss");
//     break;
// }
// if(place!==guss){
//     guss=prompt("guss again");

// }
//  else{
//     console.log("you quit");
//     // break;
// }}


// let fruits=["apple","banana","grapes"];

// arr=[1,2,3,4,5,6];
// let num=arr.length;
// for(i=0;i<=arr.length;i++){
//     console.log(arr[i])

// }

// ---------------------todo app...............
// let todo=[];
// let req=prompt("please enter your request");
// while(true){
//     if(req=="quit"){
//         console.log("quitting app");
//         break;
//     }
//     if(req=="list"){
//         console.log("------------");
//         for(i=0;i<=todo.length;i++){
//             console.log(i,todo[i]);
//             console.log("------------");
//         }
//     }
//     else if(req=="add"){
//         let task=prompt("please enter what to add ");
//         todo.push(task);
//         console.log("Task added");
//     }
//     else if(req=="delete"){
//         let idx=prompt("what index you need to delete");
//          todo.splice(idx,1);
//          console.log("task deleted");      
//     }
//     else{
//         console.log("Wrong Request");
//     }
//     req=prompt("please enter your request");
// }

// -------------------------------------------

// const ran=prompt("ask the limit");

// const  random=Math.floor(Math.random()*ran)+1;

// const guss=prompt("enter your guss");

// while(true){
//     if(guss=="quit"){
//         console.log("your quiting");
//         break;
//     }

//     if(guss==random){
//         console.log("you guss is right");
//         break;
//     }
//     else{
//         console.log("wring guss");
//     }
//     guss = prompt("guss was wrong retry");
// }

// -------------methods-------------------------

// const calculator={
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     mul:function(a,b){
//         return a*b;
//     }
//     }
// -------------------------

// -----------this function-----------------------
//     const students={
//         name:"farooq",
//         age:27,
//         eng:40,
//         math:45,
//         phy:40,
//         getavg(){
//             let avg=(this.eng+this.math+this.phy)/3;
//             console.log(avg);

//         } 
// }

// ---------------------------------------------


// const sum=(a,b)=>{
//     console.log(a+b);
// }


// sum(1,2);


// const cube=(n)=>{
//     return n*n*n;
// }


// const div=(a,b)=>(
//     a/b
// );

// div(10,5);


// console.log("farooq");

// setInterval(() => {
// console.log("hello farooq");},4000);
// console.log("hello moto");


// let id=setInterval(()=>{
//     console.log("hello farooq");},2000);
//     console.log(id);



//     let square=(n)=>{

//         return n*n;
//     };

//     console.log(square(4));



//     let arr=[1,2,3,4,5];

//     const arrayavg=(arr)=>{
//         let total=0;
//         for(array of arr){
//             total=total+array;
//         }
//         return total/arr.length
//     };

//     console.log(arrayavg(arr));


//     let iseven=(iseven)=>{
//         if(iseven%2==0){
//             return "even";
//         }
//         else{
//             return "odd"
//         }
//     }

//     console.log(iseven(17));
// ------------------------------------
//  function name(){
//     console.log("farooq");
// }



// function loops(){
//     for(i=0;i<=5;i++){
//         console.log(i);
//     }
// }

// function age(){

//     if(age>=18){
//         console.log("adult");
//     }
// else{
//     console.log("not adult");
// }};



// function sum(a,b){
//     console.log(a*b);
// }

// function sum(a,b){
//     return a+b;
// }


// function allsum(n){
//     let sum=0;
//     for(i=1;i<=n;i++){
//         sum=sum+i;
//     }
//     return sum;
// }

// function name(a,b){
//     console.log("farooq"+(a+b));
// }

// name(1,2);


// let sum=20;
// function calsum(a,b){
//     let sum=a+b;
//     console.log(sum);
// }
// console.log(sum);

// calsum(1,2);

// ----------function-----------

// function name(){
//     console.log("farooq")
// };

// name("farooq");


// function age(age){

//     if(age>=18){
//         console.log("adult");
//     }
//     else{
//         console.log("not adult")
//     }
// };

// function hello(){
//     console.log("hello");}

// function sum(a,b){
//     return a+b;}


//     function oop(){
//         for (i=1;i<=5;i++){
//             console.log(i);
//             if(i==3){
//                 break;
//             }
//         }
//     };

//  function avg(a,b,c){
//      let average=(a+b+c)/3;
//      console.log(average);
// }

// avg(2,3,4);


// function sumq(n){
//     let sum=0;
//     for(i=0;i<=n;i++){
//         sum=sum+i;}
//         return sum;

// }


// let str=["hello", "farooq","how","are","you"];

// function con(str){
//     let store="";
//     for(i=0;i<str.length;i++){
//      store=store+str[i];}
//      return store;
//     }


//         function addition(a,b){
//             sum=a+b;
//             console.log(sum);
//         }

//   function outer(){
//     let a=1;
//     let b=2;
//     function inner(){
//        console.log(a);
//     }
//     inner();
//   }

//   outer();


//   let greet="aslm ramzan";
// function changegreet(){
//     let greet="mahe ramzan"
//     console.log(greet);

//     function inner(){
//         console.log(greet);
//     }
//     inner();
// }

// console.log(greet);
// changegreet();


// let store=function(a,b){ 

//     return a+b;
// }

// function farooq(str) {
//      return str.repeat(5);
    
//     }


// function highord(func,n){
//     for(i=1;i<=n;i++){
//         func();
//     }
// }

// let greet=function(){
//     console.log("hello");
// }

// highord(greet,3);