import styled from 'styled-components';
import { IMovie } from '../interfaces/Movie.interface';
import { MovieCard } from './MovieCard';

interface IProps {
    movies: Array<IMovie>;
}

const StyledMovieGrid = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const MovieGrid = ({ movies }: IProps) => (
    <StyledMovieGrid>
        {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
        ))}
    </StyledMovieGrid>
);
