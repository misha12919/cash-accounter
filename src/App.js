import { InfoPanel } from "./components/InfoPanel";
import { Forms } from "./components/Forms";
import { History } from "./components/History";

function App() {
  return (
      <div className="container">
        <InfoPanel />
        <Forms />
        <History />
      </div>
  );
}

export default App;
