import { GoogleGenAI, Type } from '@google/genai';
import type { DashboardData } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const dashboardDataSchema = {
  type: Type.OBJECT,
  properties: {
    news: {
      type: Type.ARRAY,
      description: 'A list of 3 recent rock music news articles.',
      items: {
        type: Type.OBJECT,
        properties: {
          headline: { type: Type.STRING },
          summary: { type: Type.STRING },
        },
        required: ['headline', 'summary'],
      },
    },
    weather: {
      type: Type.OBJECT,
      description: 'Current weather for Russell Springs, Kentucky.',
      properties: {
        location: { type: Type.STRING, description: 'Should be "Russell Springs, KY"' },
        temperature: { type: Type.INTEGER, description: 'Temperature in Fahrenheit' },
        condition: { type: Type.STRING, description: 'e.g., "Sunny", "Cloudy"' },
        icon: { type: Type.STRING, enum: ['SUN', 'CLOUD', 'RAIN'] },
      },
      required: ['location', 'temperature', 'condition', 'icon'],
    },
  },
  required: ['news', 'weather'],
};

export const fetchDashboardData = async (): Promise<DashboardData> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate a dashboard of content for a rock radio station website called '103.1 Pure Rock FM'. The content should be engaging, rock-themed, and suitable for a general audience. The location focus is Russell Springs, Kentucky. Provide rock music news and the current weather.`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: dashboardDataSchema,
      },
    });

    const jsonText = response.text.trim();
    const data = JSON.parse(jsonText);
    return data as DashboardData;
  } catch (error) {
    console.error('Error fetching dashboard data from Gemini:', error);
    throw new Error('Failed to generate station data.');
  }
};

export const generateShoutOutResponse = async (userName: string, message: string): Promise<string> => {
   try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a charismatic rock radio DJ for '103.1 Pure Rock FM'. A listener named ${userName} just sent this message: "${message}". Write a short, energetic, and positive on-air style response to them. Keep it under 50 words.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    
    return response.text;
  } catch (error) {
    console.error('Error generating shout-out from Gemini:', error);
    return "Rock on! We got your message. Keep it locked to 103.1 Pure Rock FM!";
  }
};