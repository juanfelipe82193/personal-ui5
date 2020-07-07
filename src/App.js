import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import React from 'react';
import { MyPersonal } from "./MyPersonal"

function App() {
  return (
    <ThemeProvider>
      <MyPersonal />
    </ThemeProvider>
  );
}

export default App;
