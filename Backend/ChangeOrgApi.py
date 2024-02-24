import requests

class ChangeOrgApi:
    def __init__(self, api_key):
        self.api_key = api_key
        self.changeOrgApiUrl = "https://api.www.every.org/api/nonprofits"
        self.propublicaApiUrl="https://projects.propublica.org/nonprofits/api/v2/search.json"


    def getChangeOrgData(self,organizationName):
        try:
            apiUrl=self.changeOrgApiUrl+"/"+organizationName
            response = requests.get(apiUrl, params={"api_key": self.api_key})
            if response.status_code == 200:
                return response.json()
            else:
                return {"error": f"Failed to fetch data. Status code: {response.status_code}"}
        except Exception as e:
            return {"error": f"An error occurred: {str(e)}"}

