import Grid from "./images/photo-grid.png";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="Hero">
      <img
        src={Grid}
        alt="Fun and mindful activities"
        className="--hero-image"
      />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts - all
        without leaving home.
      </p>
    </div>
  );
}
