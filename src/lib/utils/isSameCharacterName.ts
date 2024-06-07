import {Character} from '../types/Character';

export function isCharacterAdded(
    characters: Character[],
    targetCharacter: Character,
) {
    return characters.some(
        character => character.name === targetCharacter.name,
    );
}
