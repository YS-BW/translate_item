from pydantic import BaseModel


class TranslationRequest(BaseModel):
    text: str


class KeywordsList(BaseModel):
    keywords: list[str]


class TranslationResponse(BaseModel):
    translation: str
    keywords: KeywordsList

