import { ISearchMovieResponse } from '../interfaces/Movie.interface';
import { getHTTP } from './API';

export const fetchMovies = async (phrase: string): Promise<ISearchMovieResponse> => {
    return getHTTP(`?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${phrase}`);
};
