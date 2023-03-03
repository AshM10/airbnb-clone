import Katie from "./images/katie-zaferes.png";
import Star from "./images/star.png";

export default function Card() {
  return (
    <div className="Card">
      <img src={Katie} alt="Katie Zaferes" className="--card-image" />
      <img src={Star} alt="red star" className="--card-star" />
    </div>
  );
}
