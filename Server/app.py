from fileinput import filename
import imp
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from sqlalchemy import create_engine

engine = create_engine('mysql://root:''@localhost/nih',pool_size=1000000, max_overflow=1000000)
app = Flask(__name__)
app.debug = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/nih'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
from flask_cors import CORS


CORS(app)
ma=Marshmallow(app)
db = SQLAlchemy(app)

# @app.teardown_appcontext
# def shutdown_session(exception=None):
#     db.session.remove()

#nih-dataset

class nih_dataset(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    country=db.Column(db.String(255), nullable=True)
    education=db.Column(db.String(255), nullable=True)	
    employment=db.Column(db.String(255), nullable=True)
    case_definition=db.Column(db.String(255), nullable=True)
    type_of_resistance=db.Column(db.String(255), nullable=True)
    x_ray_count=db.Column(db.Integer, nullable=True)
    organization=db.Column(db.String(255), nullable=True)
    affect_pleura=db.Column(db.String(255), nullable=True)
    overall_percent_of_abnormal_volume=	db.Column(db.String(255), nullable=True)
    le_isoniazid=db.Column(db.String(255), nullable=True)
    le_rifampicin=db.Column(db.String(255), nullable=True)	
    le_p_aminosalicylic_acid=db.Column(db.String(255), nullable=True)
    hain_isoniazid=db.Column(db.String(255), nullable=True)	
    hain_rifampicin=db.Column(db.String(255), nullable=True)	
    period_start=db.Column(db.Integer, nullable=True)
    period_end=db.Column(db.Integer, nullable=True)
    period_span=db.Column(db.Integer, nullable=True)
    regimen_count=db.Column(db.Integer, nullable=True)
    qure_peffusion=db.Column(db.String(255), nullable=True)	
    treatment_status=db.Column(db.String(255), nullable=True)
    regimen_drug=db.Column(db.String(255), nullable=True)
    comorbidity=db.Column(db.String(255), nullable=True)
    ncbi_bioproject=db.Column(db.String(255), nullable=True)	
    gene_name=db.Column(db.String(255), nullable=True)
    x_ray_exists=db.Column(db.String(255), nullable=True)
    ct_exists=	db.Column(db.String(255), nullable=True)
    genomic_data_exists=	db.Column(db.String(255), nullable=True)
    qure_consolidation=	db.Column(db.String(255), nullable=True)
    outcome=db.Column(db.String(255), nullable=True)
    
    def __init__(self,country,education,employment,case_definition,type_of_resistance,x_ray_count,organization,affect_pleura,overall_percent_of_abnormal_volume,le_isoniazid,le_rifampicin,	le_p_aminosalicylic_acid,hain_isoniazid,hain_rifampicin,period_start,period_end,period_span,regimen_count,qure_peffusion,treatment_status,regimen_drug,comorbidity,ncbi_bioproject,	gene_name,x_ray_exists,ct_exists,genomic_data_exists,qure_consolidation,outcome):
        self.country=country  
        self.education=education
        self.employment=employment
        self.case_definition=case_definition
        self.type_of_resistance=type_of_resistance
        self.x_ray_count=x_ray_count
        self.organization=organization
        self.affect_pleura=affect_pleura
        self.overall_percent_of_abnormal_volume=overall_percent_of_abnormal_volume
        self.le_isoniazid=le_isoniazid
        self.le_rifampicin=le_rifampicin
        self.le_p_aminosalicylic_acid=le_p_aminosalicylic_acid
        self.hain_isoniazid=hain_isoniazid
        self.hain_rifampicin=hain_rifampicin
        self.period_start=period_start
        self.period_end=period_end
        self.period_span=period_span
        self.regimen_count=regimen_count
        self.qure_peffusion=qure_peffusion
        self.treatment_status=treatment_status
        self.regimen_drug=regimen_drug
        self.comorbidity=comorbidity
        self.ncbi_bioproject=ncbi_bioproject
        self.gene_name=gene_name
        self.x_ray_exists=x_ray_exists
        self.ct_exists=ct_exists
        self.genomic_data_exists=genomic_data_exists
        self.qure_consolidation=qure_consolidation
        self.outcome=outcome
#Main data set of the site


#new imports

class newDataset(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    importedby=db.Column(db.String(255), nullable=True)
    filename=db.Column(db.String(255), nullable=True)
    country=db.Column(db.String(255), nullable=True)
    education=db.Column(db.String(255), nullable=True)	
    employment=db.Column(db.String(255), nullable=True)
    case_definition=db.Column(db.String(255), nullable=True)
    type_of_resistance=db.Column(db.String(255), nullable=True)
    x_ray_count=db.Column(db.Integer, nullable=True)
    organization=db.Column(db.String(255), nullable=True)
    affect_pleura=db.Column(db.String(255), nullable=True)
    overall_percent_of_abnormal_volume=	db.Column(db.String(255), nullable=True)
    le_isoniazid=db.Column(db.String(255), nullable=True)
    le_rifampicin=db.Column(db.String(255), nullable=True)	
    le_p_aminosalicylic_acid=db.Column(db.String(255), nullable=True)
    hain_isoniazid=db.Column(db.String(255), nullable=True)	
    hain_rifampicin=db.Column(db.String(255), nullable=True)	
    period_start=db.Column(db.Integer, nullable=True)
    period_end=db.Column(db.Integer, nullable=True)
    period_span=db.Column(db.Integer, nullable=True)
    regimen_count=db.Column(db.Integer, nullable=True)
    qure_peffusion=db.Column(db.String(255), nullable=True)	
    treatment_status=db.Column(db.String(255), nullable=True)
    regimen_drug=db.Column(db.String(255), nullable=True)
    comorbidity=db.Column(db.String(255), nullable=True)
    ncbi_bioproject=db.Column(db.String(255), nullable=True)	
    gene_name=db.Column(db.String(255), nullable=True)
    x_ray_exists=db.Column(db.String(255), nullable=True)
    ct_exists=	db.Column(db.String(255), nullable=True)
    genomic_data_exists=	db.Column(db.String(255), nullable=True)
    qure_consolidation=	db.Column(db.String(255), nullable=True)
    outcome=db.Column(db.String(255), nullable=True)
    
    def __init__(self,importedby,filename,country,education,employment,case_definition,type_of_resistance,x_ray_count,organization,affect_pleura,overall_percent_of_abnormal_volume,le_isoniazid,le_rifampicin,	le_p_aminosalicylic_acid,hain_isoniazid,hain_rifampicin,period_start,period_end,period_span,regimen_count,qure_peffusion,treatment_status,regimen_drug,comorbidity,ncbi_bioproject,	gene_name,x_ray_exists,ct_exists,genomic_data_exists,qure_consolidation,outcome):
        self.country=country  
        self.education=education
        self.importedby=importedby
        self.filename=filename
        self.employment=employment
        self.case_definition=case_definition
        self.type_of_resistance=type_of_resistance
        self.x_ray_count=x_ray_count
        self.organization=organization
        self.affect_pleura=affect_pleura
        self.overall_percent_of_abnormal_volume=overall_percent_of_abnormal_volume
        self.le_isoniazid=le_isoniazid
        self.le_rifampicin=le_rifampicin
        self.le_p_aminosalicylic_acid=le_p_aminosalicylic_acid
        self.hain_isoniazid=hain_isoniazid
        self.hain_rifampicin=hain_rifampicin
        self.period_start=period_start
        self.period_end=period_end
        self.period_span=period_span
        self.regimen_count=regimen_count
        self.qure_peffusion=qure_peffusion
        self.treatment_status=treatment_status
        self.regimen_drug=regimen_drug
        self.comorbidity=comorbidity
        self.ncbi_bioproject=ncbi_bioproject
        self.gene_name=gene_name
        self.x_ray_exists=x_ray_exists
        self.ct_exists=ct_exists
        self.genomic_data_exists=genomic_data_exists
        self.qure_consolidation=qure_consolidation
        self.outcome=outcome



# class dataset(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(200), nullable=False)
#     age = db.Column(db.Integer, nullable=False)
    
#     def __init__(self,name,age):
#         self.age=age
#         self.name=name
#this will contain nih app new imports
# class newImports(db.Model):
#      id = db.Column(db.Integer, primary_key=True)
#      name = db.Column(db.String(200), nullable=False)
#      age = db.Column(db.Integer, nullable=False)
#      NameofFile= db.Column(db.String(200), nullable=False)

#      def __init__(self,name,age,NameofFile):
#         self.age=age
#         self.name=name
#         self.NameofFile=NameofFile
#this is notifications table
class notifications(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     username = db.Column(db.String(200), nullable=False)
     filename = db.Column(db.String(200), nullable=False)
     status=db.Column(db.String(200), nullable=False)

     def __init__(self,username,filename,status):
        self.username=username
        self.filename=filename
        self.status=status

# @app.route('/add',methods=['POST'])
# def add_newimport():
#     importdata=request.get_json()
    
#     name = request.json['name']
#     age = request.json['age']

#     data = newImports(name,age)
#     db.session.add(data)
#     db.session.commit()
    

class nih_datasetSchema(ma.Schema):
    class Meta:
        fields=('id','country','education','employment','case_definition','type_of_resistance','x_ray_count','organization','affect_pleura','overall_percent_of_abnormal_volume','le_isoniazid','le_rifampicin','le_p_aminosalicylic_acid','hain_isoniazid','hain_rifampicin','period_start','period_end','period_span','regimen_count','qure_peffusion','treatment_status','regimen_drug','comorbidity','ncbi_bioproject','gene_name','x_ray_exists','ct_exists','genomic_data_exists','qure_consolidation','outcome')
nih_dataset_schema=nih_datasetSchema()
nih_datasets_schema=nih_datasetSchema(many=True)

class newDatasetSchema(ma.Schema):
    class Meta:
        fields=('id','importedby','filename','country','education','employment','case_definition','type_of_resistance','x_ray_count','organization','affect_pleura','overall_percent_of_abnormal_volume','le_isoniazid','le_rifampicin','le_p_aminosalicylic_acid','hain_isoniazid','hain_rifampicin','period_start','period_end','period_span','regimen_count','qure_peffusion','treatment_status','regimen_drug','comorbidity','ncbi_bioproject','gene_name','x_ray_exists','ct_exists','genomic_data_exists','qure_consolidation','outcome')
newDatasetschema=newDatasetSchema()
newDatasetsschema=newDatasetSchema(many=True)



class datasetSchema(ma.Schema):
    class Meta:
        fields = ('id','name','age')

dataset_schema = datasetSchema()
datasets_schema = datasetSchema(many=True)

#
class newImportSchema(ma.Schema):
    class Meta:
        fields = ('id','name','age','NameofFile')

newImport_schema = newImportSchema()
newImports_schema = newImportSchema(many=True) 


class notificationsSchema(ma.Schema):
    class Meta:
        fields = ('id','username','filename','status')

notification_schema = notificationsSchema()
notifications_schema = notificationsSchema(many=True)



@app.route("/addnotifications", methods=["POST"], strict_slashes=False)
def add_newnotification():
    username = request.json['username']
    filename = request.json['filename']
    status=request.json['status']

    record = notifications(
		username=username,
		filename=filename,
        status=status
		)
    db.session.add(record)
    db.session.commit()

    return notification_schema.jsonify(record)
    #newimports by user
    
@app.route("/useradddata", methods=["POST"], strict_slashes=False)
def add_newDataset():
    filename=request.json['filename'],
    importedby=request.json['importedby'],
    country=request.json['country']
    education=	request.json['education']
    employment= request.json['employment']
    case_definition= request.json['case_definition']
    type_of_resistance= request.json['type_of_resistance']
    x_ray_count= request.json['x_ray_count']
    organization= request.json['organization']
    affect_pleura= request.json['affect_pleura']
    overall_percent_of_abnormal_volume=	 request.json['overall_percent_of_abnormal_volume']
    le_isoniazid=	 request.json['le_isoniazid']
    le_rifampicin=	 request.json['le_rifampicin']
    le_p_aminosalicylic_acid= request.json['le_p_aminosalicylic_acid']
    hain_isoniazid=	 request.json['hain_isoniazid']
    hain_rifampicin=	 request.json['hain_rifampicin']
    period_start= request.json['period_start']
    period_end= request.json['period_end']
    period_span= request.json['period_span']
    regimen_count= request.json['regimen_count']
    qure_peffusion=	 request.json['qure_peffusion']
    treatment_status= request.json['treatment_status']
    regimen_drug= request.json['regimen_drug']
    comorbidity= request.json['comorbidity']
    ncbi_bioproject=	 request.json['ncbi_bioproject']
    gene_name= request.json['gene_name']
    x_ray_exists= request.json['x_ray_exists']
    ct_exists=	 request.json['ct_exists']
    genomic_data_exists=	 request.json['genomic_data_exists']
    qure_consolidation=	 request.json['qure_consolidation']
    outcome= request.json['outcome']

    record = newDataset(
        filename=filename,
        importedby=importedby,
		country=country,			
        education=education	,
		employment=employment,
		case_definition=case_definition,
		type_of_resistance=type_of_resistance,
		x_ray_count=x_ray_count,
		organization=organization,
		affect_pleura=affect_pleura,
		overall_percent_of_abnormal_volume=	overall_percent_of_abnormal_volume,
		le_isoniazid=	le_isoniazid,
		le_rifampicin=le_rifampicin	,
		le_p_aminosalicylic_acid=le_p_aminosalicylic_acid,
		hain_isoniazid=	hain_isoniazid,
		hain_rifampicin=hain_rifampicin	,
		period_start=period_start,
		period_end=period_end,
		period_span=period_span,
		regimen_count=regimen_count,
		qure_peffusion=qure_peffusion	,
		treatment_status=treatment_status,
		regimen_drug=regimen_drug,
		comorbidity=comorbidity,
		ncbi_bioproject=ncbi_bioproject	,
		gene_name=gene_name,
		x_ray_exists=x_ray_exists,
		ct_exists=ct_exists,
		genomic_data_exists=genomic_data_exists,
		qure_consolidation=qure_consolidation,
		outcome=outcome
		)

    db.session.add(record)
    db.session.commit()

    engine.dispose()

    return newDatasetschema.jsonify(record)



#post in viewdata
@app.route("/adminadddata", methods=["POST"], strict_slashes=False)
def add_Dataset():
    country=request.json['country']
    education=	request.json['education']
    employment= request.json['employment']
    case_definition= request.json['case_definition']
    type_of_resistance= request.json['type_of_resistance']
    x_ray_count= request.json['x_ray_count']
    organization= request.json['organization']
    affect_pleura= request.json['affect_pleura']
    overall_percent_of_abnormal_volume=	 request.json['overall_percent_of_abnormal_volume']
    le_isoniazid=	 request.json['le_isoniazid']
    le_rifampicin=	 request.json['le_rifampicin']
    le_p_aminosalicylic_acid= request.json['le_p_aminosalicylic_acid']
    hain_isoniazid=	 request.json['hain_isoniazid']
    hain_rifampicin=	 request.json['hain_rifampicin']
    period_start= request.json['period_start']
    period_end= request.json['period_end']
    period_span= request.json['period_span']
    regimen_count= request.json['regimen_count']
    qure_peffusion=	 request.json['qure_peffusion']
    treatment_status= request.json['treatment_status']
    regimen_drug= request.json['regimen_drug']
    comorbidity= request.json['comorbidity']
    ncbi_bioproject=	 request.json['ncbi_bioproject']
    gene_name= request.json['gene_name']
    x_ray_exists= request.json['x_ray_exists']
    ct_exists=	 request.json['ct_exists']
    genomic_data_exists=	 request.json['genomic_data_exists']
    qure_consolidation=	 request.json['qure_consolidation']
    outcome= request.json['outcome']

    record = nih_dataset(
    
		country=country,			
        education=education	,
		employment=employment,
		case_definition=case_definition,
		type_of_resistance=type_of_resistance,
		x_ray_count=x_ray_count,
		organization=organization,
		affect_pleura=affect_pleura,
		overall_percent_of_abnormal_volume=	overall_percent_of_abnormal_volume,
		le_isoniazid=	le_isoniazid,
		le_rifampicin=le_rifampicin	,
		le_p_aminosalicylic_acid=le_p_aminosalicylic_acid,
		hain_isoniazid=	hain_isoniazid,
		hain_rifampicin=hain_rifampicin	,
		period_start=period_start,
		period_end=period_end,
		period_span=period_span,
		regimen_count=regimen_count,
		qure_peffusion=qure_peffusion	,
		treatment_status=treatment_status,
		regimen_drug=regimen_drug,
		comorbidity=comorbidity,
		ncbi_bioproject=ncbi_bioproject	,
		gene_name=gene_name,
		x_ray_exists=x_ray_exists,
		ct_exists=ct_exists,
		genomic_data_exists=genomic_data_exists,
		qure_consolidation=qure_consolidation,
		outcome=outcome
		)

    db.session.add(record)
    db.session.commit()

    engine.dispose()

    return nih_dataset_schema.jsonify(record)
#post in new imports
# @app.route("/add", methods=["POST"], strict_slashes=False)
# def add_newImport():
#     name = request.json['name']
#     age = request.json['age']
#     NameofFile=request.json['NameofFile']

#     record = newImports(
# 		name=name,
# 		age=age,
#         NameofFile=NameofFile,
# 		)
#     db.session.add(record)
#     db.session.commit()
#     db.session.close()
#     engine.dispose() 
#     db.session.remove()
#     return newImport_schema.jsonify(record)
# @app.route('/getnewimports', methods=['GET', 'POST'])
# def getimports():
#     importedby=request.json["importedby"]
#     filename=request.json['filename']
#     data=newDataset.query.filter_by(newDataset.importedby==importedby, newDataset.filename==filename)
#     results=newDatasetsschema.dump(data)
#     return jsonify(results)

@app.route('/get',methods =['GET'])
def get_articles():
    all_entries = nih_dataset.query.all()
    results = nih_datasets_schema.dump(all_entries)
    return jsonify(results)

@app.route('/getnewimports',methods =['GET'])
def get_newdataimports():
    all_entries = newDataset.query.all()
    results = newDatasetsschema.dump(all_entries)
    return jsonify(results)



@app.route('/getnotifications',methods =['GET'])
def get_notifications():
    all_entries = notifications.query.all()
    results = notifications_schema.dump(all_entries)
    
    return jsonify(results)
 


@app.route('/update/<id>',methods = ['PUT'])
def update_article(id):
    notify = notifications.query.get(id)

    status = request.json['status']
    

    notify.status = status
    

    db.session.commit()
    return notification_schema.jsonify(notify)


# @app.route('/getnewdata',methods =['GET'])
# def new

if __name__ == '__main__':
    app.run(debug=True)