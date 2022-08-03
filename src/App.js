import './App.css';
import Countries from './components/countries/Countries';
import {Routes,Route}from 'react-router-dom';
import {AppBar, Toolbar,Typography,Button} from '@mui/material';
import Detail from './components/countries/Detail';


function App() {
  return (
    <div className="App">
      <AppBar sx={{bgcolor:'primary.dark'}}>
        <Toolbar>
           <Typography>Where In The World?</Typography>
        </Toolbar>
      </AppBar>
      <div style={{minHeight:'70px'}}></div>
      <Routes>
        <Route path='/' element={<Countries/>}/>
        <Route path="/country/:id" element={<Detail/>}/>
      </Routes>
       
    </div>
  );
}

export default App;
