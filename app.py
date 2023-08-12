from flask import Flask, render_template, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('signup.html')

@app.route('/start_face_scan', methods=['POST'])
def start_face_scan():
    result = subprocess.run(['python', 'test.py'], stdout=subprocess.PIPE, text=True)
    return jsonify({'output': result.stdout})

if __name__ == '__main__':
    app.run(debug=True)
