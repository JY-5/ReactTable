from flask import Flask, jsonify
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__, static_folder='client/build', static_url_path='')
CORS(app)

@app.route('/list')
@cross_origin()
def get_list():
    dataJsonFile = open('data\data.json', 'r')
    data = dataJsonFile.read()
    result = json.loads(data)
    print(result)
    return jsonify(result)

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.errorhandler(404)
@cross_origin()
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))