import { ReactNode } from "react";
import { ScrapData } from "./ScrapData";
import { ScrapDataType } from "./ScrapDataType";

import React from 'react';
import { MixedScrapDataBase } from "../components";
import { Type } from 'class-transformer';

class MixedScrapData extends ScrapData {
    // @Type(() => ScrapData)
    _data: ScrapData[];

    constructor(title: string, description: string, datetime: Date, element: HTMLElement, data?: ScrapData[]) {
        super(title, ScrapDataType.Mixed, datetime, description, element);
        this._data = data ?? [];
    }

    push(data: ScrapData): void {
        if (data._type == ScrapDataType.Mixed) this.pushArr((data as MixedScrapData)._data);
        else this._data.push(data);
    }

    pushArr(data: ScrapData[]): void{
        data.forEach((element) => {
            this._data.push(element);
        });
    }

    forEach(callbackfn: (value: ScrapData, index: number, array: ScrapData[]) => void): void {
        this._data.forEach(callbackfn);
    }

    pop(): ScrapData | undefined {
        return this._data.pop();
    }

    runModel(model: any): void {
        // this._data.forEach((element) => {
        //     element.runModel(model);
        // });

        // this._probability = 0;

        // this._data.forEach((element) => {
        //     if (element._probability != null && this._probability != null && element._probability > this._probability) this._probability = element._probability;
        // });

        // TODO: implement, this is just a placeholder
        this._probability = Math.floor(Math.random()*100)/100;
        // console.log(this._probability);

    }

    render(): React.ReactNode {
        return React.createElement(
            MixedScrapDataBase,
            {item: this}
        );
    }
}

export { MixedScrapData };