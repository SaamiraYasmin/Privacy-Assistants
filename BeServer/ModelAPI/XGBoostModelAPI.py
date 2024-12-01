from .ModelAPI import ModelAPI

class XGBoostModelAPI(ModelAPI):
    def train_base(self, user):
        return user
    
    def learn_feedback(self, model, feedbacks):
        return feedbacks