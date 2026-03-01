const character = {
    name: 'Snortleblat',
    class: 'Class: Swamp Beast Diplomat',
    level: 5,
    health: 100,

    attacked() {
        if (this.health <= 0) {
            window.alert("Character died");
        } else {
            this.health -= 20;
        };
    },

    levelUp() {
        this.level += 1;
    }
};

document.querySelector('#characterName').textContent = character.name;
document.querySelector('#characterClass').textContent = character.class;
document.querySelector('#characterLevel').textContent = `Level: ${character.level}`;
document.querySelector('#characterHealth').textContent = `Health: ${character.health}`;

document.querySelector("#attack-button").addEventListener("click", function () {
    character.attacked();
    document.querySelector('#characterHealth').textContent = `Health: ${character.health}`;
});

document.querySelector("#level-button").addEventListener("click", function () {
    character.levelUp();
    document.querySelector('#characterLevel').textContent = `Level: ${character.level}`;
});
