import { JSX } from "react";

interface AboutData {
  info: JSX.Element;
}

/**
 * TODO: replace `info` with your personal information.
 */
const aboutData: AboutData = {
  info: (
    <>
      <p>
        Hello there, my name is Ella, and I'm originally from Manila, Philippines! I am currently a freshman in CAS at Boston University studying economics, but I plan to transfer to Questrom to major in Business.
      </p>
      <p>
        I absolutely love cooking, traveling, and challenging myself in
        different respects. To learn more about what I've been working on, feel
        free to check out my <a href="https://github.com/wderocco8">GitHub</a>{" "}
        😁.
      </p>
    </>
  ),
};

export default function About() {
  return (
    <>
      <h2 id="about">About me</h2>
      {aboutData.info}
    </>
  );
}
