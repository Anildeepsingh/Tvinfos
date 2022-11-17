import React from "react";
import noimg from "./noimg.jpg";

const Card = (props) => {
  const { details, state } = props;
  console.log(details);
  let data;

  if (state === "people") {
    data = details?.person;
  } else if (state === "shows") data = details?.show;

  const images = data?.image ? data.image.medium : null;
  return (
    <>
      {images && (
        <div className="m-3 h-5/5 w-82 shadow-2xl shadow-black">
          <h3 className="text-3xl flex p-3 font-mono justify-center">{data.name}</h3>
          <a href={data.url} target="_blank" rel="norefferrer">
            {" "}
            <img className="h-96 w-96 px-5" src={images || noimg} />
          </a>
          <div className="h-56 overflow-auto font-mono text-lg p-3">{data.summary}</div>
        </div>
      )}
    </>
  );
};

export default Card;
