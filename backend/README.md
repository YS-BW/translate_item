# FastAPI 翻译后端

## 项目结构
backend/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── models/
│   │   ├── __init__.py
│   │   └── schemas.py
│   ├── routes/
│   │   ├── __init__.py
│   │   └── translate.py
│   ├── services/
│   │   ├── __init__.py
│   │   └── llm_service.py
│   └── config.py
├── .gitignore
├── requirements.txt
└── README.md

## 安装与运行
1. 切换到 backend 目录
2. 安装依赖：`pip install -r requirements.txt`
3. 启动服务：`uvicorn app.main:app --reload`
4. 健康检查：GET http://127.0.0.1:8000/health
5. 翻译接口：POST http://127.0.0.1:8000/translate

### 请求示例
```json
{
  "text": "Hello world"
}
```

### 响应示例
```json
{
  "translation": "Hello world",
  "keywords": ["Hello", "world"]
}
```

## 配置
在 `.env` 中设置：
- `LLM_API_ENDPOINT`
- `LLM_API_KEY`

当前版本仅为框架骨架，后续将集成真实大模型与LangChain。

