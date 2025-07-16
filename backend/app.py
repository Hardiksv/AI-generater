from flask import Flask, request, jsonify
from flask_cors import CORS
from routes.caption import generate_captions 
from routes.headline import generate_headline
from routes.description import generate_description

# Initialize Flask App
app = Flask(__name__)

# ✅ Enable CORS for frontend at localhost:3000
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# Root test route
@app.route("/")
def home():
    return "✅ Flask backend is running!"

# Caption Generation Route
@app.route("/api/caption", methods=["POST"])
def caption_route():
    data = request.get_json()
    prompt = data.get("prompt", "").strip()

    if not prompt:
        return jsonify({"error": "Prompt is missing"}), 400

    captions = generate_captions(prompt) 
    return jsonify({"captions": captions})

# Headline Generation Route
@app.route("/api/headline", methods=["POST"])
def headline_route():
    data = request.get_json()
    prompt = data.get("prompt", "").strip()

    if not prompt:
        return jsonify({"error": "Prompt is missing"}), 400

    headlines = generate_headline(prompt)
    return jsonify({"headlines": headlines})

# Product Description Route
@app.route("/api/description", methods=["POST"])
def description_route():
    data = request.get_json()
    prompt = data.get("prompt", "").strip()

    if not prompt:
        return jsonify({"error": "Prompt is missing"}), 400

    description = generate_description(prompt)
    return jsonify({"description": description})

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
