/**
 * Represents a character in the Star Wars universe.
 */
export interface Character {
    /** The name of the character. */
    name: string;

    /** The height of the character. */
    height: string;

    /** The mass of the character. */
    mass: string;

    /** The hair color of the character. */
    hair_color: string;

    /** The skin color of the character. */
    skin_color: string;

    /** The eye color of the character. */
    eye_color: string;

    /** The birth year of the character. */
    birth_year: string;

    /** The gender of the character. */
    gender: string;

    /** The ID of the character's home world. */
    homeworld: number;

    /** An array of IDs representing the films the character appears in. */
    films: number[];

    /** An array of IDs representing the species the character belongs to. */
    species: number[];

    /** An array of IDs representing the vehicles the character owns. */
    vehicles: number[];

    /** An array of IDs representing the starships the character pilots. */
    starships: number[];

    /** The date and time when the character was created in the API. */
    created: string;

    /** The date and time when the character was last edited in the API. */
    edited: string;

    /** The URL of the character's API endpoint. */
    url: string;
}
