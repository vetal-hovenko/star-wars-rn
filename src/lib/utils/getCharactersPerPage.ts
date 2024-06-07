import {CharactersResponse} from '../types/CharacterResponse';

const API_URL = 'https://sw-api.starnavi.io/people/?page=';

/**
 * Used to fetch characters from a specific page.
 * @param pageNumber The page number from which to fetch characters.
 * @returns A promise that resolves with the data containing characters from the specified page.
 */
export async function getCharactersPerPage(
    pageNumber = 1,
): Promise<CharactersResponse> {
    try {
        const data = await fetch(API_URL + pageNumber);
        const characters: CharactersResponse = await data.json();

        return characters;
    } catch (error) {
        throw new Error('Unable to fetch characters');
    }
}
