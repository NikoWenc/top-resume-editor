import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

export default function HeaderEdit({ handleInputs, handleClickedToEdit }) {
  return (
    <div className="group relative flex size-full flex-col items-center justify-between pb-3">
      <button
        onClick={handleClickedToEdit}
        className="absolute top-[-38px] bg-green-600 px-4 py-2 font-bold text-black opacity-0 group-hover:opacity-70"
      >
        Done
      </button>
      <label htmlFor="name">
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Enter Full Name"
          className="flex-1 text-center text-5xl opacity-40"
          onChange={handleInputs}
        />
      </label>
      <section className="flex w-full flex-1 content-center justify-around pt-8">
        <label htmlFor="phoneNumber">
          <FontAwesomeIcon icon="fa-solid fa-phone" />
          <input
            name="phoneNumber"
            id="phoneNumber"
            type="number"
            placeholder="Enter Phone Number"
            className="text-[12px]"
            onChange={handleInputs}
          />
        </label>
        <label htmlFor="email">
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter Email"
            className="text-[12px]"
            onChange={handleInputs}
          />
        </label>
        <label htmlFor="github">
          <input
            name="github"
            id="github"
            type="text"
            placeholder="Enter GitHub Link"
            className="text-[12px]"
            onChange={handleInputs}
          />
        </label>
        <label htmlFor="linkedIn">
          <input
            name="linkedIn"
            id="linkedIn"
            type="text"
            placeholder="Enter LinkedIn Link"
            className="text-[12px]"
            onChange={handleInputs}
          />
        </label>
      </section>
    </div>
  );
}
