import lines from "./assets/lines.svg";
import lines2 from "./assets/lines2.svg";
import { RoutesContainer } from "./components/RoutesContainer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="relative h-screen w-full xl:overflow-hidden">
      <Router>
        <RoutesContainer />
      </Router>

      <div className="red__gradient absolute -right-20 -bottom-60 z-0 h-3/5 w-1/3"></div>
      <div className="redWeak__gradient absolute -left-[26rem] -top-80 z-0 h-1/2 w-1/4"></div>
      <img
        src={lines}
        className="absolute -bottom-20 right-0 w-1/4 opacity-50"
      />
      <img
        src={lines2}
        className="absolute -top-0 left-0 z-10 w-1/4 opacity-50"
      />
    </div>
  );
}

export default App;
