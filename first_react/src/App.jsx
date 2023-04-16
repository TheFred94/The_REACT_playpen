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
