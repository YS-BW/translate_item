export interface TranslationRequest {
  text: string
}

export interface KeywordsList {
  keywords: string[]
}

export interface TranslationResponse {
  translation: string
  keywords: KeywordsList
}

export const translateText = async (text: string): Promise<TranslationResponse> => {
  const response = await fetch('/api/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  })

  if (!response.ok) {
    throw new Error('Translation failed')
  }

  return response.json()
}
