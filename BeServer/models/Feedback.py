from pydantic import BaseModel
from typing import List, Optional

class Feedback(BaseModel):
    feature: List[float]
    feedback: bool