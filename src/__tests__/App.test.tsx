import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import * as API from '../api/OMDB.connector';

test('Should render input with "search movies placeholder"', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/search movies/i);
    expect(input).toBeInTheDocument();
});

test('Should render error if API return Error', async () => {
    jest.spyOn(API, 'fetchMovies').mockResolvedValue(mockErrorResposne);
    render(<App />);

    const input = screen.getByPlaceholderText(/search movies/i);
    fireEvent.change(input, { target: { value: 'phrase' } });

    const result = await screen.findByText(/Too many/i);
    expect(result).toBeInTheDocument();
});

test('Should render movie cards if API find movies', async () => {
    jest.spyOn(API, 'fetchMovies').mockResolvedValue(mockResponse);

    render(<App />);

    const input = screen.getByPlaceholderText(/search movies/i);
    fireEvent.change(input, { target: { value: 'phrase' } });

    const result = await screen.findAllByTestId('movie-card');
    expect(result.length).toBe(10);
});

export const mockErrorResposne = { Response: 'False', Error: 'Too many results.' };

export const mockResponse = {
    Search: [
        {
            Title: 'The Lord of the Rings: The Fellowship of the Ring',
            Year: '2001',
            imdbID: 'tt0120737',
            Type: 'movie',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg'
        },
        {
            Title: 'The Lord of the Rings: The Return of the King',
            Year: '2003',
            imdbID: 'tt0167260',
            Type: 'movie',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
        },
        {
            Title: 'The Lord of the Rings: The Two Towers',
            Year: '2002',
            imdbID: 'tt0167261',
            Type: 'movie',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
        },
        {
            Title: 'Lord of the Rings',
            Year: '1978',
            imdbID: 'tt0077869',
            Type: 'movie',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
        },
        {
            Title: 'Lord of the Flies',
            Year: '1990',
            imdbID: 'tt0100054',
            Type: 'movie',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BMDczN2I3NzItNjdlMS00YmNhLTkyODQtZGI1YWQ0NmViMTgwXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg'
        },
        {
            Title: 'Lord of the Flies',
            Year: '1963',
            imdbID: 'tt0057261',
            Type: 'movie',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BM2FjM2VlYzgtYzI1OS00MTM2LWJmNjQtNTZkNTJjNzQzYzk5XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg'
        },
        {
            Title: 'Something the Lord Made',
            Year: '2004',
            imdbID: 'tt0386792',
            Type: 'movie',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BYmMzYWY4MDUtOWQ4OC00YTY5LWExN2YtYzEyZWM5ZjUyZGQ5XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg'
        },
        {
            Title: 'Red Riding: The Year of Our Lord 1974',
            Year: '2009',
            imdbID: 'tt1259574',
            Type: 'movie',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BNzQ3N2IyZDgtZTc2NC00NGY3LThiY2QtNTBjMWYyNzI2MjdhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg'
        },
        {
            Title: 'Phantasm III: Lord of the Dead',
            Year: '1994',
            imdbID: 'tt0110823',
            Type: 'movie',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BNGE5Nzc5ZDUtYjQ4OC00OGU0LWE2YzEtMjE2NjRkYTFjYjgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
            Title: 'Red Riding: The Year of Our Lord 1980',
            Year: '2009',
            imdbID: 'tt1260581',
            Type: 'movie',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BMjQ2NzUyNmItMjBiMy00YmM2LTgzNjQtZGYzNTc4NTUxODg4XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg'
        }
    ],
    totalResults: '336',
    Response: 'True'
};
