import React from 'react';
import { SearchCard } from './SearchCard';


export const SearchResults = ({ results }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* <div>
                <h2>Search Results</h2>
            </div> */}
            <div className="row">
                <div className="col-md-4">
                    <SearchCard />
                </div>
                <div className="col-md-4">
                    <SearchCard />
                </div>
                <div className="col-md-4">
                    <SearchCard />
                </div>
            </div>
        </div>
    )
}