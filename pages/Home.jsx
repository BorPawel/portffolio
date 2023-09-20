import "@styles/home.sass";
import "animate.css";

import Link from "next/link";

import { BsLinkedin, BsGithub } from "react-icons/bs";

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="my-name">
          {/* <p>Hi, my name is</p> */}
          <h1>
            Hi, I am <span>Paweł Bornikowski</span> a{" "}
            <span className="glowing-txt">
              <span
                className="faulty-letter"
                style={{
                  "--glow-color": "hsl(186 100% 69%)",
                }}
              >
                F
              </span>
              ront-
              <span
                className="faulty-letter"
                style={{
                  "--glow-color": "hsl(297.79, 100%, 52.16%)",
                }}
              >
                e
              </span>
              nd
            </span>
            <span>&nbsp;Developer</span>
          </h1>

          <p className="front-note">
            Aspiring pixel perfect craftsman honing my JS, React & CSS skills to
            build interfaces that delight.
          </p>
        </div>
      </div>
      <div className="socials">
        <Link href="https://github.com/BorPawel" target="_blank">
          <BsGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/pbornikowski/" target="_blank">
          <BsLinkedin />
        </Link>
      </div>
    </section>
  );
};
export default Home;
