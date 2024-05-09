import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes"

function App() {
  const router = createBrowserRouter(ROUTES);
  return (

  <div>

    <RouterProvider router={router} />
  </div>

  );
}

export default App;

