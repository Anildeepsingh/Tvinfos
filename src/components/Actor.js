import React, { useEffect, useState } from "react";

const Actor = () => {
  const [actor, setActor] = useState([]);
  console.log(actor);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/people?q=akon").then((res) =>
      res.json().then((res) => setActor(res))
    );
  }, []);
  return (
    <div>
      {actor.map((x) => (
        <div key={x.person.id}>
          <div>{x.person.id}</div>
          <div>{x.person.name}</div>
        {/* <div>{x.person.image.medium}</div> */}
        {/* <div><img src={x.person.image.medium}/></div> */}
        </div>
))}
    </div>
  );
};

export default Actor;
