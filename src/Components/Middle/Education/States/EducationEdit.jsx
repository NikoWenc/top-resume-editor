export default function EducationEdit({ handleInputs, handleClickedToEdit }) {
  return (
    <div>
      <button
        onClick={handleClickedToEdit}
        className="absolute top-0 left-[45%] bg-green-600 px-4 py-2 font-bold text-black opacity-0 group-hover:opacity-70"
      >
        Edit
      </button>
      <form action="">
        <label htmlFor="schoolName">
          <input
            type="text"
            name="schoolName"
            id="schoolName"
            onChange={handleInputs}
            className="mt-3 block border text-2xl"
            placeholder="School Name"
          />
        </label>
        <label htmlFor="program">
          <input
            type="text"
            name="program"
            id="program"
            onChange={handleInputs}
            className="block border text-[12px]"
            placeholder="Program"
          />
        </label>
        <label htmlFor="schoolYear">
          <input
            type="text"
            name="schoolYear"
            id="schoolYear"
            onChange={handleInputs}
            className="block border text-[12px]"
            placeholder="School Year"
          />
        </label>
        <label htmlFor="learned">
          <textarea
            name="learned"
            id="learned"
            onChange={handleInputs}
            className="h-24 w-full border text-[12px]"
          ></textarea>
        </label>
      </form>
    </div>
  );
}
