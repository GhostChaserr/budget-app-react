// Load screens
import Filters from "./components/filters/Filters";
import AddExpense from "./components/addExpense/AddExpense";
import SignIn from "../src/components/sign-in/Signin";
import SignUp from "../src/components/sign-up/Signup";
import Layout from "../src/components/Layout/Layout";
import Managment from "./components/Managment/Managment";
import ProtectedRoute from "../src/components/ProtectedRoute/ProtectedRoute";
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
          <ProtectedRoute>
            <Layout>
              <AddExpense />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/managment"
        element={
          <ProtectedRoute>
            <Managment />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-expense/:id"
        element={
          <ProtectedRoute>
            <Layout>
              <AddExpense />
            </Layout>
          </ProtectedRoute>
        }
      />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
