from fileinput import filename
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.debug = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/nih'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
from flask_cors import CORS

CORS(app)
ma=Marshmallow(app)
db = SQLAlchemy(app)
 
#Main data set of the site
class dataset(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    
    def __init__(self,name,age):
        self.age=age
        self.name=name
#this will contain nih app new imports
class newImports(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     name = db.Column(db.String(200), nullable=False)
     age = db.Column(db.Integer, nullable=False)
     NameofFile= db.Column(db.String(200), nullable=False)

     def __init__(self,name,age,NameofFile):
        self.age=age
        self.name=name
        self.NameofFile=NameofFile
#this is notifications table
class notifications(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     username = db.Column(db.String(200), nullable=False)
     filename = db.Column(db.String(200), nullable=False)
     

     def __init__(self,username,filename):
        self.username=username
        self.filename=filename
        

# @app.route('/add',methods=['POST'])
# def add_newimport():
#     importdata=request.get_json()
    
#     name = request.json['name']
#     age = request.json['age']

#     data = newImports(name,age)
#     db.session.add(data)
#     db.session.commit()
    



class datasetSchema(ma.Schema):
    class Meta:
        fields = ('id','name','age')

dataset_schema = datasetSchema()
datasets_schema = datasetSchema(many=True)


class newImportSchema(ma.Schema):
    class Meta:
        fields = ('id','name','age','NameofFile')

newImport_schema = newImportSchema()
newImports_schema = newImportSchema(many=True) 


class notificationsSchema(ma.Schema):
    class Meta:
        fields = ('id','username','filename')

notification_schema = notificationsSchema()
notifications_schema = notificationsSchema(many=True)



@app.route("/notifications", methods=["POST"], strict_slashes=False)
def add_newnotification():
    username = request.json['username']
    filename = request.json['filename']

    record = notifications(
		username=username,
		filename=filename
		)
    db.session.add(record)
    db.session.commit()

    return notification_schema.jsonify(record)

@app.route("/add", methods=["POST"], strict_slashes=False)
def add_newImport():
    name = request.json['name']
    age = request.json['age']
    NameofFile=request.json['NameofFile']

    record = newImports(
		name=name,
		age=age,
        NameofFile=NameofFile,
		)
    db.session.add(record)
    db.session.commit()

    return newImport_schema.jsonify(record)

@app.route('/get',methods =['GET'])
def get_articles():
    all_entries = dataset.query.all()
    results = datasets_schema.dump(all_entries)
    return jsonify(results)

@app.route('/getnotifications',methods =['GET'])
def get_notifications():
    all_entries = notifications.query.all()
    results = notifications_schema.dump(all_entries)
    return jsonify(results)


if __name__ == '__main__':
    app.run(debug=True)