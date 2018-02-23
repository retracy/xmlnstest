var X2JS = require('x2js');
var format = require('xml-formatter');

var x2js = new X2JS();

var jobj = {
    Edits: {
        _xmlns: 'http://www.example.org',
        '_xmlns:a': 'http://testing',
        Edit: [
            {
                'a:AssetId': 1,
                Name: "Dr. Strangelove"
            },
            {
                AssetId: 2,
                Name: "Citizen Kane"
            }
        ]
    }
};

var xmlstr = format(x2js.js2xml(jobj));

console.log(xmlstr);
