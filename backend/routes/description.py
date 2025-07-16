import requests
import os
from dotenv import load_dotenv

load_dotenv()

def generate_description(prompt):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {os.getenv('GROQ_API_KEY')}"
    }

    body = {
        "model": "meta-llama/llama-4-scout-17b-16e-instruct",
        "messages": [
            {
                "role": "user",
                "content": f"Write a short, informative, and persuasive product description for: {prompt}. Highlight the top features and why someone should buy it, in 3–4 sentences max."
            }
        ],
        "temperature": 0.7,
        "max_tokens": 800
    }

    try:
        response = requests.post("https://api.groq.com/openai/v1/chat/completions", json=body, headers=headers)
        result = response.json()
        content = result["choices"][0]["message"]["content"]
        return content.strip()
    except Exception as e:
        return f"❌ Error: {str(e)}"
