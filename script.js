const allWordsAdd = [];

function addDictionary() {
   let inpWord = document.getElementById('inputWord').value.trim();
   if (inpWord === '') {
      alertMessage.innerHTML = "This is not a word!";
      document.getElementById('inputWord').value = '';
   } else if (allWordsAdd.includes(inpWord)) {
      alertMessage.innerHTML = "The word has already been added. Type another word!";
      document.getElementById('inputWord').value = '';
   } else {
      allWordsAdd.push(inpWord);
      document.getElementById('inputWord').value = '';
      displayWords(inpWord);

   }
}

function searchDictionary() {
   let findWord = document.getElementById('searchWord').value.trim();
   document.getElementById('searchWord').value = '';
   if (findWord === '') {
      alertMessage.innerHTML = "This is not a word!";
   } else if (allWordsAdd.includes(findWord)) {
      alertMessage.innerHTML = "The word was found in the dictionary!";
   } else {
      alertMessage.innerHTML = "The word is not in the dictionary!";
   }
}

function displayWords(inpWord) {
   let wrdli = document.createElement("li");
   const txtnd = document.createTextNode(inpWord);
   wrdli.appendChild(txtnd);
   llss.appendChild(wrdli);

}
