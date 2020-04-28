// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

//3a

revWords1 = sentence => {
  var words = sentence.split(" ");
  var temp;
  for (var i = 0; i < words.length; i++) {
    temp = "";
    for (var j = words[i].length - 1; j >= 0; j--) {
      temp += words[i][j];
    }
    words[i] = temp;
  }
  return words.join(" ");
};
console.log(revWords1("Web App Dev"));
console.log(revWords1("Delta Echo"));

//3b
revWords2 = Sentence => {
  var words = Sentence.split(" ");
  var temp;
  Sentence.forEach(function(c) {
    temp += c + temp;
  });
  return words.join(" ");
};

console.log(revWords2("Web App Dev"));
console.log(revWords2("Delta Echo"));

//3c
revWords3 = sentence => {
  var words = sentence.split(" ");
  var temp = "";
  for (temp of words) {
    temp += words;
  }
  return words.join(" ");
};
console.log(revWords3("Web App Dev"));
console.log(revWords3("Delta Echo"));
