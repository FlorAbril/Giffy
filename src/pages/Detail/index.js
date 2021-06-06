import React, { useCallback } from "react";
import Gif from "components/Gif";
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";
import "./styles.css";
import useLocation from "wouter/use-location";

export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });
  const title = gif ? gif.title : "";

  const [, pushLocation] = useLocation();

  const handleSubmit = useCallback(() => {
    window.history.back();
  }, []);

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    );
  }

  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{title} | Giffy</title>
      </Helmet>
      <div className="gif-wrap">
        <Gif {...gif}></Gif>
        <button className="button" onClick={() => handleSubmit()}>
          Back
        </button>
      </div>
    </>
  );
}
