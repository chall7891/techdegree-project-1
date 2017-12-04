var quotation;
var colorInterval;
var quoteInterval;

//Generates random number between two specified parameters.
function getRandomNumber( lower, upper ) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

//Selects a random quote object from the quotes array and returns it.
function getRandomQuote() {
  return quotes[getRandomNumber(0, quotes.length - 1)];
}

//Stores a random quote object in a variable.
//Constructs a string containing the quote object's properties and displays it.
function printQuote() {
  quotation = getRandomQuote();
  var html = '<p class="quote">' + quotation.quote + '</p>';
  html += '<p class="source">' + quotation.source +
    constructOptionalString('citation') +
    constructOptionalString('year') +
  '</p>';
  html += '<p class="tag">' + quotation.tag + '</p>';
  document.getElementById('quote-box').innerHTML = html;
}

//Constructs strings for the citation and year properties if present in a
//particular quote object. If not present, returns an empty string.
function constructOptionalString(property) {
  if(quotation[property] !== undefined)
    return '<span class="' + property + '">' + quotation[property] + '</span>';
  else
    return '';
}

//Generates random color using getRandomNumber() and decimal values for red,
//green, and blue, and returns the random color.
function getRandomColor() {
  return 'rgb(' + getRandomNumber(0, 255) + ',' +
                  getRandomNumber(0, 255) + ',' +
                  getRandomNumber(0, 255) + ')';
}

//Changes background color for the body when called by changing the
//innerHTML of the <style/> tags to the value assigned to the css variable.
function changeBackgroundColor () {
  var css = '.changeableBackground { background-color: ' + getRandomColor() + '}';
  document.getElementById('backgroundColor').innerHTML = css;
}

//Calls printQuote() and changeBackgroundColor() every 10 seconds.
function autoChange() {
    colorInterval =  setInterval(changeBackgroundColor, 10000);
    quoteInterval =  setInterval(printQuote, 10000);
}

//Resets the intervals in autoChange() when called (button push). This keeps a
//a reset from occuring directly after a button push.
function resetInterval() {
  clearInterval(colorInterval);
  clearInterval(quoteInterval);
  autoChange();
}

//Creates event listeners to respond to "Show another quote" button clicks.
//When button is clicked, printQuote(), changeBackgroundColor() and
//resetInterval() are called.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", changeBackgroundColor, false);
document.getElementById('loadQuote').addEventListener("click", resetInterval, false);
