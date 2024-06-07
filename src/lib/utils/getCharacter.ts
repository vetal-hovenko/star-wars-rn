import {Character} from '../types/Character';

export async function getCharacter(characterUrl: string) {
    try {
        const data = await fetch(characterUrl);
        const character: Character = await data.json();

        return character;
    } catch (error) {
        throw new Error(
            `Unable to fetch the character by this url: ${characterUrl}`,
        );
    }
}
