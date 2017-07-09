var fs = require('fs');

var writeHelper = function() {
	fs.writeFile("./jasmineHelperOutput.txt", "Hey there!", function(err) {

		if (err) {
			return console.log(err);
		}

	})
};

exports.writeHelper = writeHelper;