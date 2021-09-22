const { PDFDocument } = PDFLib;

async function SaveAsPDF() {

  /// Variables
  var Id = document.getElementById("idplace").value;
  var Idpiste = document.getElementById("idpiste").value;
  var lrc_1 = document.getElementById("1LRC").value;
  var time = document.getElementById("time").value;
    var MM = time.slice(5, 7);
    var DD = time.slice(8, 10);
    var HH = time.slice(11, 13);
    var mm = time.slice(14, 16);
    TIME = MM+DD+HH+mm;
    time = time.slice(0, 10);

  var RWYCC1 = document.getElementById("RWYCC1").value;
  var RWYCC2 = document.getElementById("RWYCC2").value;
  var RWYCC3 = document.getElementById("RWYCC3").value;
  var pRWYCC1 = document.getElementById("pRWYCC1").value;
  var pRWYCC2 = document.getElementById("pRWYCC2").value;
  var pRWYCC3 = document.getElementById("pRWYCC3").value;
  var Desc1 = document.getElementById("Desc1").value;
  var Desc2 = document.getElementById("Desc2").value;
  var Desc3 = document.getElementById("Desc3").value;
  var epaisseur1 = document.getElementById("epaisseur1").value;
  var epaisseur2 = document.getElementById("epaisseur2").value;
  var epaisseur3 = document.getElementById("epaisseur3").value;
  var largeur1 = document.getElementById("largeur1").value;
  var longueur = document.getElementById("longueur").value;
  var lrc_2 = document.getElementById("2LRC").value;
  var neige = document.getElementById("neige").value;
  var sable = document.getElementById("sable").value;
  var lrc_3 = document.getElementById("3LRC").value;
  var chimie = document.getElementById("chimie").value;
  var lrc_4 = document.getElementById("4LRC").value;
  var RWYcongere = document.getElementById("RWYcongere").value;
  var Dis1 = document.getElementById("Dis1").value;
  var lrc_5 = document.getElementById("5LRC").value;
  var lrc_6 = document.getElementById("6LRC").value;
  var TWYcongere = document.getElementById("TWYcongere").value;
  var Dis2 = document.getElementById("Dis2").value;
  var lrc_7 = document.getElementById("7LRC").value;
  var RWYcongere2 = document.getElementById("RWYcongere2").value;
  var lrc_8 = document.getElementById("8LRC").value;
  var TWY = document.getElementById("TWY").value;
  var TWYstate = document.getElementById("TWYstate").value;
  var AIREstate = document.getElementById("AIREstate").value;
  var Extra = document.getElementById("Extra").value;

  // Fetch the PDF with form fields
  const url = './js/RCR_Form.pdf';
  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

  // Load a PDF with form fields
  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  
  const form = pdfDoc.getForm()

  // PAGE 1: Get all fields in the PDF by their names & Fill in the basic info fields
  const dateField = form.getTextField('date')
  dateField.setText(time)

  const idempField = form.getTextField('id_emp')
  idempField.setText(Id)
  
  const sdateField = form.getTextField('sdate')
  sdateField.setText(TIME)

  const idpisteField = form.getTextField('id_piste')
  idpisteField.setText(Idpiste+lrc_1)

  const rwField1 = form.getTextField('rwycc_1')
  rwField1.setText(RWYCC1)

  const rwField2 = form.getTextField('rwycc_2')
  rwField2.setText(RWYCC2)
  
  const rwField3 = form.getTextField('rwycc_3')
  rwField3.setText(RWYCC3)

  const desField1 = form.getTextField('Desc_1')
  desField1.setText(Desc1)

  const desField2 = form.getTextField('Desc_2')
  desField2.setText(Desc2)

  const desField3 = form.getTextField('Desc_3')
  desField3.setText(Desc3)

  const pField1 = form.getTextField('%_1')
  pField1.setText(pRWYCC1)

  const pField2 = form.getTextField('%_2')
  pField2.setText(pRWYCC2)

  const pField3 = form.getTextField('%_3')
  pField3.setText(pRWYCC3)

  const eField1 = form.getTextField('epai_1')
  eField1.setText(epaisseur1)

  const eField2 = form.getTextField('epai_2')
  eField2.setText(epaisseur2)

  const eField3 = form.getTextField('epai_3')
  eField3.setText(epaisseur3)

  const larField = form.getTextField('largeur')
  larField.setText(largeur1)

  // PAGE 2 : Get all fields in the PDF by their names & Fill in the basic info fields

  const lonField = form.getTextField('longueur')
  lonField.setText(longueur+lrc_2)

  const neiField = form.getTextField('Neige')
  neiField.setText(neige)

  const sableField = form.getTextField('sable')
  sableField.setText(sable+lrc_3)

  const chimieField = form.getTextField('chimique')
  chimieField.setText(chimie+lrc_4)

  const con_pisteField = form.getTextField('Con_piste')
  con_pisteField.setText(RWYcongere+lrc_4)

  const distField1 = form.getTextField('Dist_1')
  distField1.setText(Dis1+lrc_6)

  const distField2 = form.getTextField('Con_twy')
  distField2.setText(TWYcongere)

  const distField3 = form.getTextField('Dist_2')
  distField3.setText(Dis2+lrc_7)

  const con_p_pisteField = form.getTextField('Con_proche_piste')
  con_p_pisteField.setText(RWYcongere2+lrc_8)

  const id_twyField = form.getTextField('id_twy')
  id_twyField.setText(TWY)

  const etat_twyField = form.getTextField('Etat_twy')
  etat_twyField.setText(TWYstate)

  const air_traficField = form.getTextField('air_traffic')
  air_traficField.setText(AIREstate)

  const commentField = form.getTextField('comment')
  commentField.setText(Extra)

  const pdfBytes = await pdfDoc.save()
  download(pdfBytes, `RCR_${time}.pdf`, "application/pdf");
}