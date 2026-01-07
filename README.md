# 翻译系统：FastAPI + Vue 3

一个基于 FastAPI 的后端与 Vue 3（Vite + TypeScript）前端的现代化翻译系统，支持关键词提取与毛玻璃视觉风格。提供一键启动脚本自动安装依赖并启动前后端。

## 功能概览
- 中文文本输入与翻译
- 关键词提取并展示（支持嵌套结构）
- 极简毛玻璃（Glassmorphism）视觉效果
- 响应式设计与平滑动画

## 项目结构
- backend/ 后端（FastAPI）
  - app/main.py 应用入口
  - app/routes/translate.py 翻译接口
  - app/models/schemas.py Pydantic 模型
  - app/services/llm_service.py LLM 服务
  - app/config.py dotenv 配置
  - requirements.txt 依赖
- front/ 前端（Vue 3 + Vite + TS）
  - src/components/Translator/TranslatorForm.vue 翻译组件
  - src/services/api.ts 后端 API 封装
  - vite.config.ts 开发代理与构建配置

## 快速开始（一键脚本）
- Windows 下执行：
  - PowerShell 运行：`powershell -ExecutionPolicy Bypass -File .\start.ps1`
  - 脚本内容：自动创建/使用虚拟环境、安装后端依赖、安装前端依赖，并分别启动 uvicorn 与 Vite 开发服务器
  - 在执行脚本之前，先依据 [backend/.env.example](file:///d:/AGI/translate_item/backend/.env.example) 创建并填写 [backend/.env](file:///d:/AGI/translate_item/backend/.env) 所需变量

## 手动启动
- 后端
  - 进入 backend 目录
  - `pip install -r requirements.txt`
  - 启动：`uvicorn app.main:app --reload`
  - 健康检查：`GET http://127.0.0.1:8000/health`
  - 翻译接口：`POST http://127.0.0.1:8000/translate`
    - 请求体：`{ "text": "你好，世界" }`
    - 响应体：`{ "translation": "...", "keywords": { "keywords": ["..."] } }`
- 前端
  - 进入 front 目录
  - 使用包管理器安装依赖（支持 pnpm/yarn/npm）
  - 启动：`pnpm run dev` 或 `npm run dev`
  - 访问：`http://127.0.0.1:5173`

## 环境变量
- backend/.env
  - `LLM_MODEL_NAME` 模型名称
  - `LLM_API_KEY` 模型密钥
  - 如使用代理或第三方服务，可在此扩展配置
 - 可参考示例文件 [backend/.env.example](file:///d:/AGI/translate_item/backend/.env.example) 进行创建

## 技术栈
- 后端：FastAPI, Pydantic, Uvicorn, python-dotenv
- 前端：Vue 3, Vite, TypeScript, TailwindCSS
- 代码规范：ESLint + Prettier（前端）
- 测试：Vitest（前端）

## 说明
- 当前 LLM 服务包含占位或示例实现，可替换为真实的模型调用与 LangChain 集成
- 前端已适配后端响应中的嵌套 `keywords` 结构（`keywords.keywords`）

