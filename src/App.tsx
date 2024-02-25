import React, { MouseEvent, useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  // const myFirstSubscriber = () => {
  //   console.log("Hello! I am Vasya");
  // };

  // const myNewSubscriber = (name: string) => console.log("Hello! I am " + name);

  // const foo1 = () => {
  //   console.log("100200");
  // };

  // const foo2 = (number: number) => console.log(number);

  // const Button1 = (name: string, age: number) => {
  //   console.log(name, age);
  // };
  // const Button2 = (name: string) => {
  //   console.log(name);
  // };

  // const Button3 = () => {
  //   console.log("I am stupid button");
  // };
  // let [a, setA] = useState(1);
  // const onClickHandler = () => {
  //   setA(++a);
  //   console.log(a);
  // };

  // const onClickHandler0 = () => {
  //   setA((a = 0));
  //   console.log(a);
  // };

  //filter
  const [money, setMoney] = useState([
    { banknote: "dollar", nominal: 100, number: "a123456789" },
    { banknote: "dollar", nominal: 50, number: "b123456789" },
    { banknote: "ruble", nominal: 100, number: "c123456789" },
    { banknote: "dollar", nominal: 100, number: "d123456789" },
    { banknote: "dollar", nominal: 50, number: "e123456789" },
    { banknote: "ruble", nominal: 100, number: "f123456789" },
    { banknote: "dollar", nominal: 50, number: "j123456789" },
    { banknote: "ruble", nominal: 50, number: "h123456789" },
  ]);

  let currentMoney = money.filter(
    (filteredMoney) => filteredMoney.banknote === "ruble"
  );

  return (
    <div className="App">
      {/* <button
        onClick={(event) => {
          console.log("Hello");
        }}
      >
        BUTTON
      </button>
      <button onClick={myFirstSubscriber}>Channel 1</button>
      <button
        onClick={(event: MouseEvent<HTMLButtonElement>) =>
          myNewSubscriber("Ivan")
        }
      >
        Subscriber
      </button>

      <button onClick={foo1}>Btn1</button>
      <button onClick={(event: MouseEvent<HTMLButtonElement>) => foo2(100200)}>
        Btn2
      </button>

      <Button name="Channel1" callBack={() => Button1("Ivan", 21)} />
      <Button name="Channel2" callBack={() => Button2("Sasha")} />
      <Button name="Stupid Button" callBack={Button3} /> */}
      {/* <h1>{a}</h1>
      <button onClick={onClickHandler}>number</button>

      <button onClick={onClickHandler0}>0</button> */}

      <ul>
        {currentMoney.map((objFromMoneyArr, index) => {
          return (
            <li key={index}>
              <span>{objFromMoneyArr.banknote}</span>
              <span>{objFromMoneyArr.nominal}</span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
