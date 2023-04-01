// Load screens
import Filters from "./components/filters/Filters";
import AddExpense from "./components/addExpense/AddExpense";
import SignIn from "../src/components/sign-in/Signin";
import SignUp from "../src/components/sign-up/Signup";
import Layout from "../src/components/Layout/Layout";
import ExpensesFeed from "./components/expenses-feed/ExpensesFeed";

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
      <Route
        path="/signin"
        element={
          <Layout>
            <SignIn />
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <SignUp />
          </Layout>
        }
      />
      <Route
        path="/"
        element={
          <Layout>
            <ExpensesFeed />
          </Layout>
        }
      />
      <Route
        path="/add-expense"
        element={
          <Layout>
            <AddExpense />
          </Layout>
        }
      />
      <Route
        path="/edit-expense/:id"
        element={
          <Layout>
            <AddExpense />
          </Layout>
        }
      />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
