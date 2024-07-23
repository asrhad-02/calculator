import "./App.css";
import Display from "./components/display";
import ButtonsContainer from "./components/buttonsContainer";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [calVal, setcalVal] = useState("");

  const onButtonClick = (buttonName) => {
    if (buttonName === "AC") {
      setcalVal("");
    } else if (buttonName === "DEL") {
      setcalVal(calVal.slice(0, -1));
    } else if (buttonName === "=") {
      try {
        const result = evaluate(calVal);
        setcalVal(result.toString());
      } catch (error) {
        setcalVal("Invalid");
      }
    } else {
      const newVal = calVal + buttonName;
      setcalVal(newVal);
    }
  };

  return (
    <>
      <div
        className="flex justify-center items-center h-screen"
        style={{
          backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/988/889/137/simple-gradient-minimalism-wallpaper-preview.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="border border-black p-4 w-[330px] h-[600px] bg-[#121E28] rounded-3xl shadow-gray-400 shadow-md"
          id="calculator"
        >
          <Display displayVal={calVal}></Display>
          <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
        </div>
      </div>
    </>
  );
}

export default App;
