import "../App.css";
import pic from "../images/jack_frost.webp";
const Home = () => {
  return (
    <div className="row container-fluid mt-5">
      <div className="col-md-2"></div>

      <img src={pic} className="col-md-3" />
      <div className="col-md-4 d-flex flex-wrap align-content-center">
        <h3 className="bg-light rounded-3 p-5 speech-bubble">
          Welcome! These pages show the main games in the Shin Megami Tensei
          series by what console they were released on.
          <br />
          Hee-Ho!
        </h3>
      </div>
    </div>
  );
};

export default Home;
