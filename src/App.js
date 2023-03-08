import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import PokeHome from "./components/PokeHome";

const queryClient = new QueryClient();

function App() {
  return (
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
  );
}

export default App;
