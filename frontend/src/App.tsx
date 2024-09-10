import { useEffect } from "react";
import { backendUrl } from "./utils/config.defaults";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  useEffect(() => {
    const fetchResponse = async () => {
      try {
        await fetch(`${backendUrl}/api`);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(`Failed to connect to ${backendUrl}\n${error.message}`);
      }
    };
    fetchResponse();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/helloworld"
        element={<p>Hello world from the frontend</p>}
      />
    </Routes>
  );
}

export default App;
