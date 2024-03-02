import React from "react";
import { MoneyType } from "../App";
import { FilterType } from "../App";

type NewComponentPropsType = {
  currentMoney: MoneyType[];
  callBack: (nameButton: FilterType) => void;
};

export const NewComponent = (props: NewComponentPropsType) => {
  return (
    <div>
      <ul>
        {props.currentMoney.map((el, index) => {
          return (
            <li key={index}>
              <span>{el.banknote}</span>
              <span>{el.nominal}</span>
              <span>{el.number}</span>
            </li>
          );
        })}
      </ul>
      <div style={{ marginLeft: "35px" }}>
        <button
          onClick={() => {
            props.callBack("all");
          }}
        >
          all
        </button>
        <button
          onClick={() => {
            props.callBack("dollar");
          }}
        >
          dollars
        </button>
        <button
          onClick={() => {
            props.callBack("ruble");
          }}
        >
          rubles
        </button>
      </div>
    </div>
  );
};
