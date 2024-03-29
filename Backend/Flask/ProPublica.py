#Author: Stephen Duran
#Propublica API Class file.
import requests

class ProPublicaData:
    def __init__(self):
        self.propublicaApiUrl="https://projects.propublica.org/nonprofits/api/v2/search.json"
        self.data = None
        self.score = None
    def formatOrgName(self,OrgName):
        # Remove ""
        OrgName = OrgName.replace('"', "%22")
        # Replace spaces with %20
        OrgName = OrgName.replace(" ", "%20")
        # Replace + with %2B
        OrgName = OrgName.replace("+", "%2B")
        # Replace [] with %5
        OrgName = OrgName.replace("[", "%2B")
        OrgName = OrgName.replace("]", "%2B")

        return OrgName

    def getScore(self):
        if self.score != None:
            return self.score[0]
        else:
            return "Score Not found"
        
    def getProPublicaOrgData(self,organizationName):
        
        try:
            apiUrl=self.propublicaApiUrl
            #organizationName = self.formatOrgName(organizationName)
                
            response = requests.get(apiUrl, params={"q": organizationName})

            if response.status_code == 200:
                self.data = response.json() 
                self.score = [org["score"] for org in self.data["organizations"]]
                return response.json()
            else:
                return {"error": f"Failed to fetch data. Status code: {response.status_code}"}
        except Exception as e:
            return {"error": f"An error occurred: {str(e)}"}
        
    def clear(self):
        self.data=None
        self.score=None
        