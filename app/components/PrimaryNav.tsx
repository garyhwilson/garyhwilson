import Link from 'next/link';

import { FaGithub, FaLinkedin } from "react-icons/fa";

const PrimaryNav = () => {
  return (
    <nav>
      <h1>
        <Link href="/">Gary H. Wilson</Link>
      </h1>
      <div>
        <Link href="https://www.linkedin.com/in/garyhwilson/">
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/garyhwilson">
          <FaGithub />
        </Link>
      </div>
    </nav>
  );
};

export default PrimaryNav;
