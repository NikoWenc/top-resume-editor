export default function HeaderFinal({
  name,
  phoneNumber,
  email,
  github,
  linkedIn,
  handleClickedToEdit,
}) {
  return (
    <div className="group relative flex size-full flex-col items-center justify-between pb-3">
      <button
        onClick={handleClickedToEdit}
        className="absolute top-[-38px] bg-green-600 px-4 py-2 font-bold text-black opacity-0 group-hover:opacity-70"
      >
        Edit
      </button>
      <h1 id="name" className="flex-1 pb-5 text-start text-5xl opacity-70">
        {name ? name : "Your Name"}
      </h1>
      <section
        id="contacts"
        className="flex w-full flex-1 content-center justify-around"
      >
        <p className="text-[12px]">{phoneNumber ? phoneNumber : "Phone#"}</p>
        <p className="text-[12px]">{email ? email : "Email"}</p>
        <a href={github} className="text-[12px]" target="_blank">
          Github
        </a>
        <a href={linkedIn} className="text-[12px]" target="_blank">
          LinkedIn
        </a>
      </section>
    </div>
  );
}
