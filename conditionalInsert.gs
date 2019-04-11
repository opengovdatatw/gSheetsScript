function ConditionalInsert() 
{
  var ss = SpreadsheetApp.getActiveSpreadsheet();  // the current spread sheet
  var sheet = ss.getSheets()[0];  // the current sheet page

  var i;  // decreasing style
  for (i = 56; i >= 4; i--) // var range = sheet.getRange(4, 50, 1256, 50);
  {
    // get the number of agencies
    var range = sheet.getRange(i, 54);  // set range
    var numAgency = range.getValues();  // get content
    
    if (numAgency > 1)
    {
      // get the node-ID
      var range = sheet.getRange(i, 53);  // set range
      var nodeID = range.getValues();     // get content
      
      // Copy the names
      var j;
      for (j = 1; j <= numAgency; j++) // Do it (numAgency) times
      {
        // Insert rows after the tail
        sheet.insertRowAfter(i+j-1) 
        
        // copy the names of agencies
        var range = sheet.getRange(i, 54 + j);  // set range
        var nameAgency = range.getValues();  // get the content
        sheet.getRange(i + j, 5).setValue(nameAgency);  // set the content  
        
        // re-index the new row
        var newNodeID = nodeID + "_" + j;
        sheet.getRange(i + j, 3).setValue(newNodeID);  // set the content
        sheet.getRange(i + j, 53).setValue(newNodeID);  // set the content 
      }
    }
  }
}
