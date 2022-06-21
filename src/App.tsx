import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./routers/appRouter";

function App() {
  return (
    <BrowserRouter>
    {/* header */}
    {/* content */}
      <AppRouter />
      {/* footer */}
    </BrowserRouter>
  );
}

export default App;
