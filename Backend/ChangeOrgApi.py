import requests
import datetime

class ChangeOrgApi:
    def __init__(self, api_key):
        self.api_key = api_key
        self.changeOrgApiUrl = "https://api.www.every.org/api/nonprofits" #Can search by name and then grab the ein https://api.www.every.org/api/nonprofits/kids-in-danger?apiKey=
        self.changeOrgPartnersUrl="https://partners.every.org/v0.2/search"
        self.everyOrgResponse = None
        self.everyOrgPartnersResponse = None
        self.ein=None
        self.logoURL=None
        self.websiteUrl=None
        self.description=None
        self.createdDate=None
        #https://partners.every.org/v0.2/search/364234906?apiKey= this one has the image url and we search using the ein from the other api

    #*************MUST CALL THIS FUNCTION FIRST AFTER INITIALIZATION*************
    def setupOrgName(self,organizationName):
        self.getChangeOrgData(organizationName)
        self.getChangeOrgPartnersData()
    
    def formatDate(self, date):
        try:
            formatted_date = datetime.datetime.strptime(date, "%Y-%m-%dT%H:%M:%S.%fZ").strftime("%Y-%m-%d")

            return formatted_date
        except ValueError:
            return None

    def getChangeOrgData(self,organizationName):
        try:
            apiUrl=self.changeOrgApiUrl+"/"+self.getFormattedOrgName(organizationName)
            response = requests.get(apiUrl, params={"apiKey": self.api_key})
            if response.status_code == 200:
                self.everyOrgResponse = response.json()
                return self.everyOrgResponse
            else:
                return {"error": f"Failed to fetch data. Status code: {response.status_code}"}
        except Exception as e:
            return {"error": f"An error occurred: {str(e)}"}

    def getChangeOrgPartnersData(self):
        try:
            apiUrl=self.changeOrgPartnersUrl+"/"+self.getEIN()
            response = requests.get(apiUrl, params={"apiKey": self.api_key})
            if response.status_code == 200:
                self.everyOrgPartnersResponse = response.json()
                return self.everyOrgPartnersResponse
            else:
                return {"error": f"Failed to fetch data. Status code: {response.status_code}"}
        except Exception as e:
            return {"error": f"An error occurred: {str(e)}"}

    def getEIN(self):
        try:
            self.ein=self.everyOrgResponse["data"]["nonprofit"]["ein"]
            return self.ein
        except KeyError:
            return None
        
    def getLogoUrl(self):
        try:
            self.logoURL=self.everyOrgPartnersResponse["nonprofits"][0]["logoUrl"]
            return self.logoURL
        except KeyError:
            return None
        
    def getWebsiteUrl(self):
        try:
            self.websiteUrl=self.everyOrgPartnersResponse["nonprofits"][0]["websiteUrl"]
            return self.websiteUrl
        except KeyError:
            return None

    # def getLocation(self):
    #     try:
    #         self.=self.everyOrgPartnersResponse["nonprofits"][0]["location"]
    #         return self.websiteUrl
    #     except KeyError:
    #         return None
    
    def getCreatedDate(self):
        try:
            self.createdDate=self.formatDate(self.everyOrgResponse["data"]["nonprofit"]["createdAt"])
            return self.createdDate
        except KeyError:
            return None
        
    def getFormattedOrgName(self, orgName):
        lowercaseString = orgName.lower()
        formattedName = lowercaseString.replace(" ", "-")
        return formattedName


#test code
# if __name__=="__main__":
#     obj=ChangeOrgApi("pk_live_3b70017fd6befffd9a3fc19def9618f9")
#     obj.setupOrgName("Kids In Danger")
#     ein=obj.getEIN()
#     logo=obj.getLogoUrl()
#     date=obj.getCreatedDate()
#     website=obj.getWebsiteUrl()
#     print(ein)
#     print(logo)
#     print(date)
#     print(website)
    
