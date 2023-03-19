import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ColorModeContext, useThemeMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './pages/global/TopBar/Topbar'
import Dashboard from './pages/Dashboard/dashboard'
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
  const [theme, colorMode] = useThemeMode()
  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <main className='content'>
              <Topbar />
              <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/team' element={<Team/>} />
                <Route path='/invoices' element={<Invoices/>} />
                <Route path='/contacts' element={<Contacts/>} />
                <Route path='/FAQ' element={<FAQ/>} />
                <Route path='/form' element={<Form/>} />
                <Route path='/bar' element={<Bar/>} />
                <Route path='/line' element={<Line/>} />
                <Route path='/pie' element={<Pie/>} />
                <Route path='/geography' element={<Geography/>} />
                <Route path='/calendar' element={<Calendar/>} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  )
}

export default App

