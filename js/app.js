const elPokemonSelect = document.querySelector(".js-pokemon-select");
const elPokemonOption = document.querySelector(".js-option");
const elSortOption = document.querySelector(".sort-option");
const elPokemonSort = document.querySelector(".js-pokemon-sort");
const elPokemonSortA_B = document.querySelector(".sort_a-z");
const elPokemonSortB_A = document.querySelector(".sort_z-a");
const elPokemonList = document.querySelector(".js-pokemon-list");
const elPokemonTemp = document.querySelector(".js-pokemon-temp").content;
const elPokemonFragment = new DocumentFragment();

const elPokemonForm = document.querySelector(".js-pokemon-form");
const elPokemonInput = document.querySelector(".js-pokemon-search-input");
const optionList = []


function renderPokemon(pokemon) {
    elPokemonList.innerHTML = null;
    pokemon.forEach(poke => {
        const clonePokemonTemp = elPokemonTemp.cloneNode(true);
        function random(number) {
            return Math.floor(Math.random() * (number + 1));
        }
        const Color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        clonePokemonTemp.querySelector(".js-pokemon-box").style.backgroundColor = Color;
        clonePokemonTemp.querySelector(".js-pokemon-title").textContent = poke.name;
        clonePokemonTemp.querySelector(".js-pokemon-num").textContent = poke.num;
        clonePokemonTemp.querySelector(".js-pokemon-img").src = poke.img;
        clonePokemonTemp.querySelector(".js-pokemon-type").textContent = poke.type.join(", ");
        clonePokemonTemp.querySelector(".js-pokemon-time").textContent = poke.time;
        clonePokemonTemp.querySelector(".js-more-btn").addEventListener("click", (evt) => {
            window.localStorage.setItem("poke", poke.id);
            window.location.replace("http://127.0.0.1:5500/more.html");
        })

        elPokemonFragment.appendChild(clonePokemonTemp);
    });
    elPokemonList.appendChild(elPokemonFragment);
};

elPokemonInput.addEventListener("input", (evt) => {
    evt.preventDefault();
    elPokemonSelect.value = elPokemonOption.value;
    elPokemonSort.value = elSortOption.value;

    const searchQuaery = RegExp(elPokemonInput.value, "gi");
    const foundPokemon = pokemons.filter((pokemon) => String(pokemon.name).match(searchQuaery));

    if (foundPokemon.length > 0) {
        renderPokemon(foundPokemon);
    } else if (foundPokemon.length = 0) {
        window.location.reload();
    } else {
        elPokemonList.innerHTML = `<div class = "text-center h1">${elPokemonInput.value} not found 🙄</div`
    }

})

for (let i = 0; i < pokemons.length; i++) {
    for (let j = 0; j < pokemons[i].type.length; j++) {
        if (!optionList.includes(pokemons[i].type[j])) {
            optionList.push(pokemons[i].type[j]);
        }
    }
}

function drawSelect() {
    optionList.forEach((item) => {
        const option = document.createElement("option");
        option.textContent = item;
        option.value = item;
        elPokemonSelect.appendChild(option);
    })
}
drawSelect()

elPokemonSelect.addEventListener("input", (evt) => {
    evt.preventDefault();
    elPokemonInput.value = "";
    elPokemonSort.value = elSortOption.value;

    const selectQueary = RegExp(elPokemonSelect.value, "gi");
    console.log(selectQueary);
    const foundOption = pokemons.filter((pokemon) => String(pokemon.type).match(selectQueary));

    if (foundOption.length > 0) {
        renderPokemon(foundOption);
    } else if (foundPokemon.length = 0) {
        window.location.reload();
    }
})

elPokemonSort.addEventListener("input", (evt) => {
    evt.preventDefault();
    elPokemonSelect.value = elPokemonOption.value;
    elPokemonInput.value = "";

    const findSort = pokemons.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (elPokemonSort.value == elPokemonSortA_B.value) {

            if (nameA < nameB) {
                return -1;
            } else if (nameA > nameB) {
                return 1;
            } else {
                return 0;
            };
        } else {

            if (nameA < nameB) {
                return 1;
            } else if (nameA > nameB) {
                return -1;
            } else {
                return 0;
            };
        };
    });
    renderPokemon(findSort);
});


renderPokemon(pokemons);
