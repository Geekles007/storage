import {useCallback, useEffect, useReducer, useRef} from "react";
import {ActionType} from "../models/ActionType";
import {IResult} from "../models/IResult";

const useFetch = <T>(url: string) => {
    const cache: any = useRef({});
    const initialState: {
        data: IResult<T> | undefined;
        status: string;
        error: string | null;
    } = {
        status: 'fetching',
        error: null,
        data: undefined,
    };
    let cancelRequest = false;

    const [state, dispatch] = useReducer((state: any, action: ActionType) => {
        switch (action.type) {
            case 'LOADING':
                return { ...initialState, status: 'fetching' };
            case 'FETCHED':
                return { ...initialState, status: 'fetched', data: action.payload };
            case 'FETCH_ERROR':
                return { ...initialState, status: 'error', error: action.payload };
            default:
                return state;
        }
    }, initialState);

    const fetchList = useCallback(() => {
        const fetchData = async () => {
            dispatch({ type: 'LOADING' });
            if (cache?.current[url]) {
                const data = cache?.current[url];
                dispatch({ type: 'FETCHED', payload: data });
            } else {
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    cache.current[url] = data;
                    dispatch({ type: 'FETCHED', payload: data });
                    if (cancelRequest) return;
                } catch (error) {
                    dispatch({ type: 'FETCH_ERROR', payload: error });
                    if (cancelRequest) return;
                }
            }
        };

        fetchData();
    }, [url])

    useEffect(() => {
        if (!url) return;

        fetchList();

        return function cleanup() {
            cancelRequest = true;
        };
    }, [fetchList]);

    return {
        ...state,
        refetch: fetchList
    };
};

export default useFetch;
