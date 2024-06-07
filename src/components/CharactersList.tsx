import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {Character} from '../lib/types/Character';
import CharacterItem from './CharacterItem';
import {getCharacter} from '../lib/utils/getCharacter';

const windowHeight = Dimensions.get('window').height;

interface CharactersListProps {
    characters: Character[];
}
const CharactersList = (props: CharactersListProps) => {
    const {characters} = props;

    const [openedCharacter, setOpenedCharacter] = useState<Character | null>(
        null,
    );

    const handleOpenCharacter = async (chosenCharacter: Character) => {
        if (chosenCharacter.name === openedCharacter?.name) {
            setOpenedCharacter(null);
            return;
        }
        const newCharacter = await getCharacter(chosenCharacter.url);
        setOpenedCharacter(newCharacter);
    };

    return (
        <View style={styles.listWrapper}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={styles.list}>
                    {characters.map(character => (
                        <CharacterItem
                            openedCharacter={openedCharacter}
                            handleOpenCharacter={handleOpenCharacter}
                            key={character.name}
                            character={character}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    listWrapper: {
        height: windowHeight / 1.5,
    },
    list: {
        gap: 4,
    },
});

export default CharactersList;
