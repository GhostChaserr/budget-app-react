// Load screens
import Filters from "./components/filters/Filters";
import AddExpense from "./components/addExpense/AddExpense";
import SignIn from "../src/components/sign-in/Signin";
import SignUp from "../src/components/sign-up/Signup";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const Notification = (props) => {
  const { text } = props;
  return <div>{text}</div>;
};

Notification.defaultProps = {
  text: "hello",
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Filters />} />
      <Route path="/add-expense" element={<AddExpense />} />
      <Route path="/edit-expense/:id" element={<AddExpense />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
