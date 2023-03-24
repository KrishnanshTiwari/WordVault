const searchBtn = document.getElementById("Btn");

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const word = document.getElementById("mean");
const generate = async () => {
  try {
    let search = document.getElementById("srch").value;
    const res = await fetch(`${url}${search}`);

    const data = await res.json();
    word.innerHTML = 
                `<div class="word">
                <h3>${data[0].word}</h3>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
   
  } catch (err) {
    word.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    console.log(`the error is ${err}`);
  }
};
searchBtn.addEventListener("click", generate);

const meaning = document.getElementById(mean);
