import React from 'react';
import styled from 'styled-components';

// import './app-header.css';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 1.78rem;
        color: ${props => props.colored ? 'darkgreen' : 'black'};
        transition: all 0.5s;
        :hover {
            color: darkblue;
            transition: all 0.55s;
        }
    }
    h2 {
        font-size: 1.1rem;
        color: grey;
    }
`;

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header colored>
            <h1>Yaroslav Kuznetsov</h1>
            <h2>{allPosts} записей, из них понравилось: {liked}</h2>
        </Header>
    )
}

export default AppHeader;