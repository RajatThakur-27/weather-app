import React, { useContext, useState } from 'react'
import "../styles/components/Search.scss";
import { searchPlaces } from '../api';
import WeatherContext from '../context/weather.context';

function Search() {
  const {setPlace} = useContext(WeatherContext);
  const [text, setText] = useState('');
  const [searchResults, setSearchResults ] = useState([]);
  const [openSearch ,setOpenSearch] = useState(false);

  async function onSearch(e){
    setText(e.target.value);
    const data = await searchPlaces(e.target.value);
    setSearchResults(data);
    setOpenSearch(data.length);
  }

  const changePlace = (place) => {
    setPlace(place);
    setText("");
    setOpenSearch(false);
  };

  return <>
    <div className='search-container'>
      <div className='search-icon'>
        <i className='bi bi-search'></i>
      </div>
      <div className='search-input'>
        <input 
          type='text'
          name='search-city'
          placeholder='Search city...' 
          onChange={onSearch}
        />
      </div>
      {openSearch && (
        <div className='search-results'>
        <div className='results-container'>
          {
            searchResults.map((place) => (
              <div className='result' key={place.id} onClick={() => changePlace(place)}>
                {place.name}, {place.adm_area1}, {place.country}
              </div>
            ))
          }
        </div>
      </div>
      )}
    </div>
  </>
}

export default Search;
