from flask import Flask, jsonify
from ProPublica import ProPublicaData  # Assuming you have a separate class for API calls

app = Flask(__name__)

# Create an instance of the API wrapper class
ProPublica = ProPublicaData()

@app.route('/organizations', methods=['GET'])
def get_organizations(name):
    # Call a method from the API wrapper class to fetch organization data
    organizations_data = ProPublica.get_score(name)
    
    # Extract specific fields from the organization data

    return jsonify({'organizations': organizations})

if __name__ == '__main__':
    app.run(debug=True)