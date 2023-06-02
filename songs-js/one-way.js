// // Function to transpose chords to a new key
// function transposeChords(chords, key) {
//     const chordsArray = chords.split('\n');
//     const transposedChords = [];

//     const noteMap = {
//         'A': 0,
//         'A#': 1,
//         'Bb': 1,
//         'B': 2,
//         'C': 3,
//         'C#': 4,
//         'Db': 4,
//         'D': 5,
//         'D#': 6,
//         'Eb': 6,
//         'E': 7,
//         'F': -4,
//         'F#': -3,
//         'Gb': -3,
//         'G': -2,
//         'G#': -1,
//         'Ab': -1,
//     };

//     for (let i = 0; i < chordsArray.length; i++) {
//         let chordLine = chordsArray[i];
//         let transposedLine = chordLine;

//         const chordRegex = /(\b[A-G][#b]?(m|maj|dim|aug|sus)?\d?\b)/g;
//         let match = chordRegex.exec(chordLine);

//         while (match !== null) {
//             const chord = match[0];
//             const transposedChord = transposeChord(chord, key, noteMap);
//             transposedLine = transposedLine.replace(chord, transposedChord);
//             match = chordRegex.exec(chordLine);
//         }

//         transposedChords.push(transposedLine);
//     }

//     return transposedChords.join('\n');
// }

// // Function to transpose a single chord
// function transposeChord(chord, key, noteMap) {
//     const root = chord.match(/[A-G][#b]?/)[0];
//     const chordType = chord.substring(root.length);
//     const currentNoteIndex = noteMap[root];
//     const transposedNoteIndex = currentNoteIndex + key;
//     const transposedRoot = getNoteByIndex(transposedNoteIndex, noteMap);
//     return transposedRoot + chordType;
// }

// // Function to get note by index in the note map
// function getNoteByIndex(index, noteMap) {
//     let note = '';
//     for (const [key, value] of Object.entries(noteMap)) {
//         if (value === index) {
//             note = key;
//             break;
//         }
//     }
//     return note;
// }

// // Transpose chords based on the selected key
// const transposeSelect = document.getElementById('transpose');
// const chordsElement = document.getElementById('lyrics');
// const chordsText = chordsElement.innerText;

// function transposeChordsOnChange() {
//     const selectedKey = parseInt(transposeSelect.value);
//     const transposedChordsText = transposeChords(chordsText, selectedKey);
//     chordsElement.innerText = transposedChordsText;
// }

// transposeSelect.addEventListener('change', transposeChordsOnChange);




// Function to transpose chords to a new key
function transposeChords(chords, key) {
    // Split the chords into an array of lines
    const chordsArray = chords.split('\n');
  
    // Array to store the transposed chords
    const transposedChords = [];
  
    // Mapping of notes to their indices for transposition
    const noteMap = {
      'A': 0,
      'A#': 1,
      'B': 2,
      'C': 3,
      'C#': 4,
      'D': 5,
      'D#': 6,
      'E': 7,
      'F': 8,
      'F#': 9,
      'G': 10,
      'G#': 11, 
    };
  
    // Iterate through each line of chordss
    for (let i = 0; i < chordsArray.length; i++) {
      let chordLine = chordsArray[i];
      let transposedLine = chordLine;
  
      // Regular expression to match chords
      const chordRegex = /(\b[A-G][#b]?(m|maj|dim|aug|sus)?\d?\b)/g;
  
      // Iterate through each chord in the line
      let match = chordRegex.exec(chordLine);
      while (match !== null) {
        const chord = match[0];
        const transposedChord = transposeChord(chord, key, noteMap);
        // Replace the chord with the transposed chord in the line
        transposedLine = transposedLine.replace(chord, transposedChord);
        match = chordRegex.exec(chordLine);
      }
  
      // Add the transposed line to the array
      transposedChords.push(transposedLine);
    }
  
    // Join the transposed lines and return the result
    return transposedChords.join('\n');
  }
  
  // Function to transpose a single chord
  function transposeChord(chord, key, noteMap) {
    const root = chord.match(/[A-G][#b]?/)[0];
    const chordType = chord.substring(root.length);
    const currentNoteIndex = noteMap[root];
    const transposedNoteIndex = (currentNoteIndex + key + 12) % 12;
    const transposedRoot = getNoteByIndex(transposedNoteIndex, noteMap);
    return transposedRoot + chordType;
  }
  
  // Function to get note by index in the note map
  function getNoteByIndex(index, noteMap) {
    let note = '';
    for (const [key, value] of Object.entries(noteMap)) {
      if (value === index) {
        note = key;
        break;
      }
    }
    return note;
  }
  
  // Transpose chords based on the selected key
  const transposeSelect = document.getElementById('transpose');
  const chordsElement = document.getElementById('lyrics');
  const originalChords = chordsElement.innerText;
  
  // Function to handle the change event of the transpose select
  function transposeChordsOnChange() {
    const selectedKey = parseInt(transposeSelect.value);
    const transposedChordsText = transposeChords(originalChords, selectedKey);
    chordsElement.innerText = transposedChordsText;
  }
  
  // Attach the transposeChordsOnChange function to the change event of the transpose select
  transposeSelect.addEventListener('change', transposeChordsOnChange);
  