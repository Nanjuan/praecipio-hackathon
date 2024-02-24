#Author: Stephen Duran
#Propublica API Class file.
import requests

class ProPublicaData:
    def __init__(self):
        self.propublicaApiUrl="https://projects.propublica.org/nonprofits/api/v2/search.json"
        self.data = None
        self.score = None
    def format_OrgName(OrgName):
        # Remove ""
        OrgName = OrgName[1:-1]
        # Replace spaces with %20
        OrgName = OrgName.replace(" ", "%20")
        # Surround the string with %22 at the beginning and end
        OrgName = "%22" + OrgName + "%22"
        return OrgName

    def get_score(self):
        if self.score != None:
            return self.score
        else:
            return "Score Not found"
        
    def getProPublicaOrgData(self,organizationName):
        
        try:
            apiUrl=self.propublicaApiUrl
            #If the name is in quotations
            if organizationName[0] == '"':
                organizationName = self.format_OrgName(organizationName)
                
            response = requests.get(apiUrl, params={"q": organizationName})

            if response.status_code == 200:
                self.data = response 
                self.score = [org["Score"] for org in self.data["Organizations"]]
                return response.json()
            else:
                return {"error": f"Failed to fetch data. Status code: {response.status_code}"}
        except Exception as e:
            return {"error": f"An error occurred: {str(e)}"}
        