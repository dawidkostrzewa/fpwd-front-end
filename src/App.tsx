import { useState } from 'react';
import { fetchMovies } from './api/OMDB.connector';
import styled from 'styled-components';
import { IMovie } from './interfaces/Movie.interface';
import { MovieGrid } from './components/MovieGrid';

const StyledLayout = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const StyledContainer = styled.div`
    max-width: 1390px;
    margin: 0 auto;

    @media (max-width: 992px) {
        max-width: 90%fit-content;
    }
`;

const StyledSearchInput = styled.input`
    border: none;
    font-size: 2.5rem;
    padding: 10px;
    min-height: 70px;
    border-bottom: 1px solid grey;

    &:focus {
        border-bottom: 2px solid black;

        outline: none;
    }
`;

const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

const StyledSearchBtn = styled.button`
    background: transparent;
    background-image: url('/img/search.svg');
    width: 60px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 40px;
    border: none;
    cursor: pointer;
`;

function App() {
    const [phrase, setPhrase] = useState<string>('');
    const [moviesList, setMoviesList] = useState<Array<IMovie>>([]);

    async function searchMovies(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const movies = await fetchMovies(phrase);
        setMoviesList(movies.Search);
    }

    return (
        <StyledLayout>
            <StyledForm onSubmit={searchMovies}>
                <StyledSearchInput
                    type="text"
                    placeholder="search movies"
                    onChange={(e) => setPhrase(e.target.value)}
                />
                <StyledSearchBtn type="submit" />
            </StyledForm>
            <StyledContainer>
                <MovieGrid movies={moviesList} />
            </StyledContainer>
        </StyledLayout>
    );
}

export default App;
