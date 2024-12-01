import { Filter } from "./filter";

export class Wordfilter extends Filter {
    constructor(word) {
        super();
        this._word = word;
    }

    filterData(data) {
        return data.filter((item) => {
            var l;
            if ('_data' in item) {
                l = item._data.filter((dataItem) => {
                    return dataItem._title.toLowerCase().includes(this._word.toLowerCase());
                })
            }
            return (item._title.toLowerCase().includes(this._word.toLowerCase()) || (l != null && l.length > 0));
        });
    }

    print(){
        return this._word;
    }
}