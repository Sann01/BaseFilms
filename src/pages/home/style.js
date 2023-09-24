import styled from "styled-components";

export const Container = styled.div`
font-family: 'Designer', sans-serif;
    .btn.btn-outline{
        background-color:#000;
    }
    .btn.btn-outline:hover{
        background-color:#565656;
    }
    .navbar{
        background-color:#939;
    }
    img{
        width: 50px;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 2rem;
    row-gap: 4rem;
    background-color:#000;
    padding:5px;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'Banschrift', sans-serif; 
    color:#fff;
    img {
        width: 250px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }
    a {
        transition: all 0.3s;
    }
    a:hover {
        transform: scale(1.1);
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 0.7rem 3rem;
    border: none;
    border-radius: 10px;
    color: #202020;;
    background-color: #939;
    font-weight: 1000;
    font-size: 12 px;
    cursor: pointer;
    transition: all 250ms;
`;
