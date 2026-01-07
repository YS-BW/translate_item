from fastapi import APIRouter
from app.models.schemas import TranslationRequest, TranslationResponse, KeywordsList
from app.services.llm_service import LLMService

router: APIRouter = APIRouter(tags=["translate"])
_service: LLMService = LLMService()


@router.post("/translate", response_model=TranslationResponse)
def translate(payload: TranslationRequest) -> TranslationResponse:
    try:
        response: TranslationResponse = _service.translate(payload)
        print(f'✅翻译结果如下:\n{response}')
        return response
    except Exception as e:
        print(f'❌翻译过程中发生错误: {type(e).__name__} - {e}')
        raise e
