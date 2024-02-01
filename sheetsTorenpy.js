function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('renpy convert')
      .addItem('sheetrenpy', 'srenpy')
      .addToUi();
}
 
function srenpy() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = ss.getDataRange().getValues();

  if (data.length > 0){
    ss.getRange("E1:E").setFormula(`
    IFS(ISNONTEXT(B1) , "",
    B1="if" , SUBSTITUTE(CONCATENATE("#---if statemnt\n";B1;" ";C1;"\n"),char(10),char(13)),
    B1="menu" , SUBSTITUTE(CONCATENATE("#---menu\n";B1;":\n";C1;"\n"),char(10),char(13)),

    ISTEXT(B1) , SUBSTITUTE(SUBSTITUTE(CONCATENATE(B1;"    """;C1;""""),"\n","\n\n"),char(10),char(13))
      )`);

    ss.getRange("D1:D").setFormula(`IF(ISTEXT(A1) ,CONCATENATE("label ";A1;":"),"")`);  
      
      }

  }  
