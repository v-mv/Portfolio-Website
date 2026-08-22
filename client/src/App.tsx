// Style reminder: App is intentionally minimal; the single-page experience owns the Signal & Substance system in Home and index.css.

import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

function App() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}

export default App;
