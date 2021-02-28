import { IMovie } from '../interfaces/Movie.interface';
import { StyledMovieWrapper, StyledMovieTitle } from './MovieCard.styled';

interface IProps {
    movie: IMovie;
}

export const MovieCard = ({ movie }: IProps) => (
    <StyledMovieWrapper data-testid="movie-card">
        <img
            key={movie.imdbID}
            src={movie.Poster}
            alt={movie.Title}
            onError={(e) => {
                (e.target as HTMLImageElement).src = '/img/not-found.png';
            }}
        />
        <StyledMovieTitle>
            {movie.Title} ({movie.Year})
        </StyledMovieTitle>
    </StyledMovieWrapper>
);
