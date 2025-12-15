export default function AboutMeEdit({ onChange, handleClickedToEdit }) {
  return (
    <>
      <button
        onClick={handleClickedToEdit}
        className="absolute top-0 left-[45%] bg-green-600 px-4 py-2 font-bold text-black opacity-0 group-hover:opacity-70"
      >
        Done
      </button>
      <h1 className="pt-3 text-2xl">About Me</h1>
      <label htmlFor="aboutMeText">
        <textarea
          name="aboutMeText"
          id="aboutMeText"
          className="h-32 w-full border text-[12px]"
          onChange={onChange}
        ></textarea>
      </label>
    </>
  );
}
