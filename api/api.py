from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/list')
def get_list():
    dataJsonFile = open('data\data.json', 'r')
    data = dataJsonFile.read()
    result = json.loads(data)
    print(result)
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True)