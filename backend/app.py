from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/api/ping')
def site_announcement():
    return jsonify('Pong!'), 200
