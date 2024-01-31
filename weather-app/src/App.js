import "./App.css";
import Charts from "./Components/Charts/Charts.js";
import Data from "./Data.js";
import Hero from "./Components/Hero/Hero.js";

function App() {
  const reversedData = Data.slice().reverse();
  const weather = reversedData.map((item) => {
    return (
      <Charts
        wdate={item.wdate}
        wtemp={item.wtemp}
        whumid={item.whumid}
        wpressure={item.wpressure}
      />
    );
  });
  return (
    <div className="text-center h-100 bg-light">
      <Hero />
      <section
        id="weather-section-container"
        className=" py-3 d-flex flex-row flex-wrap justify-content-center align-items-center gap-5"
      >
        {weather}
      </section>
    </div>
  );
}
export default App;
