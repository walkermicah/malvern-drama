import Countdown from './Countdown';
import '../styles/Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="home-title">
        <h1>
          <span className="night">
            <span>Good </span>
            <span>Night</span>
            <span>Desdemona</span>
          </span>
          <span className="morning">
            <span>Good </span>
            <span>Morning</span>
            <span>Juliet</span>
          </span>
        </h1>
      </div>

      <div className="home-info">
        <Countdown />
      </div>
    </div>
  );
};

export default Home;
