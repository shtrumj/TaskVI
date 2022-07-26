import os
from flask_marshmallow import Marshmallow
from taskManager import create_app
app = create_app()

if __name__ == '__main__':
    app.run(debug=os.environ.get('DEBUG') == '1', host='0.0.0.0', port='80')
