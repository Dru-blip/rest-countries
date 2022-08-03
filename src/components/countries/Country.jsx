import { Button,Card,CardActions,CardMedia,CardContent } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';


 const Country=({country})=>{
  let navigate=useNavigate();
  const to=()=>{
    navigate(`/country/${country.cca2}`);
  };
  return (
    <Card  variant="outlined" sx={{bgcolor:'primary.dark',width:'320px'}} >
       <CardMedia image={country.flags.png} height="200" component="img" alt={country.name.common}/>
        <CardContent>
        <h4>
         {country.name.common} 
         </h4> 
         <p>Population : <span> {country.population}</span></p>
         <p>Region : <span> {country.region}</span></p>
         <p>Capital : <span>{country.capital}</span></p>
        </CardContent>
        <CardActions className='country-info'>

         <Button onClick={to} variant="contained" fullWidth>Read more</Button>
        </CardActions>
        
    </Card>
  )
}
export default Country;