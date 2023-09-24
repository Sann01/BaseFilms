import { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "../../images/BaseFilms-Logo.png";
function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movies, setMovies] = useState([]);
    const KEY = process.env.REACT_APP_KEY;
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, [KEY]);

    return (
        <Container>
            <nav class="navbar">
                <div class="container-fluid">
                    <a class="navbar-brand"><img src={logo} alt="Logo" title=""/>BaseFilms</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline" type="submit"> 🔎</button>
                    </form>
                </div>
            </nav>
            <MovieList>
                {movies.map((movie) => {
                    return (
                        <Movie key={movie.id}>
                            <img
                                src={`${imagePath}${movie.poster_path}`}
                                alt="{movie.title}"
                            />
                            <span>{movie.title}</span>

                            <Link to={`/${movie.id}`}>
                                <Btn>Detalhes</Btn>
                            </Link>
                        </Movie>
                    );
                })}
            </MovieList>
        </Container>
    );
}

export default Home;
