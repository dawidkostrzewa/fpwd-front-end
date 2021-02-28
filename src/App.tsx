import { useEffect, useState } from 'react';
import { fetchMovies } from './api/OMDB.connector';
import { IMovie } from './interfaces/Movie.interface';
import { MovieGrid } from './components/MovieGrid';
import { StyledLayout, StyledHeader, StyledSearchInput, StyledContainer, StyledNotFound } from './App.styled';

function App() {
    const [phrase, setPhrase] = useState<string>('');
    const [moviesList, setMoviesList] = useState<Array<IMovie>>([]);
    const [error, setError] = useState<string>('');

    async function searchMovies(value: string) {
        if (value) {
            const response = await fetchMovies(value);
            if (response.Response === 'True' && response.Search) {
                setMoviesList(response.Search);
                setError('');
            } else if (response.Error) {
                setMoviesList([]);
                setError(response.Error);
            }
        } else {
            setMoviesList([]);
            setError('');
        }
    }

    useEffect(() => {
        const timeOut = setTimeout(() => searchMovies(phrase), 300);
        return () => clearTimeout(timeOut);
    }, [phrase]);

    return (
        <StyledLayout>
            <StyledHeader>
                <StyledSearchInput
                    type="text"
                    placeholder="search movies"
                    onChange={(e) => setPhrase(e.target.value)}
                />
            </StyledHeader>
            <StyledContainer>
                {!error ? <MovieGrid movies={moviesList} /> : <StyledNotFound>{error}</StyledNotFound>}
            </StyledContainer>
        </StyledLayout>
    );
}

export default App;
