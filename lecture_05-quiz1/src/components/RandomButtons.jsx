import { useState } from "react";

const RandomButtons = () => {
  const [value, setValue] = useState("");
  const [randomKey, setRandomKey] = useState("brand");

  let data = [
    {
      id: 4056,
      uid: "598500b4-7e0d-4690-be51-bc4b648aee8a",
      brand: "Kirin",
      name: "Delirium Noctorum",
      style: "Fruit Beer",
      hop: "Crystal",
      yeast: "2112 - California Lager",
      malts: "Caramel",
      ibu: "84 IBU",
      alcohol: "6.1%",
      blg: "14.4°Blg",
    },
    {
      id: 8224,
      uid: "a1e1d1d3-97a2-4454-957f-7e7d3a4d5183",
      brand: "Pabst Blue Ribbon",
      name: "Samuel Smith’s Oatmeal Stout",
      style: "Fruit Beer",
      hop: "Warrior",
      yeast: "3068 - Weihenstephan Weizen",
      malts: "Munich",
      ibu: "88 IBU",
      alcohol: "4.5%",
      blg: "7.2°Blg",
    },
    {
      id: 6905,
      uid: "80e8227b-cc26-45e3-b7e6-63b4ce3f8cac",
      brand: "Budweiser",
      name: "Racer 5 India Pale Ale, Bear Republic Bre",
      style: "Belgian Strong Ale",
      hop: "Bullion",
      yeast: "3278 - Belgian Lambic Blend",
      malts: "Black malt",
      ibu: "78 IBU",
      alcohol: "6.7%",
      blg: "18.4°Blg",
    },
    {
      id: 894,
      uid: "a02d4480-7923-4ae6-b7bf-386e42f43665",
      brand: "Red Stripe",
      name: "Weihenstephaner Hefeweissbier",
      style: "Wood-aged Beer",
      hop: "Bitter Gold",
      yeast: "1318 - London Ale III",
      malts: "Rye malt",
      ibu: "79 IBU",
      alcohol: "3.6%",
      blg: "18.2°Blg",
    },
    {
      id: 7148,
      uid: "030d06be-a1f3-4574-8a95-f5b0e1ae7065",
      brand: "Paulaner",
      name: "Sublimely Self-Righteous Ale",
      style: "Light Hybrid Beer",
      hop: "Palisade",
      yeast: "3763 - Roeselare Ale Blend",
      malts: "Wheat mal",
      ibu: "92 IBU",
      alcohol: "3.1%",
      blg: "9.5°Blg",
    },
  ];

  const handleClick = (e) => {
    setValue(e.target.innerText);
  };

  const handleRandomButton = (e) => {
    const allKeys = Object.keys(data[0]);
    const key = allKeys[(allKeys.length * Math.random()) << 0];
    setRandomKey(key);
  };

  return (
    <>
      <p>{value}</p>
      <div className="buttons">
        {data.map((elem, idx) => (
          <>
            <button key={idx} onClick={handleClick}>
              {elem[randomKey]}
            </button>
          </>
        ))}
        <br />
        <button onClick={handleRandomButton}>Random data</button>
      </div>
    </>
  );
};

export default RandomButtons;
