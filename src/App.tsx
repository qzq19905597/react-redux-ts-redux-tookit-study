import { AppProvider } from "context";
import { LoginScreen } from "screens/login/login";
// import { Project } from "screens/project-list";
function App() {
  return (
    <div className="App">
      {/* <Project /> */}
      <AppProvider>
        <LoginScreen />
      </AppProvider>
    </div>
  );
}

export default App;
