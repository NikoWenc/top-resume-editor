import { useState } from "react";
import EducationFinal from "./States/EducationFinal";
import EducationEdit from "./States/EducationEdit";

export default function Education() {
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
    <div className="group relative border-b-2 border-gray-400 pb-3">
      <h1 className="pt-3 text-2xl">Education</h1>
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
        />
      )}
    </div>
  );
}
