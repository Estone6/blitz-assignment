import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Home from "./containers/Home";
import Header from "./components/Header";
import "./App.css";

Chart.register(CategoryScale);

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}
