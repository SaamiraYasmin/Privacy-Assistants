import { ModelAPI } from "./modelAPI";
import { xgboostWASM, loadXGBoost, XGBoost } from 'ml-xgboost';

export class XGBoostModelAPI implements ModelAPI{
    private model: XGBoost | null;

    constructor() {
        this.model = null;
        this.loadModel();
    }

    loadModel(): void {
        fetch(chrome.runtime.getURL('model.json'))
            .then(r => r.arrayBuffer())
            .then((t) => {
                xgboostWASM.isReady.then((l) => loadXGBoost(l)).then((XGBoost => {
                    console.log(t);
                    this.model = XGBoost.loadFromBuffer(t, {});
                    console.log(this.model);
                }))
            })
    }

    predict(): void {}
    
}