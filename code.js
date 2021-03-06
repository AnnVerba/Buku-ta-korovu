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
  
var counter=0;
function randomNumber(){
var number= Math.floor(Math.random()*10);
return number
}
function computerNumber(){
var fourth= randomNumber();
for (var i;i=1;i++) {
 var third= randomNumber();
 var second= randomNumber();
 var first= randomNumber();
 if(third!=fourth && second!=fourth && second!=third && first!=fourth && first!=third && first!=second){break}
}
var rnd=fourth.toString()+third.toString()+second.toString()+first.toString();
console.log(rnd);
return rnd;
}
function verifyEntry(number){
 number=number.toString();
 verif=true;
 for (var i=0;i<4;i++){
  if (number.lastIndexOf(number.charAt(i))!=i){
   verif=false;
   break;
  }
 }
 return verif;
}
rnd = computerNumber();
else {
            if (numbers[s] < 0) cows++;
            if (numbers[g] > 0) cows++;
            numbers[s] ++;
            numbers[g] --;
        }
    }
    return bulls + "A" + cows + "B";
}
Specifically I am having a difficult time understanding the following block of functionality:

else {
    if (numbers[s] < 0) cows++;
    if (numbers[g] > 0) cows++;
    numbers[s] ++;
    numbers[g] --;
}
Here is my JS solution I have derived that is passing all (known) test cases except for secret = 1807 and guess = 7810:

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
      } else {
        // /nums/ is equal to 0
        cows++;
        nums.push(num);
      }
    }
  };

  if(guess) {
    // iterate over the secret to compare it to the guess
    for (var i = 0; i < secret.length; i++) {
      // compare the related location to check for bulls
      if(secret[i] === guess[i]) {
        bulls++;
        nums.push(guess[i]);
      } else {
        // We didnt find a bull, lets check the /guess/ for cows
        for(var j = 0; j < guess.length; j++) {
          // We have a match, what should we do with it?
          if (secret[i] === guess[j]) {

              checkNums(guess[j]);

          }
        }
      }
    }
  }

  return bulls + "A" + cows + "B";
};
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
      } else {
        // /nums/ is equal to 0
        cows++;
        nums.push(num);
      }
    }
  };

  if(guess) {
    // iterate over the secret to compare it to the guess
    for (var i = 0; i < secret.length; i++) {
      // compare the related location to check for bulls
      if(secret[i] === guess[i]) {
        bulls++;
        nums.push(guess[i]);
      } else {
        // We didnt find a bull, lets check the /guess/ for cows
        for(var j = 0; j < guess.length; j++) {
          // We have a match, what should we do with it?
          if (secret[i] === guess[j]) {

              checkNums(guess[j]);

          }
        }
      }
    }
  }

  return bulls + "A" + cows + "B";
};
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
