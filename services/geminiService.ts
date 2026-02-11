
import { GoogleGenAI, Type } from "@google/genai";
import { HeroContent } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const fetchHeroContent = async (theme: string = "cutting-edge technology"): Promise<HeroContent> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a catchy hero headline and subheadline for a website with the theme: ${theme}. 
                 The headline should be short (max 6 words), and the subheadline should be inspiring (max 15 words).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING },
            subheadline: { type: Type.STRING },
          },
          required: ["headline", "subheadline"],
        },
      },
    });

    const result = JSON.parse(response.text || '{}');
    return {
      headline: result.headline || "Experience Digital Gravity",
      subheadline: result.subheadline || "A new dimension of interactive storytelling and immersive design."
    };
  } catch (error) {
    console.error("Error fetching hero content:", error);
    return {
      headline: "Experience Digital Gravity",
      subheadline: "A new dimension of interactive storytelling and immersive design."
    };
  }
};
