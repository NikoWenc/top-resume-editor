import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import { useState } from "react";

export default function Middle() {
  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
    },
  ]);

  function addItem() {
    setEducation((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
      },
    ]);
  }

  function removeItem(id) {
    setEducation((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <>
      <AboutMe />
      <div className="group relative border-b-2 border-gray-400">
        <h1 className="pt-3 text-2xl">Education</h1>
        {education.map((item) => {
          return (
            <Education
              key={item.id}
              id={item.id}
              handleClickedToRemove={removeItem}
            />
          );
        })}
        <button
          className="absolute top-full left-[47%] bg-green-600 px-4 py-2 font-bold text-black opacity-0 group-hover:opacity-70"
          onClick={addItem}
        >
          Add School
        </button>
      </div>
    </>
  );
}
