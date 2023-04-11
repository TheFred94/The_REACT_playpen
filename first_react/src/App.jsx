import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Header";
import { SplashText } from "./SplashText";
import { SplashImage } from "./SplashImage";
import { LogoBar } from "./LogoBar";

function App() {
  return (
    <>
      <Header />
      <main>
        <article>
          <SplashText />
        </article>
        <section>
          <SplashImage />
        </section>
        <LogoBar />
      </main>
    </>
  );
}

export default App;
