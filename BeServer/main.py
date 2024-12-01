from fastapi import FastAPI
from models import *
from ModelAPI import *
from utils import *

from typing import List

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/init")
async def initialize(user: User, setting: Setting = default_setting):
    modelAPI = ModelAPI.getInstance(setting.model_dump())
    model = modelAPI.train_base(user.model_dump())
    return model

@app.post("/feedback")
async def feedback(user: User, model: Model, feedbacks: List[Feedback], setting: Setting = default_setting):
    modelAPI = ModelAPI.getInstance(setting.model_dump())
    model = modelAPI.learn_feedback(model.model_dump(), [feedback.model_dump() for feedback in feedbacks])
    return model

