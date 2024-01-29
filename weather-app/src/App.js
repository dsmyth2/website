import "./App.css";
import Charts from "./Components/Charts/Charts";
import data from "./Data";
import Hero from "./Components/Hero/Hero";

function App() {
  const weather = data.map((item) => {
    return (
      <Charts
        key={item.id}
        wdate={item.wdate}
        wtemp={item.wtemp}
        whumid={item.whumid}
        wpressure={item.wpressure}
      />
    );
  });
  return (
    <div className="App">
      <Hero />
      <section className="weather-section-container">{weather}</section>
    </div>
  );
}
export default App;
