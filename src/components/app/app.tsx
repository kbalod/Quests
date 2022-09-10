import { ThemeProvider } from 'styled-components';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from '../common/common';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import NotFound from '../not-found/not-found';


function App() : JSX.Element {

  return(
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Routes>
        <Route path="/quest/:id" element={<DetailedQuest/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/" element={<Home />}/>
        <Route path="/404" element={<NotFound/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  </ThemeProvider>
);
}
export default App;
