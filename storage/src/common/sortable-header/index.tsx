import React, {memo} from "react";
import styled from "styled-components";
import arrow from "../../assets/images/arrow.png";
import {FilterOption} from "../../models/FilterOption";

const SortableHeaderWrapper = styled.a`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  img {
    height: 10px;
    margin-right: 1em;
    transition: .5s;
  }
  
  .asc {
    transform: rotate(180deg);
  }
`;

interface SortableHeaderProps {
    children: React.ReactNode | string;
    name: string;
    setFilter:  React.Dispatch<React.SetStateAction<FilterOption>>;
}

const SortableHeader = ({children, setFilter, name}: SortableHeaderProps) => {
    const [isAscending, setIsAscending] = React.useState(true);

    const handleClick = () => {
        setIsAscending(!isAscending);
        setFilter(old => ({...old, orderBy: name, order: isAscending ? "asc" : "desc"}));
    }

    return <SortableHeaderWrapper className={"list-header-item"} onClick={handleClick}>
        {children} <img src={arrow} alt="arrow" className={isAscending ? "asc" : ""} />
    </SortableHeaderWrapper>

}

export default memo(SortableHeader);
