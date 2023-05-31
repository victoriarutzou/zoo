import animation from '../photos/scananimation2.mp4';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function Scanarmbaand() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Start video automatisk
    videoElement.play();

    // Loop video
    videoElement.addEventListener('ended', () => {
      videoElement.currentTime = 0;
      videoElement.play();
    });

    return () => {
      // Clean up the event listener when the component unmounts
      videoElement.removeEventListener('ended', () => {
        videoElement.currentTime = 0;
        videoElement.play();
      });
    };
  }, []);

  return (
    <div className="onboarding scanarmbaand">
      <h2 className="orange">Sådan tilføjer du et armbånd</h2>
      <p className="orange">Hold toppen af din mobil tæt på dit armbånd</p>

      <video ref={videoRef} autoPlay muted playsInline loop className="scan-animation">
        <source src={animation} type="video/mp4" />
      </video>

      <div className="btnandhelp">
        <NavLink to="/Navn">
          <button className="orangebtn space16">Jeg er klar at scanne</button>
        </NavLink>
        <p className="orange">Hjælp?</p>
      </div>
    </div>
  );
}
