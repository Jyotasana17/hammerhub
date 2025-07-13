# from flask import Flask, request, jsonify, render_template

# app = Flask(__name__)

# # ... (rest of the Flask code remains the same)

# @app.route('/')
# def index():
#     return render_template('index.html')

# if __name__ == '__main__':
#     app.run(debug=True)

# project/
# --- app.py (Flask script)
# --- templates/
#     ---calci.html

from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Sample city construction cost per m²
CITY_COSTS = {
    "New York": 3000,
    "Los Angeles": 2500,
    "Chicago": 2200,
    "Houston": 2000,
    "San Francisco": 3500
}

@app.route('/')
def index():
    return render_template('index.html', cities=list(CITY_COSTS.keys()))

@app.route('/estimate', methods=['POST'])
def estimate():
    data = request.json
    city = data.get("city")
    rooms = int(data.get("rooms", 0))
    plot_size = float(data.get("plot_size", 0))

    cost_per_m2 = CITY_COSTS.get(city)
    if not cost_per_m2:
        return jsonify({"error": "Invalid city"}), 400

    # Example logic: cost = base * size + room surcharge
    estimated_cost = (plot_size * cost_per_m2) + (rooms * 10000)

    return jsonify({"estimated_cost": estimated_cost})

if __name__ == '_main_':
    app.run(debug=True)