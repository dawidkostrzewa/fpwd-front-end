export interface ISearchMovieResponse {
    Response: string;
    Search: Array<IMovie>;
    totalResult: string;
}

export interface IMovie {
    Poster: string;
    Title: string;
    Type: MovieType;
    Year: string;
    imdbID: string;
}

export type MovieType = 'movie' | 'series' | 'episode';
