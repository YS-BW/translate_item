from fastapi import FastAPI
from app.routes.translate import router as translate_router

app: FastAPI = FastAPI(title="Translate Backend", version="0.1.0")
app.include_router(translate_router)


@app.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}

