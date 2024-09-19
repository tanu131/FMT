import React, { useState } from "react";
import Heart from "../../assets/icons/heart.png";
import DefaultButton from "./defaultButton";

const checkboxData = [
  {
    id: 1,
    heading: "Test Main Disease",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    id: 2,
    heading: "Third Disease 2",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    id: 3,
    heading: "Second Disease",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    id: 4,
    heading: "Test Disease",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    id: 5,
    heading: "Flare of Rheumatoid Arthritis",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    id: 6,
    heading: "Felty Syndrome with Seronegative Rheumatoid Arthritis",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    id: 7,
    heading: "Felty Syndrome with Seronegative Erosive Rheumatoid Arthritis",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    id: 8,
    heading: "Dilated Cardiomyopathy due to Rheumatoid Arthritis",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    id: 9,
    heading:
      "Deformity of Joint of Right Wrist Region due to Rheumatoid Arthritis",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    id: 10,
    heading:
      "Deformity of Right Hand Co-occurring and due to Rheumatoid Arthritis",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
];

const DefaultCheckButton = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleToggle = (id) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id],
    }));
  };

  return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        {checkboxData.map((item) => (
          <div
            key={item.id}
            onClick={() => handleToggle(item.id)}
            className={`border-8 border-white h-96 rounded-md p-4 flex flex-col justify-between cursor-pointer ${
              checkedItems[item.id]
                ? "bg-blue-500 text-white"
                : "bg-purple-200 text-black"
            }`}
          >
            <div className="">
              <img src={Heart} alt="heart" className="h-20 w-20" />
            </div>
            <div className="flex flex-col mt-2 text-start">
              <h2 className="font-bold text-lg">{item.heading}</h2>
              <p className="text-sm mt-2">{item.paragraph}</p>
            </div>

            <div className="">
              <DefaultButton
                label="Read more"
                className={`w-full px-2 py-2 rounded-md bg-white text-blue font-bold`}
              />
            </div>
          </div>
        ))}
      </div>
  );
};

export default DefaultCheckButton;
