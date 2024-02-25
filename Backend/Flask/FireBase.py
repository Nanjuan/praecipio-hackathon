









# Boilerplate code to work on for multiple users.
'''
from flask import Flask, request, jsonify
import firebase_admin
from firebase_admin import credentials, firestore, auth

# Initialize Flask app
app = Flask(__name__)

# Initialize Firebase Admin SDK without a service account
firebase_admin.initialize_app()

# Initialize Firestore database
db = firestore.client()

# Endpoint to receive JSON data and save to Firebase
@app.route('/save_donations', methods=['POST'])
def save_donations():
    # Get JSON data from request
    data = request.json

    # Save data to Firebase
    try:
        # Authenticate anonymously
        user = auth.get_user(None)

        # Save data to Firestore
        doc_ref = db.collection('donations').document(user.uid)
        doc_ref.set(data)
        
        return jsonify({"message": "Data saved successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
    '''