from flask import Flask, request, jsonify
from flask_cors import CORS
from routes.caption import generate_caption
from routes.headline import generate_headline
from routes.description import generate_description

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Flask backend is running!"

@app.route("/api/caption", methods=["POST"])
def caption_route():
    data = request.get_json()
    prompt = data.get("prompt", "")

    if not prompt:
        return jsonify({"caption": "Prompt is missing"}), 400

    caption = generate_caption(prompt)
    return jsonify({"caption": caption})

@app.route("/api/headline", methods=["POST"])
def headline_route():
    data = request.get_json()
    prompt = data.get("prompt", "")
    if not prompt:
        return jsonify({"headline": "Prompt is missing"}), 400

    headline = generate_headline(prompt)
    return jsonify({"headline": headline})

@app.route("/api/description", methods=["POST"])
def description_route():
    data = request.get_json()
    prompt = data.get("prompt", "")
    if not prompt:
        return jsonify({"headline": "Prompt is missing"}), 400

    description = generate_description(prompt)
    return jsonify({"description": description})

if __name__ == "__main__":
    app.run(debug=True)
