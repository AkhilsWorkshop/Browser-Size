import { useEffect, useState } from "react";

function App() {

  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      const handleResize = () =>
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return windowSize;
  };

  const { width, height } = useWindowSize();

  return (
    <div className="App">
      <div className="box">
        <h3>This window size is</h3>
        <h1>({width} x {height})</h1>
      </div>
    </div>
  );
}

export default App;
