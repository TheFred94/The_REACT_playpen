import { useEffect, useState } from "react";
import ReactFlipCard from "@holbech/react-flip-card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";

function App() {
  const [paragraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  console.log(paragraph);

  return (
    <div className="App">
      <>
        <div style={{ "--width": "500px", "--height": "500px" }}>
          <ReactFlipCard>
            <p>Front</p>
            <p>Back</p>
          </ReactFlipCard>
        </div>
        {paragraph ? (
          <div>
            <p>Damn the site loaded!</p>
          </div>
        ) : (
          <Skeleton />
        )}
      </>
    </div>
  );
}

export default App;
