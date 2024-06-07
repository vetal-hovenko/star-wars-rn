import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Character} from '../lib/types/Character';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {isCharacterAdded} from '../lib/utils/isSameCharacterName';
import {addCharacter, removeCharacter} from '../redux/reducers/gendersReducer';
import {GOLD_COLOR, NAVY_COLOR} from '../lib/utils/constants';

interface CharacterItemProps {
    character: Character;
    openedCharacter: Character | null;
    handleOpenCharacter: (chosenCharacter: Character) => void;
}

const CharacterItem = (props: CharacterItemProps) => {
    const {character, handleOpenCharacter, openedCharacter} = props;

    const dispatch = useAppDispatch();
    const favoriteCharacters = useAppSelector(
        store => store.genders.favoriteCharacters,
    );

    const [isFavorite, setIsFavorite] = useState(
        isCharacterAdded(favoriteCharacters, character),
    );

    const handleAddCharacterToFavorites = () => {
        dispatch(
            isFavorite ? removeCharacter(character) : addCharacter(character),
        );
        setIsFavorite(prevState => !prevState);
    };

    useEffect(() => {
        setIsFavorite(isCharacterAdded(favoriteCharacters, character));
    }, [character, favoriteCharacters]);

    return (
        <View style={styles.container}>
            <View style={styles.characterRow}>
                <TouchableOpacity
                    onPress={() => handleOpenCharacter(character)}
                    style={styles.characterButton}>
                    <Text style={styles.characterName}>{character.name}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleAddCharacterToFavorites}
                    style={styles.favoriteButton}>
                    <FontAwesomeIcon
                        color={isFavorite ? GOLD_COLOR : 'gray'}
                        icon={faStar}
                        size={24}
                    />
                </TouchableOpacity>
            </View>

            {!!openedCharacter && openedCharacter.name === character.name && (
                <View style={styles.details}>
                    <Text style={styles.detailText}>
                        Gender: {openedCharacter.gender}
                    </Text>

                    <Text style={styles.detailText}>
                        Birth year: {openedCharacter.birth_year}
                    </Text>

                    <Text style={styles.detailText}>
                        Height: {openedCharacter.height}
                    </Text>

                    <Text style={styles.detailText}>
                        Weight: {openedCharacter.mass}
                    </Text>

                    <Text style={styles.detailText}>
                        Hair color: {openedCharacter.hair_color}
                    </Text>

                    <Text style={styles.detailText}>
                        Skin color: {openedCharacter.skin_color}
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        padding: 16,
        backgroundColor: '#202124',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },
    characterRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    characterButton: {
        flex: 1,
    },
    characterName: {
        fontWeight: 'bold',
        fontSize: 18,
        color: GOLD_COLOR,
    },
    favoriteButton: {
        marginLeft: 16,
    },
    details: {
        marginTop: 16,
        borderRadius: 8,
        backgroundColor: NAVY_COLOR,
        padding: 16,
        gap: 8,
    },
    detailText: {
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 4,
        borderBottomWidth: 1,
        paddingBottom: 4,
        borderColor: '#4f4f4f',
    },
});

export default CharacterItem;
