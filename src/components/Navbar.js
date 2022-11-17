import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  const [state, setState] = useState("");
  const [input, setInput] = useState("");
  const [show, setShow] = useState([]);
  const [submit, setSubmit] = useState(false);

  const placeholder = state === "people" ? "Here's Actor" : "Here's Show";

  const fetchShow = async (e) => {
    e.preventDefault();
    const res = `https://api.tvmaze.com/search/${state}?q=${input}`;
    const response = await axios.get(res);
    console.log(response.data);
    setShow(response.data);
    setSubmit(true);
  };

  const changeHandle = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className=" bg-slate-600">
        <span className="text-8xl flex text-white justify-center">TV Info</span>

        <div className="flex justify-center h-9 bg-red-300">
          <input
            type="radio"
            name="radio"
            className="ml-4 "
            onClick={(e) => {
              setState("people");
              setShow([]);setInput([])
            }}
          />
          <label className="p-1.5">Actor</label>
          <input
            type="radio"
            name="radio"
            className="ml-4 "
            onClick={(e) => {
              setState("shows");
              setShow([]);setInput([])
            }}
          />
          <label className="p-1.5">Show</label>
        </div>
    
      {state && (
        <form onSubmit={fetchShow}>
          <div className="flex justify-center gap-4 p-2">
            <input
              className="border"
              placeholder={placeholder}
              onChange={changeHandle}
              type="placeholder"
              value={input}
            />
            <SearchOutlinedIcon className="bg-red-200 w-10 rounded-lg"/>
          </div>
        </form>
      )}

      {submit && (
        <div className="grid grid-cols-5 m-2 gap-2 ">
          {show?.map((post) => (
            <Card details={post} state={state} />
          ))}
        </div>
      )}
        </div>
    </>
  );
};

export default Navbar;
