import os
import requests
from dotenv import load_dotenv
from utils.openai_client import groq_chat
load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

def generate_caption(prompt):
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {GROQ_API_KEY}"
    }

    payload = {
        "model": "meta-llama/llama-4-scout-17b-16e-instruct",
        "messages": [
            {"role": "user", "content": f"Write a short, creative Instagram caption for: {prompt}"}
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

# from utils.openai_client import groq_chat

# def generate_caption(prompt):
#     system_prompt = "You are a helpful assistant that writes trendy and engaging Instagram captions for marketing."
#     return groq_chat(system_prompt, prompt)

