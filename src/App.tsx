import React, { MouseEvent } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const myFirstSubscriber = () => {
    console.log("Hello! I am Vasya");
  };

  const myNewSubscriber = (name: string) => console.log("Hello! I am " + name);

  const foo1 = () => {
    console.log("100200");
  };

  const foo2 = (number: number) => console.log(number);

  const Button1 = (name: string, age: number) => {
    console.log(name, age);
  };
  const Button2 = (name: string) => {
    console.log(name);
  };

  const Button3 = () => {
    console.log("I am stupid button");
  };
  return (
    <div className="App">
      <button
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
      <Button name="Stupid Button" callBack={Button3} />
    </div>
  );
}

export default App;
