from pydantic import BaseModel

class Setting(BaseModel):
    model: str = 'XGBoost'