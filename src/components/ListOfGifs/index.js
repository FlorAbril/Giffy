import React, { useCallback } from "react";
import Gif from "components/Gif";
import "./styles.css";
import { useLocation } from "wouter";

export default function ListOfGifs(
  { gifs, title, lastKeyword } = { lastKeyword: null }
) {
  const [, pushLocation] = useLocation();

  const handleSubmit = useCallback(
    (keyword) => {
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <div>
      <h3>{title}</h3>
      <div className="ListOfGifs">
        {gifs.map(({ id, title, url }) => (
          <Gif id={id} key={id} title={title} url={url} />
        ))}
      </div>
      {lastKeyword && (
        <button
          className="button seeMore"
          onClick={() => handleSubmit(lastKeyword)}
        >
          Ver más
        </button>
      )}
    </div>
  );
}
