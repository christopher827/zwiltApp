import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import './index.css';
import Home from './Pages/Home';


function App() {
return(
  <>
<GlobalStyles/>
<ThemeProvider theme={light}>
  <Routes>
  <Route path='/' element={<Home/>}/>
  </Routes>
</ThemeProvider>
  </>
) 
}
export default App

