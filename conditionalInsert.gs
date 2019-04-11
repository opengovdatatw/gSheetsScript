function ConditionalInsert() 
{
  var ss = SpreadsheetApp.getActiveSpreadsheet();  // the current spread sheet
  var sheet = ss.getSheets()[0];                   // the current sheet page

  var i;  // decreasing style
  for (i = 56; i >= 4; i--) // Deal with row-56 ~ row-4
  {
    // get the number of agencies
    var range = sheet.getRange(i, 54);  // set range
    var numAgency = range.getValues();  // get content
    
    if (numAgency > 1)  // if number of agency == 1, do nothing
    {
      // get the node-ID
      var range = sheet.getRange(i, 53);  // set range
      var nodeID = range.getValues();     // get content
      
      // Copy the names
      var j;                           // there are j agencies in this row
      for (j = 1; j <= numAgency; j++) // Do it (numAgency) times
      {
        sheet.insertRowAfter(i+j-1)    // Insert a row after the tail of this suggest
        
        // copy the names of agencies
        var range = sheet.getRange(i, 54 + j);          // set range
        var nameAgency = range.getValues();             // get the name
        sheet.getRange(i + j, 5).setValue(nameAgency);  // copy the name to the newly generated row
        
        // re-index the new row
        var newNodeID = nodeID + "_" + j;               // the format is "86086_1"
        sheet.getRange(i + j, 3).setValue(newNodeID);   // set new node-ID on the newly generated row
        sheet.getRange(i + j, 53).setValue(newNodeID);  // set new node-ID on the newly generated row 
      }
    }
  }
}
