import { useEffect } from 'react';
import { useState } from 'react';
import '../styles/Countdown.scss';

const Countdown = () => {
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  useEffect(() => {
    const tick = () => {
      const countDownDate = new Date('May 11, 2023 19:00:00').getTime();

      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, '0');

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
        .toString()
        .padStart(2, '0');
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, '0');
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, '0');

      setDays(days > 0 ? days : 0);
      setHours(hours > 0 ? hours : 0);
      setMinutes(minutes > 0 ? minutes : 0);
      setSeconds(seconds > 0 ? seconds : 0);
    };

    const countdown = setInterval(tick, 1000);
    return () => {
      clearInterval(countdown);
    };
  }, []);

  return (
    <div className="countdown">
      <div>
        <span className="number">{days}</span>
        <span className="text">Days</span>
      </div>
      <span className="colon">:</span>
      <div>
        <span className="number">{hours}</span>
        <span className="text">Hours</span>
      </div>
      <span className="colon">:</span>
      <div>
        {' '}
        <span className="number">{minutes}</span>
        <span className="text">Minutes</span>
      </div>
      <span className="colon">:</span>
      <div>
        <span className="number">{seconds}</span>
        <span className="text">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
