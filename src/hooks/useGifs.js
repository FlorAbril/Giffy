import { useContext, useEffect, useState } from "react";
import getGifs from "services/getGifs";
import GifsContext from "context/GifsContext";

const INITIAL_PAGE = 0;
export function useGifs({ keyword, rating, lang } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);

  // recupero la keyword del local storage
  const keywordToUse = keyword || localStorage.getItem("lastKeyword");

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword: keywordToUse, rating, lang }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        // guardo la keyword en el local storage
        if (keywordToUse) localStorage.setItem("lastKeyword", keywordToUse);
      });
    },
    [keyword, keywordToUse, setGifs, rating, lang]
  );

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingNextPage(true);
    getGifs({ keyword: keywordToUse, page, rating, lang }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, page, setGifs, rating, lang]);

  return { loading, loadingNextPage, gifs, setPage, keywordToUse, lang };
}
