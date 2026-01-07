import os
from dataclasses import dataclass
from dotenv import load_dotenv

load_dotenv()


@dataclass(frozen=True)
class Settings:
    llm_model_name: str | None = os.getenv("LLM_MODEL_NAME")
    llm_api_key: str | None = os.getenv("LLM_API_KEY")


settings: Settings = Settings()

