import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./screens/List";
import { getCall } from "./services/apiCalls";
import ErrorPage from "./screens/ErrorPage";
import TaskPage from "./screens/Task";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <List />,
      errorElement: <ErrorPage />,
      loader: async () => {
        const res = await getCall("/");
        return res.data;
      },
    },
    {
      path: "/task",
      element: <TaskPage />,
    },
    {
      path: "/task/:id",
      loader: async ({ params }) => {
        const res = await getCall(`/${params.id}`);
        return res.data;
      },
      errorElement: <ErrorPage />,
      element: <TaskPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
