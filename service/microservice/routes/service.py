# Embedding Route
# Routes related to creatiung text embeddings

import sys

from flask import (
    Blueprint, flash, g, redirect, request, session, url_for, jsonify, current_app as app
)
from flask_cors import CORS, cross_origin
from werkzeug.exceptions import abort
from microservice.src.engine import tag_news_article, tag_document

#################################################
# Initialize the models
#################################################

# TODO: include the model initialization function

#################################################
# Setup the embeddings blueprint
#################################################

# TODO: provide an appropriate route name and prefix
bp = Blueprint('service', __name__, url_prefix='/api/v1/service')


@bp.route('/', methods=['GET'])
def index():
    # TODO: provide an appropriate output
    return abort(501)

# TODO: add an appropriate route name
@bp.route('/second', methods=['GET', 'POST'])
def second():
    # TODO: assign the appropriate variables
    variable = None
    if request.method == 'GET':
        # retrieve the correct query parameters
        variable = request.args.get('variable', default='', type=str)
    elif request.method == 'POST':
        # retrieve the text posted to the route
        variable = request.json['variable']
    else:
        # TODO: log exception
        return abort(405)

    try:
        # TODO: add the main functionality with the model and variable
        finish = True
    except Exception as e:
        # TODO: log exception
        # something went wrong with the request
        return abort(400, str(e))
    else:
        # TODO: return the response
        return jsonify({
            "finish": finish
        })


@bp.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    # TODO: assign the appropriate variables
    variable = None
    # print(request.method, file=sys.stdout)
    if request.method == 'POST':
        # retrieve the text posted to the route
        print(request.json, file=sys.stdout)
        variable = request.json['text']

    else:
        # TODO: log exception
        return abort(405)
    try:
        # TODO: add the main functionality with the model and variable
        # tag_named_entities(variable)
        text, predictedNerText  = tag_document(variable)
        finish = True
        print(predictedNerText,file=sys.stdout  )

    except Exception as e:
        # TODO: log exception
        print(e,file=sys.stdout)
        # something went wrong with the request
        return abort(400, str(e))
    else:
        # TODO: return the response
        response = jsonify({
            "text": text,
            "predictedNerText": predictedNerText,
            "finish": finish
        })
        return response


@bp.route('/predict/link', methods=['POST'])
@cross_origin()
def predictlink():
    # TODO: assign the appropriate variables
    variable = None
    print(request.method, file=sys.stdout)
    if request.method == 'POST':
        # retrieve the text posted to the route
        print(request.json, file=sys.stdout)
        variable = request.json['text']
        tagNer = request.json["ner"]
    else:
        # TODO: log exception
        return abort(405)
    try:
        # TODO: add the main functionality with the model and variable
        text,  predictedNerText = tag_news_article(variable)
        finish = True
        print(predictedNerText,file=sys.stdout)
    except Exception as e:
        print(e,file=sys.stdout)
        # TODO: log exception
        # something went wrong with the request
        return abort(400, str(e))
    else:
        # TODO: return the response
        response = jsonify({
            "text": text,
            "predictedNerText": predictedNerText,
            "finish": finish
        })
        return response
