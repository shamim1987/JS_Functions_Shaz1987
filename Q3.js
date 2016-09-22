var wordReverse= function(string) {
return string.split(' - ').reverse().join(' - ');
/* ["Text 1", "Text 2", "Text 3", "Text 4"];
 ["Text 4", "Text 3", "Text 2", "Text 1"];
"Text 4 - Text 3 - Text 2 - Text 1"*/
};
wordReverse("Now I know what a TV dinner feels like");
wordReverse("Put Hans back on the line");
