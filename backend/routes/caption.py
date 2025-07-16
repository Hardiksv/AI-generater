import requests
import os
from dotenv import load_dotenv

load_dotenv()

def generate_captions(prompt):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {os.getenv('GROQ_API_KEY')}"
    }

    # 👇 Custom prompt to generate clear, social-media-ready captions
    user_prompt = (
        f"Write exactly 5 short, creative, and engaging Instagram captions for: {prompt}. "
        "Make them attention-grabbing, fun, and suitable for marketing or branding. "
        "List them each on a new line. No numbering or bullet points."
    )

    body = {
        "model": "meta-llama/llama-4-scout-17b-16e-instruct",
        "messages": [{"role": "user", "content": user_prompt}]
    }

    try:
        response = requests.post("https://api.groq.com/openai/v1/chat/completions", json=body, headers=headers)
        result = response.json()
        content = result["choices"][0]["message"]["content"].strip()

        # ✅ Split captions by line
        captions = [line.strip("-•* ").strip() for line in content.split("\n") if line.strip()]
        return captions[:5] if captions else ["❌ No captions generated."]
    except Exception as e:
        return [f"❌ Error: {str(e)}"]
