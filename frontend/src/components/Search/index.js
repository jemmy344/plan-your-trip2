import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import './search.css'
import { Dna } from 'react-loader-spinner'
import { useSearchLocationMutation } from "../../service/locationService";
import { SearchResults } from './SearchResults'
export const Search = () => {
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");


  const [searchLocation, { isLoading: isSearchLoading, isError: isSearchError }] = useSearchLocationMutation();

  const handleChange = () => {
    // Perform search action here with location, type, minPrice and maxPrice
    searchLocation(location).unwrap().then((data) => {
      console.log(data);
    })
  };

  return (
    <div>
      <div className="search-container">
        <div class="card-search">
          <form>
            <div class="row">
              <div class="col-md-3 form-group">
                <label for="location">Location</label>
                <input
                  type="text"
                  id="location"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  class="form-control"
                />
              </div>

              <div class="col-md-3 form-group">
                <label for="min-price">Min Price</label>
                <input
                  type="number"
                  id="min-price"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  class="form-control"
                />
              </div>
              <div class="col-md-3 form-group">
                <label for="max-price">Max Price</label>
                <input
                  type="number"
                  id="max-price"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  class="form-control"
                />
              </div>
              <div class="col-md-3">
                {
                  isSearchLoading ? (
                    <Dna
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="dna-loading"
                      wrapperStyle={{}}
                      wrapperClass="dna-wrapper"
                    />
                  ) : (
                    <button className="search-button" type="submit" onClick={handleChange} >Search</button>
                  )
                }


              </div>
            </div>
          </form>
        </div>
      </div>
      <div style={{
        margin:'30px'
      }}>
        <SearchResults />
      </div>
    </div>
  );
};

export default Search;




















