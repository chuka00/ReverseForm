function reverseText() {
    var inputText = document.getElementById('inputText').value;
    var reversedText = inputText.split('').reverse().join('');
    document.getElementById('result').innerHTML = '<strong>Reversed Text:</strong> ' + reversedText;
  }