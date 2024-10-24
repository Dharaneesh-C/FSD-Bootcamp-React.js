import React, { useState } from "react";
// import FunctionalContextComponent from "./components/FunctionalContextComponent";
// import ClassContextComponent from "./components/ClassContextComponent";

// import { ThemeProvider } from "./components/ThemeContext";
import UseReducers from "./components/UseReducers";
import TodoUseReducers from "./components/TodoUseReducers";
import UseCallBacksComponent from "./components/UseCallBacksComponent";


export const ThemeContext = React.createContext();



// import UseStateUseEffect from './components/UseStateUseEffect'
// import UseRefHook from './components/UseRefHook'
// import UseMemoHook from './components/UseMemoHook'

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <div>
      <h1>React Hooks </h1>
      {/* <UseStateUseEffect/> */}
      {/* <UseRefHook/> */}
      {/* <UseMemoHook /> */}

      <>
        {/* <ThemeContext.Provider value={darkTheme}>
          <button onClick={toggleTheme}>Toggle Button Class</button>

          <ClassContextComponent />
        </ThemeContext.Provider>

        <ThemeProvider>
         
          <FunctionalContextComponent />
         
        </ThemeProvider> */}

        {/* <UseReducers /> */}
        {/* <TodoUseReducers/> */}

        <UseCallBacksComponent/>

      </>
    </div>
  );
}
