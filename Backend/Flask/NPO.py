from flask import Flask, jsonify
from ProPublica import MyAPIWrapper  # Assuming you have a separate class for API calls

app = Flask(__name__)

# Create an instance of the API wrapper class
api_wrapper = MyAPIWrapper()

@app.route('/organizations', methods=['GET'])
def get_organizations():
    # Call a method from the API wrapper class to fetch organization data
    organizations_data = api_wrapper.fetch_organizations()

    # Extract specific fields from the organization data
    organizations = []
    for org in organizations_data:
        organization = {
            'EIN': org['EIN'],
            'Name': org['Name'],
            'Score': org['Score']
        }
        organizations.append(organization)

    return jsonify({'organizations': organizations})

if __name__ == '__main__':
    app.run(debug=True)