import { IMovie } from '../interfaces/Movie.interface';
import { MovieCard } from './MovieCard';
import { StyledMovieGrid } from './MovieGrid.styled';

interface IProps {
    movies: Array<IMovie>;
}

export const MovieGrid = ({ movies }: IProps) => (
    <StyledMovieGrid>
        {movies.map((movie) => (
            <MovieCard key={movie.imdbID + movie.Title} movie={movie} />
        ))}
    </StyledMovieGrid>
);
