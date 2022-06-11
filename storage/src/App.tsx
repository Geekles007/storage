import React from 'react';
import './App.css';
import FilterManager from "./modules/filter-manager";
import ListManager from "./modules/list-manager";
import {FilterOption} from "./models/FilterOption";

function App() {
    const [filter, setFilter] = React.useState<FilterOption>({});

    return (
        <div className="App">
            <h1>Storage</h1>
            <div className="container">
                <FilterManager setFilter={setFilter} />
                <ListManager filter={filter} setFilter={setFilter}/>
            </div>
        </div>
    );
}

export default App;
