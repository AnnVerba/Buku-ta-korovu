 
let arr=[];
var i=0;
function randomNumber(){
arr[i]= Math.floor(Math.random()*10);
 
}
function computerNumber(){
 
for (var i;i<4;i++) {
 arr[i]= randomNumber();
 
}
if(arr[i]!=arr[i-1]){
    var bulls=0;
    var cows=0;
     let _arr=[];
    for (var g=0;g<4;g++) {
         _arr[i]= prompt("your number");
    //  var mynum=a.toString()+b.toString()+c.toString()+d.toString();
    //     console.log(mynum);
        for(var j=0;j<4;j++){
      if(_arr[j]==arr[j]){
       bulls++;
      }
      if(arr[0]==_arr[j]){cows++;}
      if(arr[1]==_arr[j]){cows++;}
      if(arr[2]==_arr[j]){cows++;}
      if(arr[3]==_arr[j]){cows++;}
        }
} console.log(bulls,cows)
}
else{
    console.log("ops");
    return bulls + "A" + cows + "B";
}
}
return rnd;

var bulls=0;
var cows=0;
function Entry(number){
 var a=prompt("input a");
 var b=prompt("input a");
 var c=prompt("input a");
 var d=prompt("input a");
 
 var mynum=a.toString()+b.toString()+c.toString()+d.toString();
    console.log(mynum);
  if(fourth==a || third==b || second==c || first==d){
   bulls++;
  }
  if(fourth==a){cows++;}
 return verif;
}
rnd = computerNumber();
if(true) {
            if (numbers[s] < 0) cows++;
            if (numbers[g] > 0) cows++;
            numbers[s] ++;
            numbers[g] --;
        }
    
    return bulls + "A" + cows + "B";

 var getHint = function(secret, guess) {
  var bulls = 0;
  var cows = 0;
  var nums = [];
  var checkNums = function(num) {
    if(nums.length) {
      for (var l = 0; l < nums.length; l++) {
        if(num === nums[l]) {
          return false;
        } else {
          nums.push(num);
          cows++;

          return true;
        }
    }}else {
         
        cows++;
        nums.push(num);
      }
    }
  };

  if(guess) {
     
    for (var i = 0; i < secret.length; i++) {
      
      if(secret[i] === guess[i]) {
        bulls++;
        nums.push(guess[i]);
      } else {
        
        for(var j = 0; j < guess.length; j++) {
        
          if (secret[i] === guess[j]) {

              checkNums(guess[j]);

          }
        }
      }
    }return bulls + "A" + cows + "B";
  }
  var blessed = require('blessed');
 
   
  var screen = blessed.screen({
    smartCSR: true
  });
   
  screen.title = 'my window title';
   
  
  var box = blessed.box({
    top: 'center',
    left: 'center',
    width: '50%',
    height: '50%',
    content: 'Hello {bold}world{/bold}!',
    tags: true,
    border: {
      type: 'line'
    },
    style: {
      fg: 'white',
      bg: 'magenta',
      border: {
        fg: '#f0f0f0'
      },
      hover: {
        bg: 'green'
      }
    }
  });
   
   
  screen.append(box);
 
  
   
   
  box.on('click', function(data) {
    box.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
    screen.render();
  });
   
   
  box.key('enter', function(ch, key) {
    box.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
    box.setLine(1, 'bar');
    box.insertLine(1, 'foo');
    screen.render();
  });
   
   
  screen.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0);
  });
   
  
  box.focus();
   
   
  screen.render();
