
class ModelAPI:
    def getInstance(setting):
        if setting['model'] == 'XGBoost':
            from .XGBoostModelAPI import XGBoostModelAPI
            return XGBoostModelAPI()

    def train_base(self, user):
        pass
    
    def learn_feedback(self, model, feedback):
        pass