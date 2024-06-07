import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gender} from '../lib/types/Gender';
import {GOLD_COLOR, NAVY_COLOR} from '../lib/utils/constants';

interface GenderAmountProps {
    gender: Gender;
    genderAmount: number;
}

const GenderAmount = (props: GenderAmountProps) => {
    const {gender, genderAmount} = props;

    return (
        <View style={styles.container}>
            <Text style={styles.amount}>{genderAmount}</Text>
            <Text style={styles.genderType}>{gender}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 3,
        borderRadius: 12,
        alignItems: 'center',
        backgroundColor: NAVY_COLOR,
    },
    amount: {
        fontSize: 32,
        fontWeight: 'bold',
        color: GOLD_COLOR,
    },
    genderType: {
        fontSize: 18,
        color: GOLD_COLOR,
    },
});

export default GenderAmount;
