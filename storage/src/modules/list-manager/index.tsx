import React, {memo} from "react";
import styled from "styled-components";
import {FilterOption} from "../../models/FilterOption";
import {useFetch} from "../../hooks";
import {apiUrl} from "../../constants";
import {buildQueryString, formatDate} from "../../helpers";
import {IProduct} from "../../models/IProduct";
import PaginationHandler from "../../common/pagination-handler";
import SortableHeader from "../../common/sortable-header";
import ListController, {IHeader} from "./controller";

const ListManagerWrapper = styled.div`
  .list {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    margin-bottom: 1em;
    margin-top: 1em;
    padding-left: 1em;
    padding-right: 1em;
    
    .list-header, .list-body {
        display: flex;
    }

    .list-item-item {
      width: 150px;
      height: 50px;
    }
  }
`;

interface ListManagerProps {
    filter: FilterOption;
    setFilter:  React.Dispatch<React.SetStateAction<FilterOption>>;
}

const ListManager = ({filter, setFilter}: ListManagerProps) => {
    const {status, data, refetch} = useFetch<IProduct>(`${apiUrl}/products${buildQueryString(filter)}`);

    if (status === "fetching") {
        return <div>Loading...</div>
    }

    const list = data?.data ?? [];

    return <ListManagerWrapper>
        <button onClick={refetch}>Refresh</button>
        <div className="list">
            <div className="list-header">
                {
                    ListController.headers.map((item: IHeader, key) => {
                        return <SortableHeader key={key} name={item.name} setFilter={setFilter}>{item.title}</SortableHeader>
                    })
                }
            </div>
            {(list).map((item: IProduct, key: number) => (
                <div className="list-body" key={key}>
                    <div className="list-item-item">{item.name}</div>
                    <div className="list-item-item">{item.quantity}</div>
                    <div className="list-item-item">{item.distance}</div>
                    <div className="list-item-item">{formatDate(item.date)}</div>
                </div>     )
            )}
        </div>
        <PaginationHandler filter={filter} data={data} setFilter={setFilter} />
    </ListManagerWrapper>

}

export default memo(ListManager);
