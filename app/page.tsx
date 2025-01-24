import Homepage from "@/components/Homepage";
import { MoviesProvider } from "@/context/MoviesContext";

const App = () => {
  return (
    <MoviesProvider>
      <Homepage />
    </MoviesProvider>
  );
};

export default App;