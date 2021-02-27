import styled from 'styled-components';
import { IMovie } from '../interfaces/Movie.interface';

interface IProps {
    movie: IMovie;
}

const StyledMovieWrapper = styled.figure`
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    max-width: 300px;
`;

const StyledMovieTitle = styled.figcaption`
    font-size: 1.3rem;
    text-align: center;
    font-weight: bold;
    margin-top: 10px;
    font-style: italic;
`;

export const MovieCard = ({ movie }: IProps) => (
    <StyledMovieWrapper>
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
