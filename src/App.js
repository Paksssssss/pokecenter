import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import PokeHome from "./components/PokeHome";
import { Provider } from "react-redux";
import { store } from "./store";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <nav>
          <a className="nav-title" href="#top">
            Pokemon Center
          </a>
        </nav>
        <div>
          <PokeHome />
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
