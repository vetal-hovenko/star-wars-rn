import {faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PaginationButton from './PaginationButton';
import {NAVY_COLOR} from '../lib/utils/constants';

const CHARACTERS_PER_PAGE = 10;

interface CharactersListPaginationProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    isPrevPageAvailable: boolean;
    isNextPageAvailable: boolean;
    currentPage: number;
    charactersAmount: number;
}

const CharactersListPagination = (props: CharactersListPaginationProps) => {
    const {
        setCurrentPage,
        isPrevPageAvailable,
        isNextPageAvailable,
        currentPage,
        charactersAmount,
    } = props;

    const handlePageSwitch = (isNext: boolean) => {
        setCurrentPage(currentState => currentState + (isNext ? 1 : -1));
    };

    const getCharacterRangeText = (
        page: number,
        perPage: number,
        total: number,
    ) => {
        const start = (page - 1) * perPage + 1;
        const end = Math.min(page * perPage, total);
        return `${start}-${end} of ${total}`;
    };

    return (
        <View style={styles.pagination}>
            <PaginationButton
                disabled={!isPrevPageAvailable}
                handlePageSwitch={() => handlePageSwitch(false)}
                icon={faCaretLeft}
            />

            <View style={styles.pageNumberWrapper}>
                <Text style={styles.currentPage}>{currentPage}</Text>
                <Text style={styles.rangeText}>
                    {getCharacterRangeText(
                        currentPage,
                        CHARACTERS_PER_PAGE,
                        charactersAmount,
                    )}
                </Text>
            </View>

            <PaginationButton
                disabled={!isNextPageAvailable}
                handlePageSwitch={() => handlePageSwitch(true)}
                icon={faCaretRight}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
        borderRadius: 12,
        backgroundColor: NAVY_COLOR,
        marginTop: 4,
    },
    pageNumberWrapper: {
        alignItems: 'center',
        marginHorizontal: 20,
    },
    currentPage: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFD700',
    },
    rangeText: {
        fontSize: 14,
        color: '#FFFFFF',
    },
});

export default CharactersListPagination;
