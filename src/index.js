export function sortHeroes(heroesList) {
    if (!Array.isArray(heroesList)) {
        throw new Error('heroes list is not an array!');
    }

    const wrongTypeOfHealth = heroesList.some((hero) => typeof hero.health !== 'number');

    if (wrongTypeOfHealth) {
        throw new Error('Some of heroes have wrong type of health');
    }

    return heroesList.sort((a, b) => Math.sign(b.health - a.health))
}

export const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
]