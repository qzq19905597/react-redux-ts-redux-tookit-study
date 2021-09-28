import { AppProvider } from "context";
import { Home } from "screens/home";
function App() {
  return (
    <div className="App">
      <AppProvider>
        <Home />
      </AppProvider>
    </div>
  );
}
export default App;
