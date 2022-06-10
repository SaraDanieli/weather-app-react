import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      {" "}
      <p className="git-hub-rep">
        This project was coded by Sara Danieli and it is open-sourced on{" "}
        <a
          href="https://github.com/SaraDanieli/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="https://mellifluous-cat-a4bb99.netlify.app/">Netlify</a>
      </p>{" "}
    </div>
  );
}
