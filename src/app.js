const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
// Instead of forloop use Map method
// Code here
const initPlayers = (players) => {
    let detailedPlayers = players.map((player, index) => {
        return {
            name: player,
            strength: getRandomStrength(),
            image: `images/super-${index + 1}.png`, // Generating image name based on index
            type: (index % 2 === 0) ? 'hero' : 'villain' // Alternating between hero and villain
        };
    });

    return detailedPlayers;
}


// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    // Using filter, map, and join to generate HTML fragment for players
    let fragment = players
    .filter(player => player.type === type) // Filter players based on type (hero/villain)
        .map(player => `
            <div class="player">
                <img src="${player.image}" alt="${player.name}">
                <div class="name">${player.name}</div>
                <div class="strength">${player.strength}</div>
            </div>
        `)
        .join(''); // Join the HTML fragments into a single string
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
