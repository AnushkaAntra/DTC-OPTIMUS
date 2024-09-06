from flask import Flask, request, jsonify #type: ignore
from main import GeneticAlgorithm
from flask_cors import CORS #type: ignore

app = Flask(__name__)
CORS(app)

@app.route('/getSchedule', methods=['GET'])
def handle_get():
    gen = GeneticAlgorithm(final_generation=100, population_size=50, crossover_rate=0.8, mutation_rate=0.01)
    res = gen.run()
    res_dict = {}
    for i, driver in enumerate(res.drivers):
        res_dict[driver.id] = res.slots_matrix[i].tolist()
    print(res_dict)
    return jsonify(res_dict), 201

if __name__ == '__main__':
    app.run(debug=True)