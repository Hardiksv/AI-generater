import os
import requests
from dotenv import load_dotenv
from utils.openai_client import groq_chat
load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

def generate_headline(prompt):
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {GROQ_API_KEY}"
    }

    payload = {
        "model": "meta-llama/llama-4-scout-17b-16e-instruct",
        "messages": [
            {"role": "user", "content": f"Write a catchy ad headline for: {prompt}"}
        ],
        "temperature": 0.7
    }

    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        data = response.json()
        headlines = data['choices'][0]['message']['content'].strip()
        headline_list = headlines.split("\n")
        return headline_list
    except Exception as e:
        return f"Error: {str(e)}"
