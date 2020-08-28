# GSheetDotPlot
A script that adds dot plot data formatting and stem and leaf plot generation for google sheets.

#### How to use

##### Install
1. Click the Tools menu and select Script editor.
2. Add the contents of SheetsScript.js to the editor and press ctrl-s to save it.

##### Dot plot

1. In a cell table create a formula by typing =GENODAT("A1:A10") replace the range A1:A10 with the correct range, make sure to keep the quotation marks.
2. Finally create a scatter plot with the newly created data and customize it!

##### Stem and leaf
1. In a cell table create a formula by typing =GENSTEM("A1:A10",0,10, true) replace the range A1:A10 with the correct range, make sure to keep the quotation marks.
GENSTEM takes a few arguments:
1. Range [string/googlesheets range]
2. Binning precision (what decimal place to create the seperation at) [int]
3. Leaf multiplier (the number to multiply the leaf by) [float]
4. Use rounding [true/false]
