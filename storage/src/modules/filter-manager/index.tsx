import React, {memo, useCallback, useEffect} from "react";
import styled from "styled-components";
import {FilterOption} from "../../models/FilterOption";
import {debounce} from "lodash";

const FilterManagerWrapper = styled.form`
  width: 300px;
`;

interface FilterManagerProps {
    setFilter:  React.Dispatch<React.SetStateAction<FilterOption>>;
}

const FilterManager = ({setFilter}: FilterManagerProps) => {

    const changeFilter = useCallback(debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFilter(old => ({...old, [name]: value}));
    }, 300), [setFilter])

    return <FilterManagerWrapper>
        <div className="input-group">
            <label htmlFor="filter-name">Filter by name</label>
            <input type="text" name={"name"} onChange={changeFilter} className="form-control" placeholder="Search" aria-label="Search" />
        </div>
        <div className="input-group">
            <label htmlFor="filter-quantity">Filter by quantity</label>
            <div className="inputs">
                <input type="number" onChange={changeFilter} name={"qMin"} className="form-control" placeholder="Min" aria-label="Min" />
                <input type="number" onChange={changeFilter} name={"qMax"} className="form-control" placeholder="Max" aria-label="Max" />
            </div>
        </div>
        <div className="input-group">
            <label htmlFor="filter-distance">Filter by distance</label>
            <div className="inputs">
                <input type="number" onChange={changeFilter} name={"dMin"} className="form-control" placeholder="Min" aria-label="Min" />
                <input type="number" onChange={changeFilter} name={"dMax"} className="form-control" placeholder="Max" aria-label="Max" />
            </div>
        </div>
        <div className="input-group">
            <label htmlFor="filter-date">Filter by date</label>
            <input type="date" onChange={changeFilter} name={"date"} className="form-control" placeholder="Search" aria-label="Search" />
        </div>
    </FilterManagerWrapper>

}

export default memo(FilterManager);

