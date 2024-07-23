import React from "react";

function ButtonsContainer({ onButtonClick }) {
  const buttonNames = [
    "AC", "DEL", "/", "*", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", "00", "0", ".",
  ];

  return (
    <>
      <div id="buttons-cont" className="grid grid-cols-4 grid-rows-5 gap-2">
        {buttonNames.map((buttonName, index) => (
          <button
            key={index} // Added key prop for each button
            className={`py-4 rounded-xl text-2xl font-semibold ${
              buttonName === "+" ||
              buttonName === "-" ||
              buttonName === "=" ||
              buttonName === "*" ||
              buttonName === "/" 
                ? "bg-[#1991FF] text-white hover:bg-[#005DB2] font-bold col-span-2"
                : "bg-[#2D3137] text-[#4BBCFC] hover:bg-[#1F2226]"
            }`}
            onClick={() => onButtonClick(buttonName)}
            style={{
              gridRow: buttonName === "=" ? "span 2" : "auto",
              gridColumn: buttonName === "=" ? "span 1" : "auto",
            }}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonsContainer;
