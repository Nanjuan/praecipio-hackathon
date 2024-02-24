from flask import Flask, jsonify, request
from ProPublica import ProPublicaData  # Assuming you have a separate class for API calls
from ChangeOrgApi import ChangeOrgApi
app = Flask(__name__)

# Create an instance of the API wrapper class
ProPublica = ProPublicaData()
ChangeOrg = ChangeOrgApi()
@app.route('/score', methods=['GET'])
def get_organization_score():
    orgName = request.args.get('name')

    # Call a method from the API wrapper class to fetch organization data
    organizationScore = ProPublica.get_score(orgName)

    # Extract specific fields from the organization data

    return organizationScore

@app.route('/name', methods=['GET'])
def get_organization_data():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)


@app.route('/ein', methods=['GET'])
def get_organization_ein():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)

    return ChangeOrg.getEIN

@app.route('/website', methods=['GET'])
def get_organization_website():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)

    return ChangeOrg.getWebsiteUrl

@app.route('/ein', methods=['GET'])
def get_organization_logo():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)
    
    
    return ChangeOrg.getLogoUrl
if __name__ == '__main__':
    app.run(debug=True)