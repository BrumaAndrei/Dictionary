const AllWordsAdd = [];

function addDictionary() {
   let inpWord = document.getElementById('inputWord').value.trim();
   if (inpWord === '') {
      alertMessage.innerHTML = "This is not a word!";
      document.getElementById('inputWord').value = '';
   } else if (AllWordsAdd.includes(inpWord)) {
      alertMessage.innerHTML = "The word has already been added. Type another word!";
      document.getElementById('inputWord').value = '';
   } else {
      AllWordsAdd.push(inpWord);
      document.getElementById('inputWord').value = '';
      WordsDisplay(inpWord);

   }
}

function searchDictionary() {
   let findWord = document.getElementById('searchWord').value.trim();
   document.getElementById('searchWord').value = '';
   if (findWord === '') {
      alertMessage.innerHTML = "This is not a word!";
   } else if (AllWordsAdd.includes(findWord)) {
      alertMessage.innerHTML = "The word was found in the dictionary!";
   } else {
      alertMessage.innerHTML = "The word is not in the dictionary!";
   }
}

function WordsDisplay(inpWord) {
   let wrdli = document.createElement("li");
   const txtnd = document.createTextNode(inpWord);
   wrdli.appendChild(txtnd);
   llss.appendChild(wrdli);

}