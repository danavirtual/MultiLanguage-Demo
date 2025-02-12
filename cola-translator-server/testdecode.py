import base64
import PyPDF2

# read a pdf file and return it as BAS64 encoded string
udi = '123'
data = {}
with open ("123.pdf", "rb") as pdf_file:
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
    # print("Encoded String:", encoded_string)
    
# Decoding
    decoded_bytes = base64.b64decode(encoded_string.encode('utf-8'))
    decoded_string = decoded_bytes.decode('utf-8')
    print(f"Decoded String:\n{decoded_string}")