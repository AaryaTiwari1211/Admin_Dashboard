import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ColorModeContext, useThemeMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Sidebar2 from "./pages/global/Sidebar/Sidebar2";
import Topbar from './pages/global/TopBar/Topbar'
import Dashboard from './pages/Dashboard/Dashboard'
import Invoices from './pages/Invoices/Invoices'
import Contacts from './pages/Contacts/Contacts'
import Bar from './pages/Bar/Bar'
import Form from './pages/Form/Form'
import Line from './pages/Line/Line'
import Pie from './pages/Pie/Pie'
import FAQ from './pages/FAQ/FAQ'
import Geography from './pages/Geography/Geography'
import Team from './pages/Team/Team'
import Calendar from './pages/Calendar/Calendar'

const App = () => {
  const [theme, colorMode] = useThemeMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar2 isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App

