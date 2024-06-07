import {Character} from './Character';

/**
 * Represents the response structure from the Star Wars API for fetching characters.
 * @property {Character[]} results - An array containing characters retrieved from the API.
 */
export interface CharactersResponse {
    /** Total count of characters available in the API. */
    count: number;

    /** URL to the next page of characters, if available. */
    next: string | null;

    /** URL to the previous page of characters, if available. */
    previous: string | null;

    /** An array containing all characters retrieved from the API. */
    results: Character[];
}
