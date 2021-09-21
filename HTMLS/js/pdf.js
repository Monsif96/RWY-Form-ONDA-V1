const { PDFDocument } = PDFLib
async function SaveAsPDF() {
  
  // Fetch the PDF with form fields
  const url = './js/Doc.pdf';
  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

  // Load a PDF with form fields
  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  
  const form = pdfDoc.getForm()

  // Get all fields in the PDF by their names & Fill in the basic info fields
  const dateField = form.getTextField('date')
  dateField.setText('09/20/2021')

  const idempField = form.getTextField('id_emp')
  var Id = document.getElementById("idplace").value;
  idempField.setText(Id)
  
  //const sdateField = form.getTextField('Text-sdate')
  //const idpisteField = form.getTextField('Text-idpiste')

  
  // 
  
  
  //sdateField.setText('09201200')
  //idpisteField.setText('27')

  const pdfBytes = await pdfDoc.save()
  download(pdfBytes, "pdf-doc_example.pdf", "application/pdf");
}