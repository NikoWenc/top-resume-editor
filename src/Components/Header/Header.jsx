import { useState } from "react";
import HeaderFinal from "./HeaderFinal";
import HeaderEdit from "./HeaderEdit";

export default function Header() {
  const [person, setPerson] = useState({
    name: "",
    phoneNumber: null,
    email: "",
    github: "",
    linkedIn: "",
    infoIsFilled: 0,
  });

  function handleInputs(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  function handleClickedToEdit() {
    setPerson({
      ...person,
      infoIsFilled: person.infoIsFilled ? 0 : 1,
    });
  }

  if (person.infoIsFilled) {
    return (
      <HeaderEdit
        handleInputs={handleInputs}
        handleClickedToEdit={handleClickedToEdit}
      />
    );
  } else {
    return (
      <HeaderFinal
        name={person.name}
        phoneNumber={person.phoneNumber}
        email={person.email}
        github={person.github}
        linkedIn={person.linkedIn}
        handleClickedToEdit={handleClickedToEdit}
      />
    );
  }
}
