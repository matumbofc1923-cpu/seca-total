
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCarnivalTip = async (goal: string, weight: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Dê uma dica curta e motivadora (máximo 200 caracteres) de emagrecimento para o Carnaval baseada no objetivo: ${goal} e peso atual: ${weight}kg. Foco em Jejum Intermitente. Use um tom encorajador e profissional.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text || "Beba bastante água e foque na sua janela de alimentação!";
  } catch (error) {
    console.error("Error fetching Gemini tip:", error);
    return "A constância é a sua melhor amiga. Comece seu jejum hoje mesmo!";
  }
};

export const chatWithAssistant = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [...history, { role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: `Você é a "Luma", a assistente virtual especialista do método "Seca Total Até o Carnaval". 
        Seu objetivo é tirar dúvidas sobre o método, explicar o jejum intermitente de forma simples e segura, motivar o usuário e sugerir que ele adquira o método completo para ter o passo a passo.
        
        DIRETRIZES IMPORTANTES:
        1. Nunca dê conselhos médicos, prescrições ou diagnósticos. Se perguntarem algo muito específico de saúde, sugira consultar um médico.
        2. Seja motivadora, alegre (clima de carnaval), humana e direta.
        3. Explique que o Jejum Intermitente é uma estratégia de janelas de alimentação, não passar fome.
        4. Sempre que possível, reforce que no método completo (Seca Total) ela terá o cardápio e os horários exatos para não errar.
        5. Use emojis relacionados a carnaval e saúde (💃, 🔥, ⚡, 🥗).
        6. Respostas curtas e escaneáveis.`,
        temperature: 0.8,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Assistant Error:", error);
    return "Desculpe, estou com um pouco de instabilidade na minha conexão de folia! Mas não desista: o método Seca Total é o que você precisa para brilhar no Carnaval. 💃";
  }
};
