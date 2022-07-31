const imgPlace = document.querySelector('.carousel');
const backButton = document.querySelector('.back');
const shuffleBtn = document.querySelector('.shuffle')
const nextButton = document.querySelector('.next');
const submit = document.querySelector('.submit');
const pokeName = document.querySelector('.name');
const pokeNumber = document.querySelector('.index')
const pokeType1 = document.querySelector('.type1');
const pokeType2 = document.querySelector('.type2');
let pokeIndex = 0;

inputPokemon = document.querySelector('.choosePokemon');
inputPokemon.addEventListener('change', pickPokemon)

function pickPokemon() {
    pokeIndex = inputPokemon.value;
    console.log(pokeIndex);
    api()
}

function nextApi() {
    nextButton.addEventListener('click', () => {
        pokeIndex++;
        api();
        if (pokeIndex >= 898) {
            pokeIndex = 0;
        }
    });
}

function prevApi() {
    backButton.addEventListener('click', () => {
        pokeIndex--;
        api();
        if (pokeIndex < 0) {
            pokeIndex = 899;
        }
    });
}

function shufflePokemon() {
    shuffleBtn.addEventListener('click', () => {
        pokeIndex = Math.floor(Math.random() * 898);
        api();
    });
}

async function api() {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeIndex}/`;
    const getJson = await fetch(url);
    const imgAPI = await getJson.json();

    console.log(imgAPI);

    imgPlace.setAttribute('src', imgAPI.sprites.front_default);
    pokeName.innerHTML = imgAPI.name.toUpperCase();
    pokeNumber.innerHTML = `Pokedex entry <b>${imgAPI.id}</b>`;
    pokeType1.innerHTML = imgAPI.types[0].type.name;
    if (imgAPI.types.length > 1) {
        pokeType2.innerHTML = imgAPI.types[1].type.name;
    } else {
        pokeType2.innerHTML = '';
    }
}

api();
nextApi();
prevApi();
shufflePokemon();