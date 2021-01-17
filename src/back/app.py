import json
from flask import Flask, redirect, render_template, \
    request, jsonify, make_response, abort, url_for
from flask_cors import cross_origin
from marshmallow import fields
from marshmallow_sqlalchemy import ModelSchema
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
import time

with open('secret.json') as f:
    SECRET = json.load(f)

DB_URI = "mysql+mysqlconnector://{user}:{password}@{host}:{port}/{db}".format(
    user=SECRET["user"],
    password=SECRET["password"],
    host=SECRET["host"],
    port=SECRET["port"],
    db=SECRET["db"])

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DB_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)


class AllCosmetology(Cosmetology, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    appointment_for = db.Column(db.String(32), unique=False)
    produce_country = db.Column(db.String(32), unique=False)
    capacity_in_ml = db.Column(db.Integer, unique=False)
    price_in_uah = db.Column(db.Integer, unique=False)
    amount_in_packet = db.Column(db.Integer, unique=False)
    price_in_usd = db.Column(db.Float, unique=False)
    price_in_eu = db.Column(db.Float, unique=False)

    def __init__(self, appointment_for=None, produce_country=None, capacity_in_ml=None, price_in_uah=None,
                 amount_in_packet=None, price_in_usd=None, price_in_eu=None):
        super().__init__(appointment_for, produce_country, capacity_in_ml, price_in_uah, amount_in_packet)
        self.price_in_usd = price_in_usd
        self.price_in_eu = price_in_eu


class AllCosmetologySchema(ma.Schema):
    class Meta:
        fields = (
            'appointment_for', 'produce_country', 'capacity_in_ml', 'price_in_uah', 'amount_in_packet', 'price_in_usd',
            'price_in_eu')


all_cosmetology_schema = AllCosmetologySchema()
all_cosmetologyes_schema = AllCosmetologySchema(many=True)


@app.route("/cosmetologyBuilds", methods=["POST"])
def add_all_cosmetology():
    all_cosmetology = AllCosmetology(request.json['appointment_for'], request.json['produce_country'],
                                     request.json['capacity_in_ml'], request.json['price_in_uah'],
                                     request.json['amount_in_packet'], request.json['price_in_usd'],
                                     request.json['price_in_eu'])
    db.session.add(all_cosmetology)
    db.session.commit()
    return all_cosmetology_schema.jsonify(all_cosmetology)


@app.route("/cosmetologyBuilds/<id>", methods=["GET"])
@cross_origin()
def get_all_cosmetology():
    all_all_cosmetology = Cosmetology.query.all()
    all_cosmetology = all_cosmetologyes_schema.dump(all_all_cosmetology)
    if not all_cosmetology:
        abort(404)
    return jsonify({'all_cosmetology': result})


@app.route("/cosmetologyBuilds/search/<search>", methods=["GET"])
@cross_origin()
def all_cosmetology_detail(id):
    all_cosmetology = AllCosmetology.query.get(id)
    if not all_cosmetology:
        abort(404)
    return all_cosmetology_schema.jsonify(all_cosmetology)

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True, host='127.0.0.1')
