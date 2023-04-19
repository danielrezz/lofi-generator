// idea: implement API for random lofi track
// idea2: implement freesound API for random foley sound to use

var drumOptions = [
  'boombap',
  'jazzy',
  'sleepy',
  'chillhop',
  'Foley sounds only!',
];
var ambOptions = [
  'rain',
  'windy trees',
  'cityscape',
  'water stream',
  'nighttime',
];

var padOptions = ['strings', 'airy synth', 'vocal', 'arppegiated', 'lush'];

var leadOptions = [
  'vibraphone',
  'flute',
  'electric guitar',
  'acoustic guitar',
  'piano',
  'synthesizer',
  'saxophone',
  'kalimba',
];

var bassOptions = ['synth', 'upright', 'electric', 'low piano'];

let options = [drumOptions, ambOptions, padOptions, leadOptions, bassOptions];
let generatedOptions = [];
let tempo;
let button = document.getElementById('generateBtn');
let listContainer = document.querySelector('#instrumentList');
// listContainer.innerHTML = '';

let refreshOptions = () => {
  for (var i = 0; i < options.length; i++) {
    let secondOptions = options[i];
    let instrument =
      secondOptions[Math.floor(Math.random() * secondOptions.length)];

    generatedOptions.push(instrument);
  }
};

// console.log(generatedOptions);

let generateList = (arr) => {
  let li;

  arr.forEach(function (item) {
    if (Array.isArray(item)) {
      // if it's an array
      generateList(li, item); // call arrToUl with the li as the root
      return;
    }

    li = document.createElement('li'); // create a new list item
    li.appendChild(document.createTextNode(item)); // append the text to the li
    listContainer.appendChild(li); // append the list item to the ul
  });
};

button.addEventListener('click', function () {
  listContainer.innerHTML = '';
  refreshOptions();
  generateList(generatedOptions);
});
