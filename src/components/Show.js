import React, { useEffect, useState } from "react";

const Show = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    const fetchShow = async () => {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=naruto");
      const data = await res.json();
      console.log(data);
      setShow(data);
    };
    fetchShow();
  }, []);
  return (
    <div className="flex flex-wrap">
      {show.map((y) => {
        // console.log(y)

        const images = y.show.image ? y.show.image.medium : "";

        return (
          <div className="" key={y.show.id}>
            <img className="border" src={images} alt={"No image found"}/>
            <div>{y.show.name}</div>
            <div>{y.show.id}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Show;
