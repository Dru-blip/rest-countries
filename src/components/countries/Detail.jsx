import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Button } from '@mui/material';


export default function Detail() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const get_country = async () => {
    let res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
    let data = await res.json();
    return data;
  };
  const go_back = () => {
    navigate(-1);
  };
  useEffect(() => {
    get_country().then((res) => {
      // console.log();
      setCountry(res[0]);
      setLoading(false);
    });
  }, [setCountry]);


  return (
    loading ? "loading" : <div className='country-details'>
      <Button onClick={go_back} sx={{width:'100px'}} disableElevation startIcon={<KeyboardBackspaceIcon/>} variant="contained">Back</Button>
      <div className="detail-container">
        <div className='img-cont'>
          <img src={country.flags.svg} alt={country.name.common} />
        </div>

        <div className="details">
          <h1 className='name'>{country.name.common}</h1>
          <div className='info'>
            <p>Region : {country.region}</p>
            <p>Population : {country.population}</p>
            <p>Sub Region : {country.subregion}</p>
            <p>Capital : {country.capital}</p>

            <div className='languages'>
              <span>Languages :</span>
              {
                Object.keys(country.languages).map((entry) => {
                  return (
                    <span className='lang-chip'>{country.languages[entry]}</span>
                  )
                })
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
