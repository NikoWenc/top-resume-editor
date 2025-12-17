import AboutMeFinal from "./States/AboutMeFinal";
import { useState } from "react";
import AboutMeEdit from "./States/AboutMeEdit";

export default function AboutMe() {
  let [about, setAbout] = useState({
    aboutText: "Tell me about yourself",
    aboutState: 0,
  });

  function onChange(e) {
    setAbout({
      ...about,
      aboutText: e.target.value,
    });
  }

  function handleClickedToEdit() {
    setAbout({
      ...about,
      aboutState: about.aboutState ? 0 : 1,
    });
  }

  return (
    <div className="group relative border-b-2 border-gray-400 pb-3">
      {about.aboutState ? (
        <AboutMeEdit
          onChange={onChange}
          handleClickedToEdit={handleClickedToEdit}
        />
      ) : (
        <AboutMeFinal
          aboutText={about.aboutText}
          handleClickedToEdit={handleClickedToEdit}
        />
      )}
    </div>
  );
}
