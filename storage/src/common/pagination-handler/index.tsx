import React, {memo, useEffect} from "react";
import styled from "styled-components";
import {FilterOption} from "../../models/FilterOption";
import {IResult} from "../../models/IResult";
import {IProduct} from "../../models/IProduct";

const PaginationHandlerWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .paginate {
    display: flex;
    gap: 10px;
  }
`;

interface PaginationHandlerProps {
    data: IResult<IProduct>;
    filter: FilterOption;
    setFilter: React.Dispatch<React.SetStateAction<FilterOption>>;
}

const buildButtons = (count: number, handler: (name: string, current: number) => any) => {
    const buttons = [];
    for (let i = 0; i < count; i++) {
        buttons.push(<button key={i} onClick={() => handler("page", i + 1)}>{i + 1}</button>);
    }
    return buttons;
}

const PaginationHandler = ({setFilter, data, filter}: PaginationHandlerProps) => {

    const handlePageChange = (name: string, current: number) => {
        setFilter(old => ({...old, [name]: current}));
    }

    return <PaginationHandlerWrapper>
        <div className="paginate">
            {buildButtons(data?.pageCount, handlePageChange)}
        </div>
        <select name="size" id="selector" onChange={(e) => handlePageChange("size", parseInt(e.target.value) ?? 5)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
        </select>
    </PaginationHandlerWrapper>

}

export default memo(PaginationHandler);
