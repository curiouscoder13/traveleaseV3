import React, { useRef, useState } from "react";
import { travelRecommendations } from "../utils/travel_Recs";
import "../styles/Card.css";

interface CardProps {
  isClicked: boolean;
  inputValue: string;
}

const Card: React.FC<CardProps> = ({ isClicked, inputValue }) => {
  const countries = travelRecommendations[0].countries;
  const temples = travelRecommendations[0].temples;
  const beaches = travelRecommendations[0].beaches;

  const allKeywords = [
    "beach",
    "beaches",
    "country",
    "countries",
    "temple",
    "temples",
  ];
  let searchResult = allKeywords.find((keyword) =>
    keyword.includes(inputValue.toLowerCase())
  );

  if (!searchResult) {
    return <div>No results found.</div>;
  }

  const [selectedCardID, setSelectedCardID] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="card-container">
      {isClicked &&
        (searchResult === "beach" || searchResult === "beaches") &&
        beaches.map((beach) => {
          return (
            <a
              className="card-link"
              href={`/recommendations/beaches/${beach.id}`}
              key={beach._id}
            >
              <div className="card-contents">
                <div className="card-image">
                  <img src={beach.imageUrl} alt="card-image" />
                </div>
                <div className="card-title">{beach.name}</div>
                <div className="card-description">{beach.description}</div>
                <button className="card-button">Visit</button>
              </div>
            </a>
          );
        })}
      {isClicked &&
        (searchResult === "country" || searchResult === "countries") &&
        countries.map((country) => {
          return country.cities.map((city) => {
            return (
              <a
                className="card-link"
                href={`/recommendations/beaches/${city._id}`}
                key={city._id}
              >
                <div className="card-contents">
                  <div className="card-image">
                    <img src={city.imageUrl} alt="card-image" />
                  </div>
                  <div className="card-title">{city.name}</div>
                  <div className="card-description">{city.description}</div>
                  <button className="card-button">Visit</button>
                </div>
              </a>
            );
          });
        })}
      {isClicked &&
        (searchResult === "temple" || searchResult === "temples") &&
        temples.map((temple) => {
          return (
            <a
              className="card-link"
              href={`/recommendations/beaches/${temple._id}`}
              key={temple._id}
            >
              <div className="card-contents" key={temple.id}>
                <div className="card-image">
                  <img src={temple.imageUrl} alt="card-image" />
                </div>
                <div className="card-title">{temple.name}</div>
                <div className="card-description">{temple.description}</div>
                <button className="card-button">Visit</button>
              </div>
            </a>
          );
        })}
      {isClicked && searchResult === "" && <div>No results found.</div>}
    </div>
  );
};

export default Card;
