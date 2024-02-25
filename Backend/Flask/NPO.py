from flask import Flask, request, jsonify
from ChangeOrgApi import ChangeOrgApi
from ProPublica import ProPublicaData
import json
app = Flask(__name__)

# Create an instance of the API wrapper class
apiKey="pk_live_3b70017fd6befffd9a3fc19def9618f9"
ProPublica = ProPublicaData()
ChangeOrg = ChangeOrgApi(apiKey)
@app.route('/score', methods=['GET'])
def get_organization_score():
    orgName = request.args.get('name')
    ProPublica.getProPublicaOrgData(orgName)
    orgScore = ProPublica.get_score()
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

    name=ChangeOrg.getData()
    ChangeOrg.clear()
    ProPublica.clear()
    return name

@app.route('/getalldata', methods=['GET'])
def get_allData():

    orgName = request.args.get('name')
    ChangeOrg.setupOrgName(orgName)

    name=ChangeOrg.getName()
    logo=ChangeOrg.getLogoUrl()
    creationDate=ChangeOrg.getCreatedDate()
    location=ChangeOrg.getLocation()
    website=ChangeOrg.getWebsiteUrl()

    ein=ChangeOrg.getEIN()
    score=ProPublica.getScore()
    ChangeOrg.clear()
    ProPublica.clear()

    data = {
    "ein": ein,
    "name": name,
    "logo": logo,
    "website": website,
    "creationDate": creationDate,
    "location": location,
    "location": score
}
    json_data = json.dumps(data)
    return json_data

if __name__ == '__main__':
    app.run(debug=True)