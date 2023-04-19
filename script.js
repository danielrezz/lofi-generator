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
  'synth',
  'saxophone',
  'kalimba',
];

var bassOptions = ['synth', 'upright', 'electric', 'low piano'];

let options = [drumOptions, ambOptions, padOptions, leadOptions, bassOptions];
let generatedOptions = [];
let tempo;
let button = document.getElementById('generateBtn');

let printArray = function (arr) {
  if (typeof arr == 'object') {
    for (var i = 0; i < arr.length; i++) {
      printArray(arr[i]);
    }
  } else console.log(arr);
};

printArray(options);

// for (let i = 0; i < 9; i++) {
//     str = str + i;
//   }

// let drum = drumOptions[Math.floor(Math.random() * drumOptions.length)];

// console.log(drum);
