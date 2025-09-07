
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateScript = async (prompt: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Key not configured. Please set the API_KEY environment variable.";
  }
  try {
    const fullPrompt = `You are an expert scriptwriter for AI voice agents. 
    Create a professional, natural-sounding, and effective cold calling script based on the following request.
    The script should have clear sections for an introduction, qualification questions, handling objections (e.g., "not interested", "send me an email"), and a closing with a clear call to action (e.g., booking a meeting). 
    Use placeholders like [Prospect Name] and [Your Company Name]. Format the script clearly.
    
    Request: "${prompt}"`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: fullPrompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating script:", error);
    return "Failed to generate script. Please check the console for details.";
  }
};
