from flask import Flask, render_template, jsonify
import requests
from config import NASA_API_KEY, NASA_APOD_URL

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/apod")
def apod():
    params = {
        "api_key": NASA_API_KEY
    }
    response = requests.get(NASA_APOD_URL, params=params)
    data = response.json()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
