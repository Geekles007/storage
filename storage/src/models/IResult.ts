export interface IResult<T> {
    page: number;
    pageCount: number;
    size: number;
    data: Array<T>;
}
