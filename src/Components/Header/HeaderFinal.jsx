import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

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
      <h1 id="name" className="flex-1 pt-3 text-start text-5xl opacity-70">
        {name ? name.toUpperCase() : "Your Name"}
      </h1>
      <section
        id="contacts"
        className="flex w-full flex-1 content-center justify-around pt-8"
      >
        <p className="text-[12px]">
          <span>
            <FontAwesomeIcon icon="fa-solid fa-phone" />
          </span>
          {phoneNumber ? phoneNumber : "Phone#"}
        </p>
        <p className="text-[12px]">
          <span>
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </span>
          {email ? email : "Email"}
        </p>
        <a href={github} className="text-[12px]" target="_blank">
          <span>
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </span>
          Github
        </a>
        <a href={linkedIn} className="text-[12px]" target="_blank">
          <span>
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </span>
          LinkedIn
        </a>
      </section>
    </div>
  );
}
