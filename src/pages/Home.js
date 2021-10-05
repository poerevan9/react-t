import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// import styled from 'styled-components';

// const StyledTitle = styled.h1`
//   font-size: 24px;
// `
import { StyledTitle } from "../components/common/index.styled";

import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'

function Home() {
  const videoRef = useRef();
  const [duration, setDuration] = useState(null);
  // React side effect
  useEffect(() => {
    console.log(videoRef.current);
  });

  const [counter, setCounter] = useState(0);
  let counter2 = 0;
  useEffect(() => {
    console.log(counter);
  });
  useEffect(() => {
    console.log(counter2);
  });

  const [text, setText] = useState("test");

  useEffect(() => {
    const plyr = new Plyr(videoRef.current, { title: "勞贖 4K" });
    plyr.on("ready", () => {
      console.log(plyr.duration);
      setDuration(plyr.duration);
    });
  }, [videoRef]);

  return (
    <div className="Home">
      <StyledTitle>Home page 24px</StyledTitle>

      <Link to="/about">Go to About page</Link>

      <div>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </div>
      <div>
        {counter2}
        <button onClick={() => (counter2 += 1)}>+1 (1)</button>
      </div>

      <div>
        <input onChange={(e) => setText(e.target.value)} placeholder="test"></input>
        {text}
      </div>
      <div>秒數{duration}秒</div>
      <div ref={videoRef} data-plyr-provider="youtube" data-plyr-embed-id="IGf1VSwCawo"></div>
    </div>
  );
}

export default Home;
