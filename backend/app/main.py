from fastapi import FastAPI

app = FastAPI(title="Robotics AI Book Backend", version="1.0.0")

@app.get("/")
async def root():
    return {"message": "Welcome to the Physical AI & Humanoid Robotics API"}
