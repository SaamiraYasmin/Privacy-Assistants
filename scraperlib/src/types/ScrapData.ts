import {ScrapDataType} from "./ScrapDataType";

import {ScrapDataBase} from "../components";
import React from "react";

class ScrapData{
    static idGen:number = 0;

    _id: number;
    _title: string;
    _type: ScrapDataType;
    _datetime: Date;
    _description: string;
    _probability: number | null;
    protected _DOMElement: Node;

    constructor(title: string, type: ScrapDataType, datetime: Date, description: string, element: HTMLElement){
        this._id = ScrapData.idGen;
        ScrapData.idGen++;
        this._title = title;
        this._datetime = datetime;
        this._description = description;
        this._type = type;
        this._DOMElement = element;
        this._probability = null;
    }

    runModel(model: any): void {
        if (model == null) return;
        // TODO: implement, this is just a placeholder
        this._probability = Math.random();
    }

    render(): React.ReactNode{
        return React.createElement(
            ScrapDataBase, 
            {item: this}
        );
    }

}

export {ScrapData};