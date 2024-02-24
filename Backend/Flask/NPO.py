from flask import Flask, jsonify, request
from ..API.ProPublica import ProPublicaData
from ChangeOrgApi import ChangeOrgApi
app = Flask(__name__)

# Create an instance of the API wrapper class
ProPublica = ProPublicaData()
ChangeOrg = ChangeOrgApi()
@app.route('/score', methods=['GET'])
def get_organization_score():
    orgName = request.args.get('name')
    ProPublica.getProPublicaOrgData(orgName)
    orgScore = ProPublica.getScore()

    return orgScore

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

@app.route('/location', methods=['GET'])
def get_organization_location():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)

    return ChangeOrg.getLocation

@app.route('/creationDate', methods=['GET'])
def get_organization_():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)

    return ChangeOrg.getCreatedDate




if __name__ == '__main__':
    app.run(debug=True)