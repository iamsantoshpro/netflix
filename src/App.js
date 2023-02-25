import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFIX ORIGINALS" fetchUrl={request.fetchNetflixOriginal} isLargeRow={true} />
      <Row title="Trending Now!" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated Movies" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovie} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
