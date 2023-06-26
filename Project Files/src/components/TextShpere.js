import React, { useEffect } from "react";

import "./TextShpere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "Learn",
        "Develope",
        "Techknowledge",
        "Explore",
        "Skills",
        "TeamWork",
        "Fun",
        "Deploy",
        "Project",
        "Code",
        "Challenge",
        "GIT",
        "GITHUB",
      ];

      const options = {
        radius: 300,
        maxSpeed: "fast",
        initSpeed: "fast",
        keep: true,
      };
      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;
