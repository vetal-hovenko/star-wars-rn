import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Gender} from '../../lib/types/Gender';
import {Character} from '../../lib/types/Character';
import {isCharacterAdded} from '../../lib/utils/isSameCharacterName';
import {getValidGender} from '../../lib/utils/getValidGender';

interface GendersState {
    gendersMap: Record<Gender, number>;
    favoriteCharacters: Character[];
}

const initialGendersMap = {
    male: 0,
    female: 0,
    other: 0,
};

const initialState: GendersState = {
    gendersMap: {...initialGendersMap},
    favoriteCharacters: [],
};

const gendersSlice = createSlice({
    name: 'genders',
    initialState,
    reducers: {
        addCharacter(state, action: PayloadAction<Character>) {
            const character = action.payload;

            state.gendersMap[getValidGender(character)]++;

            if (!isCharacterAdded(state.favoriteCharacters, character)) {
                state.favoriteCharacters.push(character);
            }
        },
        removeCharacter(state, action: PayloadAction<Character>) {
            const character = action.payload;

            state.gendersMap[getValidGender(character)]--;

            state.favoriteCharacters = state.favoriteCharacters.filter(
                c => c.name !== character.name,
            );
        },
        resetCharacters(state) {
            state.gendersMap = initialGendersMap;
            state.favoriteCharacters = [];
        },
    },
});

export const {addCharacter, removeCharacter, resetCharacters} =
    gendersSlice.actions;
export default gendersSlice.reducer;
