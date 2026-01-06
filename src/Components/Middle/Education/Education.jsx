import { useState } from "react";
import EducationFinal from "./States/EducationFinal";
import EducationEdit from "./States/EducationEdit";

export default function Education({ handleClickedToRemove, id }) {
  const [schools, setSchools] = useState({
    schoolName: "School Name",
    program: "Program",
    schoolYear: "School Year",
    learned: "Everything you learned",
    educationState: 0,
  });

  function handleInputs(e) {
    setSchools({
      ...schools,
      [e.target.name]: e.target.value,
    });
  }

  function handleClickedToEdit() {
    setSchools({
      ...schools,
      educationState: schools.educationState ? 0 : 1,
    });
  }

  return (
    <div className="group relative pb-3">
      {schools.educationState ? (
        <EducationEdit
          handleInputs={handleInputs}
          handleClickedToEdit={handleClickedToEdit}
        />
      ) : (
        <EducationFinal
          schoolName={schools.schoolName}
          program={schools.program}
          schoolYear={schools.schoolYear}
          learned={schools.learned}
          handleClickedToEdit={handleClickedToEdit}
          handleClickedToRemove={handleClickedToRemove}
          id={id}
        />
      )}
    </div>
  );
}
