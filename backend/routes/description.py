import os
import requests
from dotenv import load_dotenv
from utils.openai_client import groq_chat
load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

def generate_description(prompt):
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {GROQ_API_KEY}"
    }

    payload = {
        "model": "meta-llama/llama-4-scout-17b-16e-instruct",
        "messages": [
            {"role": "user", "content": f"Write a brief, compelling, and informative product description for the following item. Highlight its key features and main benefits in a clear and concise manner: {prompt}"}
        ],
        "temperature": 0.7
    }


    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        data = response.json()
        return data['choices'][0]['message']['content'].strip()
    except Exception as e:
        return f"Error: {str(e)}"
