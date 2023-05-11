import Bio from './Bio';
import { crew } from '../data';
import uniqid from 'uniqid';

function Crew() {
  return (
    <div className="crew">
      {crew.map((c) => (
        <Bio
          key={uniqid()}
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

export default Crew;
