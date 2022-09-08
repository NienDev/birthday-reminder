import React from "react";

export default function List(props) {
  return (
    <div className="flex mt-6 gap-4">
      <div className="">
        <img
          className="w-20 h-20 object-cover object-center rounded-full shadow-xl"
          src={props.img}
          alt="image"
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-col pt-3">
        <h4 className="font-bold">{props.name}</h4>
        <p>{props.age} years</p>
      </div>
    </div>
  );
}
