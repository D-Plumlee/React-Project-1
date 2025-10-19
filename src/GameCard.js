import { Games } from "./Games.js";

export default function GameCard({ id }) {
  const gameIn = Games.filter((Games) => Games.id === id);
  const game = gameIn[0];
  const art = game.coverArt;

  return (
    <div className="container border border-3 border-dark rounded-4 bg-light my-1">
      <div className="row">
        <img
          src={art}
          alt={`${game.name} cover art`}
          className="col-md-4 mx-3 img-thumbnail"
          style={{ height: "350px", objectFit: "contain" }}
        />
        <div className="col-md mx-3">
          <h3>Title: {game.name}</h3>
          <p>Original Console: {game.console}</p>
          <hr />
          <p>{game.description}</p>
        </div>
      </div>
    </div>
  );
}
