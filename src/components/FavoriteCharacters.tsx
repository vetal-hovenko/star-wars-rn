import React from 'react';
import GenderAmount from './GenderAmount';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gender} from '../lib/types/Gender';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {resetCharacters} from '../redux/reducers/gendersReducer';

const FavoriteCharacters = () => {
    const dispatch = useAppDispatch();
    const gendersMap = useAppSelector(store => store.genders.gendersMap);
    const genderKeys = Object.keys(gendersMap) as Gender[];

    const handleReset = () => {
        dispatch(resetCharacters());
    };

    return (
        <>
            <View style={styles.favoritesHeader}>
                <Text style={styles.title}>Favorite characters</Text>

                <TouchableOpacity
                    onPress={handleReset}
                    style={styles.resetButton}>
                    <Text style={styles.resetButtonText}>reset</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.gendersContainer}>
                {genderKeys.map(gender => (
                    <GenderAmount
                        key={gender}
                        gender={gender}
                        genderAmount={gendersMap[gender]}
                    />
                ))}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    gendersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
        alignItems: 'center',
        marginVertical: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    favoritesHeader: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resetButton: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 8,
        borderRadius: 8,
    },
    resetButtonText: {
        textTransform: 'uppercase',
        color: 'red',
    },
});

export default FavoriteCharacters;
