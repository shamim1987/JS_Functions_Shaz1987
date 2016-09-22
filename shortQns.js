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

var string="stringggyPasta";
var isACharacterAVowel = function(string) {
var arrayOfStrings = console.log(string.split());
for (var i = 0; i < arrayOfStrings.length; i++) {
  return arrayOfStrings[i];
};
if (arrayOfStrings[i]= 'a' || 'e' || 'i' || 'o' || 'u' ) {
return true  ;
} else {
  return false;
};


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
