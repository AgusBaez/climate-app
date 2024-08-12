import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import styles from "./App.module.css";
import ReactSwitch from "react-switch";
import { useTheme } from "./hooks/useTheme";
import { useState } from "react";

export const App = () => {
  const [checked, setChecked] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSwitch = (nextChecked) => {
    setTheme((state) => (state === "Light" ? "Dark" : "Light"));
    setChecked(nextChecked);
  };
  return (
    <>
      <div className={styles[theme]}>
        <ReactSwitch
          onChange={handleSwitch}
          checked={checked}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        />
        <p>Theme {theme}</p>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
      <footer>
        <p>�� 2024 Climate App. All rights reserved.</p>
      </footer>
    </>
  );
};

