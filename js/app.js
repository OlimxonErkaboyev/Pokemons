let elPokemonList = document.querySelector(".pokemon-list");


for (const pokemon of pokemons) {

    let elPokemonItem = document.createElement("li");
    let elPokemonName = document.createElement("h3");
    let elPokemonNumBadge = document.createElement("span");
    let elPokemonImg = document.createElement("img");
    let elPokemonType = document.createElement("p");
    let elPokemonTime = document.createElement("time");

    elPokemonItem.classList.add("pokemon-item");
    elPokemonName.classList.add("pokemon-name");
    elPokemonName.classList.add("text-center");
    elPokemonNumBadge.classList.add("pokemon-num");
    elPokemonNumBadge.classList.add("badge");
    elPokemonNumBadge.classList.add("bg-primary");
    elPokemonTime.classList.add("pokemon-time");

    let bgColors = ["bg-primary", "bg-secondary", "bg-success", "bg-danger"]
    // elPokemonItem.classList.add(Math.round(Math.random() * bgColors))


    elPokemonName.textContent = pokemon.name;
    elPokemonNumBadge.textContent = pokemon.num;
    elPokemonImg.src = pokemon.img;
    elPokemonImg.alt = pokemon.name;
    elPokemonImg.width = 250;
    elPokemonImg.height = 300;
    elPokemonType.textContent = pokemon.type.join(", ");
    elPokemonTime.textContent = pokemon.spawn_time;


    elPokemonItem.appendChild(elPokemonName);
    elPokemonItem.appendChild(elPokemonNumBadge);
    elPokemonItem.appendChild(elPokemonImg);
    elPokemonItem.appendChild(elPokemonType);
    elPokemonItem.appendChild(elPokemonTime);

    elPokemonList.appendChild(elPokemonItem);

}