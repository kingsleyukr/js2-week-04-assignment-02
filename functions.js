const isTheWordSplit = (pArray) => {
  let firstElement = pArray[0];
  let dictionary = pArray[1];

  let str= dictionary.split(",");
  let answerWords = "";
  str.map((firstWord) => {
    str.map((word) => {
      let joinedWord = firstWord + word;
      let reversedWord = [joinedWord].reverse().toString();

      if (joinedWord == firstElement || reversedWord == firstElement) {
        return (answerWords = firstWord + "," + word);
      } else {
        return "false";
      }
    });
  });
  
  if (answerWords == "") {
    return "false";
  } else {
    return answerWords;
  }
};

export { isTheWordSplit };