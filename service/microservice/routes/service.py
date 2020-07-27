# Embedding Route
# Routes related to creatiung text embeddings

import os
import sys
from io import BytesIO
from flask import (
    Blueprint, flash, g, redirect, request, Response, session, url_for, jsonify, make_response, render_template, current_app as app
)
from flask_cors import CORS, cross_origin
from werkzeug.exceptions import abort
from werkzeug.utils import secure_filename
from microservice.src.engine import tag_news_article, tag_document

#################################################
# Initialize the models
#################################################

# TODO: include the model initialization function

#################################################
# Setup the embeddings blueprint
#################################################

# TODO: provide an appropriate route name and prefix
bp = Blueprint('service', __name__, url_prefix='/midas/api/v1/service')
ap = Blueprint('view', __name__, url_prefix='/midas',
               static_folder='microservice/static', template_folder='microservice/templates')

ALLOWED_EXTENSIONS = {'txt'}
cwd = os.getcwd()
print("98", cwd, file=sys.stdout)


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/midas/')
def index():
    # TODO: provide an appropriate output
    return render_template("index.html")


@app.route('/midas/second', methods=['GET', 'POST'])
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


@app.route('/midas/api/v1/service/predict', methods=['POST'])
@cross_origin()
def predict():
    # TODO: assign the appropriate variables
    variable = None
    # print(request.method, file=sys.stdout)
    if request.method == 'POST':
        # retrieve the text posted to the route
        print(request.json, file=sys.stdout)
        variable = request.json['text']
        lang = request.json['lang'] if 'lang' in request.json else 'en'
        level = request.json["level"] if 'level' in request.json else -1
    else:
        # TODO: log exception
        return abort(405)
    try:
        # TODO: add the main functionality with the model and variable
        # tag_named_entities(variable)
        text, predictedNerText = tag_document(variable, level)
        finish = True
        print(predictedNerText, file=sys.stdout)

    except Exception as e:
        # TODO: log exception
        print(e, file=sys.stdout)
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


@app.route('/midas/api/v1/service/predict/link', methods=['POST'])
@cross_origin()
def predictlink():
    # TODO: assign the appropriate variables
    variable = None
    print(request.method, file=sys.stdout)
    if request.method == 'POST':
        # retrieve the text posted to the route
        # print(request.json, file=sys.stdout)
        variable = request.json['text']
        lang = request.json['lang'] if 'lang' in request.json else 'en'
        level = request.json["level"] if 'level' in request.json else -1

    else:
        # TODO: log exception
        return abort(405)
    try:
        # TODO: add the main functionality with the model and variable
        text,  predictedNerText = tag_news_article(variable, level)
        finish = True
        # print(predictedNerText, file=sys.stdout)
    except Exception as e:
        print(e, file=sys.stdout)
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


@app.route('/midas/api/v1/service/predict/upload', methods=['POST'])
@cross_origin()
def predictfile():
    print("1", request.method, request.files, file=sys.stdout)
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            print("2", request.files, file=sys.stdout)
            return 'no file!', 400
            # return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            print("3", request.files, file=sys.stdout)
            return 'no file!', 400
        if file and allowed_file(file.filename):
            lang = request.form['lang'] if 'lang' in request.form else 'en'
            level = request.form.get(
                "level", type=int) if 'level' in request.form else -1
            print("-1", request.form, file=sys.stdout)

            filename = secure_filename(file.filename)
            data = file.read()
            _, response = tag_document(data.decode("utf-8"), level)

            print("sending file...", response, file=sys.stdout)

            resp = make_response(str(response))
            resp.headers["Content-Disposition"] = "attachment; filename=export.csv"
            resp.headers["Content-Type"] = "text/csv"
            return resp
        else:
            print("4", request.files, file=sys.stdout)
            # TODO: log exception
            return 'Wrong file extension!', 400
            # return abort(405)
    else:
        print("5", request.files, file=sys.stdout)
        # TODO: log exception
        return abort(405)
