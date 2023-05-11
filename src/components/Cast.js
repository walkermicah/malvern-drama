import Bio from './Bio';
import { cast } from '../data';
import '../styles/Cast.scss';

function Cast() {
  return (
    <div className="cast">
      {cast.map((c) => (
        <Bio
          img={c.img}
          name={c.name}
          role={c.role}
          grade={c.grade}
          q1={c.q1}
          q2={c.q2}
        />
      ))}
    </div>
  );
}

export default Cast;
