export default function EducationFinal({
  schoolName,
  program,
  schoolYear,
  learned,
  handleClickedToEdit,
}) {
  return (
    <div>
      <button
        onClick={handleClickedToEdit}
        className="absolute top-0 left-[45%] bg-green-600 px-4 py-2 font-bold text-black opacity-0 group-hover:opacity-70"
      >
        Edit
      </button>
      <h1 className="pt-3 text-2xl">{schoolName}</h1>
      <p className="text-[12px]">{program}</p>
      <p className="text-[12px]">{schoolYear}</p>
      <p className="text-[12px]">{learned}</p>
    </div>
  );
}
