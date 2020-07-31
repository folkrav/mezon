import os
from . import create_app 

app = create_app()
is_dev = os.getenv("ENVIRONMENT", "production") == "development"
app.run(host="0.0.0.0", debug=is_dev)
