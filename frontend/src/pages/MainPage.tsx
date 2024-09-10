import { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import { backendUrl } from "../utils/config.defaults";

function MainPage() {
  const [count, setCount] = useState(0);
  const [serverResponse, setServerResponse] = useState("Loading...");
  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/helloworld`);
        console.log(backendUrl);
        setServerResponse(await res.text());
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setServerResponse(`Error fetching from server: ${error.message}`);
      }
    };
    fetchResponse();
  }, []);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>{serverResponse}</p>
    </>
  );
}

export default MainPage;
