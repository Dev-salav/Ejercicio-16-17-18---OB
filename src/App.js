import React from "react";
import Layout from "./components/pure/forms/layout";
import FormularioTask from "./components/pure/forms/formAddTask";
import FormLogin from "./components/pure/forms/formLogin";
import Notfoundpage from "./pages/404";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  let LoggedIn = true;

  const Protected = ({ LoggedIn, children }) => {
    if (!LoggedIn) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FormLogin />} />
          <Route
            path="/formtask"
            element={
              <Protected LoggedIn={LoggedIn}>
                <FormularioTask />
              </Protected>
            }
          />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
