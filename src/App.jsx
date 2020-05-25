import React, {Component} from 'react';
import styled from "styled-components";

import Header from "./components/Header/Header";
import Sorting from "./components/Sorting/Sorting";
import FilmList from "./components/ResultBody/FilmList";
import Footer from "./components/Footer";
import MovieDescription from "./components/Header/MovieDescription";

const Main = styled.main`
	width: 1200px;
  margin: 54px auto 0;
  color: white;
  box-shadow: 0 2px 34px 0 rgba(0, 0, 0, 0.27);
`;

export class App extends Component {
  state = {
    films: [{
      id: 447365,
      "title": "Guardians of the Galaxy Vol. 3",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 9,
      "release_date": "2020-05-01",
      "poster_path": "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
      "overview": "The third film based on Marvel's Guardians of the Galaxy.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Adventure",
        "Science Fiction"
      ],
      "runtime": null
    },
      {
        "id": 424785,
        "title": "Transformers 7",
        "tagline": "",
        "vote_average": 0,
        "vote_count": 0,
        "release_date": "2019-06-26",
        "poster_path": "https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg",
        "overview": "Plot unknown.",
        "budget": 0,
        "revenue": 0,
        "genres": [
          "Science Fiction",
          "Action",
          "Adventure"
        ],
        "runtime": null
      },
      {
        "id": 299534,
        "title": "Untitled Avengers",
        "tagline": "",
        "vote_average": 0,
        "vote_count": 9,
        "release_date": "2019-04-24",
        "poster_path": "https://image.tmdb.org/t/p/w500/aMETsaNNcDc6g5ZatQtVbySnSaA.jpg",
        "overview": "The culmination of the Marvel Cinematic Universe.",
        "budget": 0,
        "revenue": 0,
        "genres": [
          "Action",
          "Adventure",
          "Science Fiction"
        ],
        "runtime": null
      },
      {
        "id": 287947,
        "title": "Shazam!",
        "tagline": "",
        "vote_average": 0,
        "vote_count": 5,
        "release_date": "2019-04-05",
        "poster_path": "https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg",
        "overview": "We all have a superhero inside us, it just takes a bit of magic to bring it out. In Billy Batson's case, by shouting out one word--SHAZAM!--this streetwise 14-year-old foster kid can turn into the adult superhero Shazam, courtesy of an ancient wizard.Still a kid at heart--inside a ripped, godlike body--Shazam revels in this adult version of himself by doing what any teen would do with superpowers: have fun with them! Can he fly? Does he have X-ray vision? Can he shoot lightning out of his hands? Can he skip his social studies test? Shazam sets out to test the limits of his abilities with the joyful recklessness of a child. But he'll need to master these powers quickly in order to fight the deadly forces of evil controlled by Doctor Thaddeus Sivana.",
        "budget": 0,
        "revenue": 0,
        "genres": [
          "Action",
          "Adventure",
          "Fantasy",
          "Science Fiction"
        ],
        "runtime": null
      },
      {
        "id": 320288,
        "title": "X-Men: Dark Phoenix",
        "tagline": "",
        "vote_average": 0,
        "vote_count": 0,
        "release_date": "2019-02-14",
        "poster_path": "https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg",
        "overview": "Gathered together by Professor Charles Xavier to protect a world that fears and hates them, the X-Men had fought many battles, been on adventures that spanned galaxies, grappled enemies of limitless might, but none of this could prepare them for the most shocking struggle they would ever face. One of their own members, Jean Grey, has gained power beyond all comprehension, and that power has corrupted her absolutely! Now, they must decide if the life of the woman they cherish is worth the existence of the entire universe!",
        "budget": 0,
        "revenue": 0,
        "genres": [
          "Action",
          "Science Fiction"
        ],
        "runtime": null
      },
      {
        "id": 181790,
        "title": "Journey 3: From the Earth to the Moon",
        "tagline": "",
        "vote_average": 0,
        "vote_count": 7,
        "release_date": "2018-12-31",
        "poster_path": "https://image.tmdb.org/t/p/w500/98tbNloMBztAVnWpAznKKVUdi2O.jpg",
        "overview": "Sean and Hank go on their biggest adventure yet, to the moon.",
        "budget": 0,
        "revenue": 0,
        "genres": [
          "Action",
          "Adventure",
          "Fantasy",
          "Science Fiction"
        ],
        "runtime": null
      }]
  };

  render() {
    return (
      <Main>
        {true && <Header/>}
        {false &&
        <MovieDescription image={this.state.films[4].poster_path}
                          title={this.state.films[4].title}
                          genres={this.state.films[4].genres.join(", ")}
                          year={this.state.films[4].release_date.slice(0, 4)}
                          description={this.state.films[4].overview}
        />}
        <Sorting films={this.state.films}/>
        <FilmList films={this.state.films}/>
        <Footer/>
      </Main>
    )
  }
}

