// Load screens
import { useState } from "react";
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
import { LanguageContext } from "./LanguageContext";
import Header from "./components/Header/Header";
import { ThemeContext } from "./ThemeContext";

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
  const [language, updateLang] = useState("eng");
  const [theme, setTheme] = useState("light");

  return (
    <LanguageContext.Provider value={{ language, updateLang }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <RouterProvider router={router} />;
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
