export interface ISearchMovieResponse {
    Response: ResponseType;
    Search?: Array<IMovie>;
    totalResult?: string;
    Error?: string;
}

export type ResponseType = 'True' | 'False' | string;

export interface IMovie {
    Poster: string;
    Title: string;
    Type: MovieType;
    Year: string;
    imdbID: string;
}

export type MovieType = 'movie' | 'series' | 'episode' | string;
