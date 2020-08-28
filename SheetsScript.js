function GENDOTDAT(RANGE)
{
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var range = sheet.getRange(RANGE);
  
  var rangeValues = range.getValues().flat();
  const countOccurrences = (arr) => {
    const map = {};
    for ( var i = 0; i < arr.length; i++ ) {
      map[arr[i]] = ~~map[arr[i]] + 1;
    }
    return map;
  }

  //Create unique val vs. count map
  var counts = Object.entries(countOccurrences(rangeValues));
  
  //Now to make this a dot plot we need to add copies of the rows counting down to 1
  var dotCounts = [];
  for (var i = 0; i < counts.length; i++)
  {
    dotCounts.push(counts[i]);
    for (var j = 1; j < counts[i][1]; j++)
    {
      dotCounts.push([counts[i][0], counts[i][1] - j]);
    }
  }

  return dotCounts.map(x => [Number.parseFloat(x[0], 10), Number.parseFloat(x[1], 10)]);
}

function GENSTEM(RANGE, DECIMAL, LEAFM = 1, FLR = false)
{
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var range = sheet.getRange(RANGE);
  var rangeValues = range.getValues().flat();
  
  var bins = {};
  
  var precision = Math.pow(10, DECIMAL);
  
  for (var i = 0; i < rangeValues.length; i++)
  {
    var x = Number.parseFloat(rangeValues[i]);
    var bin = Math.floor(x / precision);
    var stem = (x % precision) * LEAFM;
    if (FLR) stem = Math.floor(stem);
    if (!bins.hasOwnProperty(bin)) bins[bin] = [];
    bins[bin].push(stem);
  }
  
  //Bin2Str
  var table = [];
  var binEntries = Object.entries(bins);
  
  for (var i = 0; i < binEntries.length; i++)
  {
    table.push([binEntries[i][0], binEntries[i][1].sort().join(' ')])
  }
  
  return table;
}