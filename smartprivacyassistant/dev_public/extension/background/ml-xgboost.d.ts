// import Matrix from 'ml-matrix';
// declare module mlXgboost{
//     export function loadXGBoost(xgboost: XGBoostWASM): XGBoost;

//     export interface xgboostWASM{
//         isReady: Promise<XGBoostWASM>;
//     }

//     export interface XGBoost{
//         train(trainingSet: Matrix | Array<Array<number>>, trainingValues: Array<number>): void;
//         predict(toPredict: Matrix | Array<Array<number>>): Array<number>;
//         toJSON(): object;
//         load(model: object): XGBoost;
//         loadFromModel(filepath: string, options: object): XGBoost;
//         loadFromBuffer(buffer: ArrayBuffer, options: object): XGBoost;
//         free(): void;
//     }

//     export interface XGBoostWASM{}
// }
// export = mlXgboost;
declare module 'ml-xgboost' {
    export function loadXGBoost(xgboost: XGBoostWASM): XGBoost;

    export class xgboostWASM {
        static isReady: Promise<XGBoostWASM>;
    }

    export interface XGBoost {
        // train(trainingSet: Matrix | Array<Array<number>>, trainingValues: Array<number>): void;
        // predict(toPredict: Matrix | Array<Array<number>>): Array<number>;
        toJSON(): object;
        load(model: object): XGBoost;
        loadFromModel(filepath: string, options: object|null): XGBoost;
        loadFromBuffer(buffer: ArrayBuffer, options: object|null): XGBoost;
        free(): void;
    }

    export interface XGBoostWASM { }
}