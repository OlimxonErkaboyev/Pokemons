const elMoreResult = document.querySelector(".js-result");
const elMoreTemp = document.querySelector(".js-more-temp").content;

const pokeId = window.localStorage.getItem("poke");

const cloneMorePokemonTemp = elMoreTemp.cloneNode(true);

pokemons.forEach((pokemon) => {
    if (pokeId == pokemon.id) {
        function random(number) {
            return Math.floor(Math.random() * (number + 1));
        }
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

        cloneMorePokemonTemp.querySelector(".js-more-result").style.backgroundColor = rndCol;
        cloneMorePokemonTemp.querySelector(".js-more-title").textContent = pokemon.title;
        cloneMorePokemonTemp.querySelector(".js-more-num").textContent = pokemon.num;
        cloneMorePokemonTemp.querySelector(".js-more-img").src = pokemon.img;
        cloneMorePokemonTemp.querySelector(".js-more-type").textContent = pokemon.type;
        cloneMorePokemonTemp.querySelector(".js-more-time").textContent = pokemon.spawn_time;
        cloneMorePokemonTemp.querySelector(".js-more-candy").textContent = pokemon.candy;
        cloneMorePokemonTemp.querySelector(".js-more-candy_count").textContent = pokemon.candy_count;
        cloneMorePokemonTemp.querySelector(".js-more-height").textContent = pokemon.height;
        cloneMorePokemonTemp.querySelector(".js-more-weight").textContent = pokemon.weight;
        cloneMorePokemonTemp.querySelector(".js-ortga-btn").addEventListener("click", () => {
            window.location.replace("http://127.0.0.1:5500/index.html");

        });
        elMoreResult.appendChild(cloneMorePokemonTemp);


    }
})