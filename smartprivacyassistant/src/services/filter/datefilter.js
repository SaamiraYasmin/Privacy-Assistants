import { Filter } from "./filter";

export class Datefilter extends Filter{
    constructor(startDate, endDate){
        super();
        this._startDate = startDate;
        this._endDate = endDate;
    }

    filterData(data){
        return data.filter((item) => {
            return item._datetime >= this._startDate && item._datetime <= this._endDate;
        });
    }

    print(){
        return "Date Filter";
    }
}