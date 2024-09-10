import { useRef, useState } from "react";
import { useEventListener } from "usehooks-ts";
//

import { travelRecommendations } from "../utils/travel_Recs";
import Card from "./Card.tsx";
import "../styles/Hero.css";

export default function Hero() {
  // Input field manipulation
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const onChange = (event: Event) => {
    // save the input value for comparison later
    const input = event.target as HTMLInputElement;
    setInputValue(input.value);
  };
  useEventListener("change", onChange, inputRef);

  // Button manipulation
  const [isClicked, setIsClicked] = useState(false);
  const btnRef = useRef<HTMLDivElement>(null);
  const onClick = (event: Event) => {
    const btnClick = event.target as HTMLDivElement;
    if (btnClick) {
      setIsClicked(true);
    }
  };
  useEventListener("click", onClick, btnRef);

  return (
    <div className="hero-container">
      <div className="hero-pitch">Discover the best travel destinations.</div>
      <div className="search-container">
        <input
          type="text"
          placeholder="countries, beaches or temples"
          ref={inputRef}
        />
        <div className="search-icon" role="button" ref={btnRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="card-main-container">
        <Card isClicked={isClicked} inputValue={inputValue} />
      </div>
    </div>
  );
}
