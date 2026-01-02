
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || 'FAKE_API_KEY_FOR_DEVELOPMENT' });

export const getCarnivalTip = async (goal: string, weight: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `DÃª uma dica curta e motivadora (mÃ¡ximo 200 caracteres) de emagrecimento para o Carnaval baseada no objetivo: ${goal} e peso atual: ${weight}kg. Foco em Jejum Intermitente. Use um tom encorajador e profissional.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text || "Beba bastante Ã¡gua e foque na sua janela de alimentaÃ§Ã£o!";
  } catch (error) {
    console.error("Error fetching Gemini tip:", error);
    return "A constÃ¢ncia Ã© a sua melhor amiga. Comece seu jejum hoje mesmo!";
  }
};

export const chatWithAssistant = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [...history, { role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: `VocÃª Ã© a "Luma", a assistente virtual especialista do mÃ©todo "Seca Total AtÃ© o Carnaval". 
        Seu objetivo Ã© tirar dÃºvidas sobre o mÃ©todo, explicar o jejum intermitente de forma simples e segura, motivar o usuÃ¡rio e sugerir que ele adquira o mÃ©todo completo para ter o passo a passo.
        
        DIRETRIZES IMPORTANTES:
        1. Nunca dÃª conselhos mÃ©dicos, prescriÃ§Ãµes ou diagnÃ³sticos. Se perguntarem algo muito especÃ­fico de saÃºde, sugira consultar um mÃ©dico.
        2. Seja motivadora, alegre (clima de carnaval), humana e direta.
        3. Explique que o Jejum Intermitente Ã© uma estratÃ©gia de janelas de alimentaÃ§Ã£o, nÃ£o passar fome.
        4. Sempre que possÃ­vel, reforce que no mÃ©todo completo (Seca Total) ela terÃ¡ o cardÃ¡pio e os horÃ¡rios exatos para nÃ£o errar.
        5. Use emojis relacionados a carnaval e saÃºde (ð, ð¥, â¡, ð¥).
        6. Respostas curtas e escaneÃ¡veis.`,
        temperature: 0.8,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Assistant Error:", error);
    return "Desculpe, estou com um pouco de instabilidade na minha conexÃ£o de folia! Mas nÃ£o desista: o mÃ©todo Seca Total Ã© o que vocÃª precisa para brilhar no Carnaval. ð";
  }
};
