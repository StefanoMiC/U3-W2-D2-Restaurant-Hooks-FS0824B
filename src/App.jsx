import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
// import Counter from "./components/Counter";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";

const App = () => (
  <>
    <TopBar claim="Niente secondi piatti!" />
    {/* <Counter /> */}
    <ReservationList title="Prenotazioni" />
    <ReservationForm title="Prenota un tavolo" />
    <Home />
  </>
);

export default App;
