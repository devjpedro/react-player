import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { HomePage } from "./pages/home";

export function App() {
  return (
    <ReduxProvider store={store}>
      <HomePage />
    </ReduxProvider>
  );
}
