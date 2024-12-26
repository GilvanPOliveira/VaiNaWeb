import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import DefaultLayout from "../layout/DefaultLayout";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
);
