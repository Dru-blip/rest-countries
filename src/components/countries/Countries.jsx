import React,{useEffect,useState} from 'react';
import Country from './Country';

const Countries=()=>{
  const [countries,setCountries]=useState([]);
  const [loading,setLoading]=useState(true);
  const get_data=async ()=>{
    let res=await fetch("https://restcountries.com/v3.1/all");
    let data=await res.json();
    return data;
  };
  useEffect(()=>{
   get_data().then((res)=>{
      setCountries(res);
      setLoading(false);
   });
    
  }, [setCountries]);
  console.log(countries);
  let list=countries.map((country,idx)=>{
    return (
      <Country country={country} key={idx}/>
    );
  });
 
  return (

    loading?"loading":
    <div>
<div className='countries'>
       {list}
    </div>
    </div>
    
    // <h1>Hello</h1>
  );
};

export default Countries;