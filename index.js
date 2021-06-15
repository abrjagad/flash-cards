function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

let currentNote = 0;
let start = 0;
const nextNote = document.getElementById("showNextNote");
const notes = [...document.getElementsByTagName("li")];
const showHint = document.getElementById("showHint");
const showAll = document.getElementById("showAll");

currentNote = getRandomIntInclusive(start, notes.length - 1);
notes[currentNote].className = "active";

nextNote.addEventListener(
  "click",
  () => {
    notes.map((v, i) => {
      v.classList.remove("active");
    });
    const rand = getRandomIntInclusive(start, notes.length - 1);
    currentNote =
      rand === currentNote
        ? getRandomIntInclusive(start, notes.length - 1)
        : rand;
    // console.log('rand', currentNote);
    notes[currentNote].className = "active";
  },
  true
);

function camelCaseToDash(myStr) {
  return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

let showHintAndAll = function(event){
  const targetId = camelCaseToDash(event.target.id);
  const bodyClassNames = document.body.classList;
  const hintShown = [...bodyClassNames].includes(targetId);
  hintShown
    ? bodyClassNames.remove(targetId)
    : bodyClassNames.add(targetId);
}

showHint.addEventListener("click", showHintAndAll, true);
showAll.addEventListener("click", showHintAndAll, true);

// showAll.addEventListener(
//   "click",
//   () => {
//     const bodyClassNames = document.body.classList;
//     const hintShown = bodyClassNames.contains("show-all");
//     hintShown
//       ? bodyClassNames.remove("show-all")
//       : bodyClassNames.add("show-all");
//   },
//   true
// );
