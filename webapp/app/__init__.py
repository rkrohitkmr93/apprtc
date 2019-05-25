from flask import Flask, render_template, url_for
import datetime
app = Flask(__name__)

@app.route('/')
def index_template():
    """Serve index page"""
    return render_template('index_template.html', room = 'default')
    

    
#@app.route('/join', methods=['POST'])
#def process():
    # Retrieve the HTTP POST request parameter value from 'request.form' dictionary
    #room_number = request.form.get('room-selection')  # get(attr) returns None if attr is not present
 
    # Validate and send response
    #if _username:
        #return render_template('j2_response.html', username=_username)
    #else:
        #return 'Please go back and enter your name...', 400  # 400 Bad Request



# Register blueprint(s)
#app.register_blueprint(auth_module)


#if __name__ == '__main__':
    #app = socketio.Middleware(sio, app)
    #eventlet.wsgi.server(eventlet.listen(('', 8080)), app)
