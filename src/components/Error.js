import { useNavigate } from 'react-router-dom';
import '../styles/Error.scss';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <div className="error-container">
        <h2>Oops!</h2>
        <p>The page you were looking for was not found.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
  );
};

export default Error;
