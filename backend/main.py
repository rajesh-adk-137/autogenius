import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mindsdb_sdk
import logging

load_dotenv()

app = FastAPI()

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Connect to MindsDB server
try:
    con = mindsdb_sdk.connect('http://127.0.0.1:47334') #this is default address for mindsdb
    project = con.get_project('mindsdb')
except Exception as e:
    logger.error(f"Failed to connect to MindsDB: {e}")
    raise RuntimeError(f"Failed to connect to MindsDB: {e}")

# Existing CarPredictionRequest and CarPredictionResponse models...
# Define the request model
class CarPredictionRequest(BaseModel):
    fuel_type: str
    transmission: str
    clean_title: int
    mileage: float
    accident: int
    brand: str
    years_used: float

# Define the response model
class CarPredictionResponse(BaseModel):
    price: float

@app.post("/predict", response_model=CarPredictionResponse)
async def predict_car_price(request: CarPredictionRequest):
    try:
        query = f"""
        SELECT price
        FROM car_price_prediction
        WHERE years_used = {request.years_used}
        AND fuel_type = '{request.fuel_type}'
        AND transmission = '{request.transmission}'
        AND clean_title = '{request.clean_title}'
        AND accident = {request.accident}
        AND brand = '{request.brand}'
        AND mileage = {request.mileage};
        """
        
        logger.info(f"Executing query: {query}")
        result = project.query(query)
        rows = result.fetch()
        logger.info(f"Query result: {rows}")
        
        if rows.empty:
            raise HTTPException(status_code=404, detail="Prediction not found")
        
        predicted_price = rows.iloc[0]['price']
        
        return CarPredictionResponse(price=predicted_price)
    except Exception as e:
        logger.error(f"Prediction failed: {e}")
        raise HTTPException(status_code=500, detail=f"Prediction failed: {e}")

# New request model for AI tip
class AiTipRequest(BaseModel):
    fuel_type: str
    transmission: str
    color: str
    clean_title: str
    mileage: int
    accident: int
    brand: str
    years_used: int
    model: str
    trade_type: str

# New response model for AI tip
class AiTipResponse(BaseModel):
    tip: str

# Existing predict_car_price function...

@app.post("/ai_tip", response_model=AiTipResponse)
async def get_ai_tip(request: AiTipRequest):
    try:
        car_details = f"""
        Fuel Type: {request.fuel_type}
        Transmission: {request.transmission}
        Color: {request.color}
        Clean Title: {request.clean_title}
        Mileage: {request.mileage}
        Accident History(no of accidents): {request.accident}
        Brand: {request.brand}
        Years Used: {request.years_used}
        model:{request.model}
        trade_type(as in buying or selling):{request.trade_type}
        """
        
        query = f"""
        SELECT answer 
        FROM google_gemini_model 
        WHERE question = 'Give some helpful advice to someone looking to trade a car with the following details {car_details}. Speak like a friendly mechanic, be personable, and keep it to 5 or 6 sentences.reply without quote for response. Also be aware that user is filling these details because they are currently dealing with that particuluar car of mentioned detail. You can add emojis in the reply. Additionally,sometimes user may enter random  model for some brand and other parameters, handle those cases correctly asking them to fill it properly.';
        """

        
        logger.info(f"Executing query for AI tip: {query}")
        result = project.query(query)
        rows = result.fetch()
        logger.info(f"Query result for AI tip: {rows}")
        
        if rows.empty:
            raise HTTPException(status_code=404, detail="AI tip not generated")
        
        ai_tip = rows.iloc[0]['answer']
        
        return AiTipResponse(tip=ai_tip)
    except Exception as e:
        logger.error(f"AI tip generation failed: {e}")
        raise HTTPException(status_code=500, detail=f"AI tip generation failed: {e}")

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)