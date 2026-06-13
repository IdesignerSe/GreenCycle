import { BrowserRouter } from "react-router-dom";

const base = import.meta.env.DEV ? "/" : "/GreenCycle/";

export default function AppRouter() {
  return (
    <BrowserRouter basename={base}>
      {/* your routes */}
    </BrowserRouter>
  );
}
