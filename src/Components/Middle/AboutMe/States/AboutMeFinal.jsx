export default function AboutMeFinal({ aboutText, handleClickedToEdit }) {
  return (
    <>
      <button
        onClick={handleClickedToEdit}
        className="absolute top-0 left-[45%] bg-green-600 px-4 py-2 font-bold text-black opacity-0 group-hover:opacity-70"
      >
        Edit
      </button>
      <h1 className="pt-3 text-2xl">About Me</h1>
      <p className="text-[12px]">{aboutText}</p>
    </>
  );
}
