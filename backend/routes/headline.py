import os
import requests
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

def generate_headline(prompt):
    if not GROQ_API_KEY:
        return ["❌ Error: GROQ_API_KEY not found. Check your .env file."]

    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {GROQ_API_KEY}"
    }

    user_prompt = (
        f"Generate exactly 5 short, catchy advertising headlines for: {prompt}. "
        "Each headline should be on its own line, no bullets or numbering."
    )

    payload = {
        "model": "meta-llama/llama-4-scout-17b-16e-instruct",  # ✅ valid model
        "messages": [{"role": "user", "content": user_prompt}],
        "temperature": 0.7,
        "max_tokens": 300
    }

    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        data = response.json()

        raw_output = data["choices"][0]["message"]["content"].strip()
        # Clean and return lines
        headlines = [line.strip("-•* ").strip() for line in raw_output.split("\n") if line.strip()]
        return headlines[:3] if headlines else ["❌ No headlines generated."]
    except Exception as e:
        return [f"❌ Error: {str(e)}"]
