import '../styles/Bio.scss';

function Bio(props) {
  const { img, name, role, grade, q1, q2 } = props;
  return (
    <div className="bio">
      <div className="info">
        <img src={img} alt={name} />
        <p className="name">{name}</p>
        <p className="details">{role}</p>
        <p className="details">Grade {grade}</p>
      </div>
      <div className="questions">
        <div className="question">
          <p className="q">
            What is a fun or favourite memory that you have from being involved
            in the show?
          </p>
          <p className="a">{q1}</p>
        </div>
        <div className="question">
          <p className="q">Why did you join Drama Club?</p>
          <p className="a">{q2}</p>
        </div>
      </div>
    </div>
  );
}

export default Bio;
