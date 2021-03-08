"use strict"
 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let arr;
arr = [];
let arr2=[];
let s=1;
  
 var a = Math.floor(Math.random() * 9);
 arr.push(a);
 var b = Math.floor(Math.random() * 9);
 arr.push(b);
 var c = Math.floor(Math.random() * 9);
 arr.push(c);
 var d = Math.floor(Math.random() * 9);
 arr.push(d);
 while( a==b||b==c||c==d||d==a||a==c||b==d ){
    arr=[];
   
   var a = Math.floor(Math.random() * 9);
arr.push(a);
var b = Math.floor(Math.random() * 9);
arr.push(b);
var c = Math.floor(Math.random() * 9);
arr.push(c);
var d = Math.floor(Math.random() * 9);
arr.push(d); 

}
console.log(arr);

rl.on('Please enter the first number : ', (answer1) => { 
    rl.on('Please enter the second number : ', (answer2) => {
        rl.on('Please enter the first number : ', (answer3) => {
            rl.on('Please enter the second number : ', (answer4) => {  
                if(answer1==answer2||answer1==answer3||answer1==answer4||answer3==answer4||answer2==answer3||answer2==answer4){console.log('please do not use one number two times')}
                s=answer1;
                arr2.push=s;
                
                arr2.push=answer2;
               
                arr2.push=answer3;
                arr2.push=answer4;
                console.log(arr2);
               
                var k=0;
                var bools=0;
                for(let i=0; i<4; i++){
                    for(let j=0;j<4;j++){
if(arr[i]==arr2[i]){bools++;}
if(arr[0]==arr2[j]||arr[1]==arr2[j]||arr[2]==arr2[j]||arr[3]==arr2[j]||arr[4]==arr2[j]){
k++;
}
if(arr[i]==arr2[j]||arr[i]==arr2[j]||arr[i]==arr2[j]||arr[i]==arr2[j]||arr[i]==arr2[j]){
    console.log(win)  
}
                    }
                }
       console.log(k,b)         
        rl.close();
    });
});});});
