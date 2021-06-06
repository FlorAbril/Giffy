import React from "react";
import { useLocation } from "wouter";
import useForm from "./hook";
import "./index.css";

const RATINGS = ["g", "pg", "pg-13", "r"];
const LANGUAGES = { en: "english", es: "español", pt: "português" };

const defaultLang = Object.keys(LANGUAGES)[0];

function SearchForm({
  initialKeyword = "",
  initialRating = "g",
  initialLang = defaultLang,
}) {
  const { keyword, rating, lang, updateKeyword, updateRating, updateLang } =
    useForm({ initialKeyword, initialRating, initialLang });
  const [, pushLocation] = useLocation();

  const handleChange = (event) => {
    updateKeyword(event.target.value);
  };

  const handleSubmit = (event, keyword) => {
    event.preventDefault();
    pushLocation(`/search/${keyword}/${rating}/${lang}`);
  };

  const handleChangeRating = (event) => {
    updateRating(event.target.value);
  };
  const handleChangeLang = (event) => {
    const key = event.target.selectedOptions[0].lang;
    console.log(key);
    updateLang(key);
  };

  return (
    <div className="form-wrap">
      <form className="search-form" onSubmit={(e) => handleSubmit(e, keyword)}>
        <div className="input-wrap">
          <input
            placeholder="Buscar gifs"
            onChange={handleChange}
            type="text"
            value={keyword}
          />
          <button className="button search">Buscar</button>
        </div>
        <div className="filters-wrap">
          <select
            className="filter"
            onChange={handleChangeRating}
            value={rating}
          >
            <option disabled>Rating type</option>
            {RATINGS.map((rating) => (
              <option key={rating}>{rating}</option>
            ))}
          </select>
          <select
            className="filter"
            onChange={handleChangeLang}
            value={LANGUAGES[lang]}
          >
            <option disabled>Language</option>
            {Object.entries(LANGUAGES).map(([codigo, nombre]) => (
              <option lang={codigo}>{nombre}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default React.memo(SearchForm);
