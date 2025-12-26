NASA Astronomy Picture of the Day (APOD)

A simple web app that displays NASA's Astronomy Picture of the Day with its title, date, and explanation. Users can view today's APOD and download the image. The app also features a cute space-themed interface with floating stars.

Features

- Displays today's APOD from NASA
- Shows title, date, and description
- Download button for images
- Space-themed UI with dark background and floating stars
- Fully built with Flask, HTML, CSS, and JavaScript**


Requirements

- Python 3.10+ recommended
- Packages listed in `requirements.txt`:

 
Installation

1. Clone the repository:

git clone <your-repo-url>
cd nasa-apod
Create a virtual environment:
Copy code: python -m venv venv

Activate the virtual environment:

bash
Copy code
# Windows (PowerShell)
.\venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
Install dependencies:
pip install -r requirements.txt

Add your NASA API key in config.py:

NASA_API_KEY = "YOUR_PERSONAL_KEY"
NASA_APOD_URL = "https://api.nasa.gov/planetary/apod"

Run the App
Copy code : python app.py
Then open your browser and go to:
Copy code: http://127.0.0.1:5000/
