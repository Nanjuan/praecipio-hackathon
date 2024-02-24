#Author: Stephen Duran
#Propublica API usage file
class ProPublicaData:
    def __init__(self, data):
        self.data = data


    def get_ein(self,ein):
        if ein == [org["EIN"] for org in self.data["Organizations"]]:
            return [org["EIN"] for org in self.data["Organizations"]]
        else:
            return "EIN Not found"
    def get_name(self,name):
        if name == [org["Name"] for org in self.data["Organizations"]]:
            return [org["Name"] for org in self.data["Organizations"]]
        else:
            return "Name Not found"

    def get_score(self,score):
        if score == [org["Score"] for org in self.data["Organizations"]]:
            return [org["Score"] for org in self.data["Organizations"]]
        else:
            return "Score Not found"