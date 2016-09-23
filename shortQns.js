var maxOfTwoNumbers = function(num1,num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2;
  }
};

var maxOfThreeNumbers = function(num1,num2,num3) {
  if (num1 > num2 && num3) {
  return num1;
} else if (num2 > num1 && num3){
  return num2;
} else if(num3 > num2 && num1) {
  return num3;
}
}

var string=('');
var isACharacterAVowel = function(string) {
for (var i = 0; i < string.length; i++) {
if (isACharacterAVowel[i] === 'a' || 'e' || 'i' || 'o' || 'u' ) {
return true  ;
} else {
  return false;
};
}


var sumArray = function([]){
  var result=0;
for (var i = 0; i < array.length; i++) {
result+=array[i];
};
}

var multiplyArray = function([]){
  var result=1;
for (var i = 0; i < array.length; i++) {
result*=array[i];
};
}

var numArgs = function(){
  return arguments.length;
}

var revStrings =function(string) {
  return string.split('').reverse().join('');
}


var arr = ['first item', 'second item is longer than the third one',
           'third longish item'];
var lgth = 0;
var longest;
var longestWord= function(arr){
for(var i=0; i < arr.length; i++){
    if(arr[i].length > lgth){
        var lgth = arr[i].length;
    }
        longest = arr[i];
}
}

return longest();
