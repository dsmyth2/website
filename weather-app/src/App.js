import "./App.css";
import Charts from "./Components/Charts/Charts.js";
import data from "./Data.js";
import Hero from "./Components/Hero/Hero.js";

function App() {
  const weather = data.map((item) => {
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
      <section className="weather-section-container d-flex flex-column justify-content-center align-items-center gap-5">
        {weather}
      </section>
    </div>
  );
}
export default App;
