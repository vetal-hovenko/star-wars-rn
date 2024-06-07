import React, {useEffect, useState} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import {Character} from './src/lib/types/Character';
import {getCharactersPerPage} from './src/lib/utils/getCharactersPerPage';
import CharactersList from './src/components/CharactersList';
import CharactersListPagination from './src/components/CharactersListPagination';
import FavoriteCharacters from './src/components/FavoriteCharacters';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App(): React.JSX.Element {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [charactersAmount, setCharactersAmount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isNextPageAvailable, setIsNextPageAvailable] = useState(false);
    const [isPrevPageAvailable, setIsPrevPageAvailable] = useState(false);

    useEffect(() => {
        const initializeCharacters = async () => {
            setIsNextPageAvailable(false);
            setIsPrevPageAvailable(false);

            const charactersResponse = await getCharactersPerPage(currentPage);

            const {results, count, next, previous} = charactersResponse;
            setCharacters(results);
            setCharactersAmount(count);
            setIsNextPageAvailable(!!next);
            setIsPrevPageAvailable(!!previous);
        };

        initializeCharacters();
    }, [currentPage]);

    return (
        <Provider store={store}>
            <SafeAreaView style={styles.wrapper}>
                <FavoriteCharacters />
                <CharactersList characters={characters} />
                <CharactersListPagination
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    isNextPageAvailable={isNextPageAvailable}
                    isPrevPageAvailable={isPrevPageAvailable}
                    charactersAmount={charactersAmount}
                />
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#1B1B1B',
        paddingHorizontal: 16,
        paddingVertical: 32,
    },
});

export default App;
