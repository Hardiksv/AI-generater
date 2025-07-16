# from flask import Blueprint, request, jsonify
# from werkzeug.security import generate_password_hash, check_password_hash
# import json
# import os

# auth = Blueprint('auth', __name__)
# USERS_FILE = 'users.json'

# def load_users():
#     if os.path.exists(USERS_FILE):
#         with open(USERS_FILE, 'r') as f:
#             return json.load(f)
#     return {}

# def save_users(users):
#     with open(USERS_FILE, 'w') as f:
#         json.dump(users, f)

# @auth.route('/api/signup', methods=['POST'])
# def signup():
#     data = request.json
#     users = load_users()

#     if data['username'] in users:
#         return jsonify({'message': 'Username already exists'}), 400

#     users[data['username']] = {
#         'email': data['email'],
#         'password': generate_password_hash(data['password'])
#     }
#     save_users(users)
#     return jsonify({'message': 'User registered successfully'}), 200

# @auth.route('/api/login', methods=['POST'])
# def login():
#     data = request.json
#     users = load_users()

#     user = users.get(data['username'])
#     if not user or not check_password_hash(user['password'], data['password']):
#         return jsonify({'message': 'Invalid credentials'}), 401

#     return jsonify({'message': 'Login successful'}), 200
