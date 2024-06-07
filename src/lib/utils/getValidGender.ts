import {Character} from '../types/Character';
import {Gender} from '../types/Gender';

export function getValidGender(character: Character): Gender {
    const {gender} = character;
    if (gender === 'female' || gender === 'male') {
        return gender;
    } else {
        return 'other';
    }
}
