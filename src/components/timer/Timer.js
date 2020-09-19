import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => parseInt(minuteSeconds - time);
const getTimeMinutes = (time) => parseInt((time % hourSeconds) / minuteSeconds);
const getTimeHours = (time) => parseInt((time % daySeconds) / hourSeconds);
const getTimeDays = (time) => parseInt(time / daySeconds);

export default function App() {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds

  // REPLACE THIS WHOLE VALUE WITH THE TIMESTAMP OF THE DATE IN SECONDS
  const endTime = 1600540200; // Sunday, 20-09-2020-00:00 AM

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="timer row">
      <div className="col-lg-3 col-12 d-flex justify-content-center align-items-center py-2">
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#7E2E84"]]}
          duration={daysDuration}
          initialRemainingTime={remainingTime}
        >
          {({ remainingTime }) =>
            renderTime("days", getTimeDays(remainingTime))
          }
        </CountdownCircleTimer>
      </div>
      <div className="col-lg-3 col-12 d-flex justify-content-center align-items-center py-2 ">
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#D14081"]]}
          duration={daySeconds}
          initialRemainingTime={remainingTime % daySeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > hourSeconds,
          ]}
        >
          {({ remainingTime }) =>
            renderTime("hours", getTimeHours(remainingTime))
          }
        </CountdownCircleTimer>
      </div>
      <div className="col-lg-3 col-12 d-flex justify-content-center align-items-center py-2 ">
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#EF798A"]]}
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > minuteSeconds,
          ]}
        >
          {({ remainingTime }) =>
            renderTime("minutes", getTimeMinutes(remainingTime))
          }
        </CountdownCircleTimer>
      </div>
      <div className="col-lg-3 col-12 d-flex justify-content-center align-items-center py-2">
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#218380"]]}
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > 0,
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("seconds", getTimeSeconds(elapsedTime))
          }
        </CountdownCircleTimer>
      </div>
    </div>
  );
}
