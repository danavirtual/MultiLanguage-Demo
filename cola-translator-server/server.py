# server.py (Flask)
import base64
from flask import Flask, jsonify, request
from flask_cors import CORS
import PyPDF2

app = Flask(__name__)
CORS(app)

@app.route('/api/mock-fetch-pdf')
def get_data():
    udi = request.args.get('udi')
    print(f"Got  UDI : {udi}") 

    data = {'message': f"UDI {udi}"}
    # read a pdf file and return it as BAS64 encoded string
    # with open(f"{udi}.pdf", 'rb') as pdf_file:
    #     encoded_string = base64.b64encode(pdf_file.read()).decode('utf-8')
    #     data['pdf'] = encoded_string
    data = {}
    encoded_string = ''
    datafolder = './data'
    documentname = f"{datafolder}/document-{udi}.pdf"
    with open(documentname, "rb") as pdf_file:
        pdf_reader = PyPDF2.PdfReader(pdf_file)
        num_pages = len(pdf_reader.pages)
        text = ""          
        print(f"Number of pages : {num_pages}")
        for pg in range(num_pages):
            page = pdf_reader.pages[pg]
            text += page.extract_text()
        print(f"Original String:\n{text}")
        # Encoding
        textbytes = bytearray(text, 'utf-8')
        encoded_string = base64.b64encode(textbytes).decode('utf-8')
        data['pdf'] = encoded_string
        print("Encoded String:", encoded_string)
        # return the base64 encoded string
    return jsonify({'id': udi
                    ,'name' : documentname
                    ,'base64Data' : encoded_string})
    
if __name__ == '__main__':
    app.run(port=3000, debug=True)
