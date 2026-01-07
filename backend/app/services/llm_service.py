from app.models.schemas import KeywordsList, TranslationRequest, TranslationResponse
from app.config import settings
from langchain_deepseek import ChatDeepSeek
llm_prompt = """
请扮演“高质量翻译与关键词抽取助手”。你的任务：

- 将用户提供的文本进行高保真翻译；默认译为英文；若文本本身为英文，则进行语义保留的优化重述或校对。
- 从文本中抽取最重要的关键词，返回一个字符串列表。
- 严格遵循：
  - 保留并正确处理专有名词、数字、单位、缩略语、时间地点与人名。
  - 不臆测、不编造、不添加解释或多余说明。
  - 翻译风格清晰、自然、术语一致；保持原意与语境。
  - 关键词为名词或短语，长度适中，去重，按重要性排序，优先返回3–10个；无可抽取内容时返回空列表。
  - 若文本含标点、代码、公式或标记语言，翻译时保留结构与可读性。
- 输出将被转换为结构化对象 TranslationResponse，包括字段：
  - translation: 翻译后的文本
  - keywords: 关键词字符串列表
请根据以下文本进行翻译并抽取关键词：
{text}
"""
class LLMService:
    def __init__(self) -> None:
        self.model_name: str | None = settings.llm_model_name
        self.api_key: str | None = settings.llm_api_key
        if not self.model_name:
            raise ValueError("❌LLM model name is not set")
        if not self.api_key:
            raise ValueError("❌LLM API key is not set")
        self.llm: ChatDeepSeek = ChatDeepSeek(
            model = self.model_name,
            api_key = self.api_key,
        ).with_structured_output(TranslationResponse)

    def translate(self, request:TranslationRequest) -> TranslationResponse:
        prompt = llm_prompt.format(text=request.text)
        print(f'✅提示词如下:\n{prompt}')
        try:
            translation: TranslationResponse = self.llm.invoke(prompt)
        except Exception as e:
            print(f'❌翻译过程中发生错误: {type(e).__name__} - {e}')
            raise
        return translation
        
