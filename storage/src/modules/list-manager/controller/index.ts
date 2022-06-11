
export interface IHeader {
    title: string;
    name: string;
}

class ListController {

    headers: Array<IHeader> = [
        {
            name: 'name',
            title: 'Name'
        },
        {
            name: 'distance',
            title: 'Distance'
        },
        {
            name: 'quantity',
            title: 'Quantity'
        },
        {
            name: 'date',
            title: 'Date'
        },
    ]

}

export default new ListController();
