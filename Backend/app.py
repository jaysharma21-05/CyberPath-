from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return "About Page — Coming Soon!"

@app.route('/courses')
def courses():
    return "Courses Page — Coming Soon!"

if __name__ == '__main__':
    app.run(debug=True)