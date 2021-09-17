import { sortHeroes, heroes } from '../index'

const sortedList = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
];

describe('test sortHeroes function', () => {
    it('sorted list of heroes to be sortedList (won\'t work)', () => {
        expect(sortHeroes(heroes)).not.toBe(sortedList);
    })

    it('sorted list of heroes is equal to sortedList', () => {
        expect(sortHeroes(heroes)).toEqual(sortedList);
    })

    it('throw error if type of heroe\'s health is not a number', () => {
        expect(() => sortHeroes([{ name: '', health: 49 }, { name: '', health: '49' }])).toThrow('Some of heroes have wrong type of health');
    })

    it('throw error type of heroes list is not an array', () => {
        expect(() => sortHeroes({})).toThrow('heroes list is not an array!');
    })
})