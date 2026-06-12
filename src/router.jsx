import { BrowserRouter } from "react-router-dom";
import App from "./App";

export default function AppRouter() {
  return (
    <BrowserRouter basename="/GreenCycle/">
      <App />
    </BrowserRouter>
  );
}
