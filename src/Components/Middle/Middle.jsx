import AboutMe from "./AboutMe";
import { useState } from "react";
import AboutMeEdit from "./AboutMeEdit";

export default function Middle() {
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
    <div className="group relative pb-3">
      {about.aboutState ? (
        <AboutMeEdit
          onChange={onChange}
          handleClickedToEdit={handleClickedToEdit}
        />
      ) : (
        <AboutMe
          aboutText={about.aboutText}
          handleClickedToEdit={handleClickedToEdit}
        />
      )}
    </div>
  );
}
