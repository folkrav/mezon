from flask import Flask
from flask_restful import Resource, Api


class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    api = Api(app)


    api.add_resource(HelloWorld, '/')
    return app
