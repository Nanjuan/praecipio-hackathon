#Author: Stephen Duran
#Propublica API Class file.
import requests

class ProPublicaData:
    def __init__(self, data, name):
        self.data = data
        self.name = name 
        self.propublicaApiUrl="https://projects.propublica.org/nonprofits/api/v2/search.json"

    def format_OrgName(OrgName):
        # Remove ""
        OrgName = OrgName[1:-1]
        # Replace spaces with %20
        OrgName = OrgName.replace(" ", "%20")
        # Surround the string with %22 at the beginning and end
        OrgName = "%22" + OrgName + "%22"
        return OrgName

    def get_score(self,name):
        if name == [org["Name"] for org in self.data["Organizations"]]:
            return [org["Score"] for org in self.data["Organizations"]]
        else:
            return "Score Not found"
        
    def getProPublicaOrgData(self,organizationName):
        
        try:
            apiUrl=self.propublicaApiUrl
            if organizationName[0] == '"':
                organizationName = self.format_OrgName(organizationName)
            response = requests.get(apiUrl, params={"q": organizationName})
            if response.status_code == 200:
                return response.json()
            else:
                return {"error": f"Failed to fetch data. Status code: {response.status_code}"}
        except Exception as e:
            return {"error": f"An error occurred: {str(e)}"}
        