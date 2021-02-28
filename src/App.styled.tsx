import styled from 'styled-components';

export const StyledLayout = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const StyledContainer = styled.div`
    max-width: 1390px;
    margin: 0 auto;

    @media (max-width: 992px) {
        max-width: 90%fit-content;
    }
`;

export const StyledSearchInput = styled.input`
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

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

export const StyledNotFound = styled.div`
    font-size: 3rem;
    font-weight: bold;
`;
