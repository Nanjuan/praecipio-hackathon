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
    ProPublica.clear()
    ChangeOrg.clear()
    return orgScore

@app.route('/name', methods=['GET'])
def get_organization_data():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)
    name=ChangeOrg.getName()
    ChangeOrg.clear()
    ProPublica.clear()
    return name

@app.route('/ein', methods=['GET'])
def get_organization_ein():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)

    var=ChangeOrg.getEIN()
    ChangeOrg.clear()
    ProPublica.clear()
    return var

@app.route('/website', methods=['GET'])
def get_organization_website():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)

    name=ChangeOrg.getWebsiteUrl()
    ChangeOrg.clear()
    ProPublica.clear()
    return name

@app.route('/logo', methods=['GET'])
def get_organization_logo():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)

    name=ChangeOrg.getLogoUrl()
    ChangeOrg.clear()
    ProPublica.clear()
    return name

@app.route('/location', methods=['GET'])
def get_organization_location():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)

    name=ChangeOrg.getLocation()
    ChangeOrg.clear()
    ProPublica.clear()
    return name

@app.route('/creationDate', methods=['GET'])
def get_creationDate_():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)

    name=ChangeOrg.getCreatedDate()
    ChangeOrg.clear()
    ProPublica.clear()
    return name

@app.route('/data', methods=['GET'])
def get_organization():
    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)
    ProPublica.getProPublicaOrgData(orgName)
    data = {
    "name": ChangeOrg.getName(),
    "score": ProPublica.getScore(),
    "EIN": ChangeOrg.getEIN(),
    "Web-URL": ChangeOrg.getWebsiteUrl(),
    "Logo-URL": ChangeOrg.getLogoUrl(),
    "Location": ChangeOrg.getLocation(),
    "Creation-date":ChangeOrg.getCreatedDate()
    }

    ChangeOrg.clear()
    ProPublica.clear()
    response = jsonify(data)
    return response 


if __name__ == '__main__':
    app.run(debug=True)