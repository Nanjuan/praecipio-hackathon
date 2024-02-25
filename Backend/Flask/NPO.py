from flask import Flask, request, jsonify
from ChangeOrgApi import ChangeOrgApi
from ProPublica import ProPublicaData
app = Flask(__name__)

# Create an instance of the API wrapper class
apiKey="pk_live_3b70017fd6befffd9a3fc19def9618f9"
ProPublica = ProPublicaData()
ChangeOrg = ChangeOrgApi(apiKey)
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

    return ChangeOrg.getEIN()

@app.route('/website', methods=['GET'])
def get_organization_website():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)

    return ChangeOrg.getWebsiteUrl()

@app.route('/logo', methods=['GET'])
def get_organization_logo():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)

    return ChangeOrg.getLogoUrl()

@app.route('/location', methods=['GET'])
def get_organization_location():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)

    return ChangeOrg.getLocation

@app.route('/creationDate', methods=['GET'])
def get_creationDate_():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)

    return ChangeOrg.getCreatedDate()

@app.route('/data', methods=['GET'])
def get_organization():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)
    data = [ChangeOrg.getFormattedOrgName(),ChangeOrg.getCreatedDate(),\
            ChangeOrg.getEIN(),ChangeOrg.getWebsiteUrl(),ChangeOrg.getLogoUrl()]
    return data



if __name__ == '__main__':
    app.run(debug=True)