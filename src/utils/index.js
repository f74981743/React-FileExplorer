export function convertSizeUnit(size) {
    var target = size,
        unit;

    if (size < Math.pow(2, 10)) {
        //bytes
        unit = 'B';
    } else if (size < Math.pow(2, 20)) {
        //KB
        target = target / Math.pow(2, 10);
        unit = 'KB';
    } else if (size < Math.pow(2, 30)) {
        //MB
        target = target / Math.pow(2, 20);
        unit = 'MB';
    } else if (size < Math.pow(2, 40)) {
        //GB
        target = target / Math.pow(2, 30);
        unit = 'GB';
    } else {
        //TB
        target = target / Math.pow(2, 40);
        unit = 'TB';
    }

    var num = new Number(target);
    num = num.toFixed(2);

    return num.toString() + ' ' + unit;

}

export function convertTimestamp(timestamp) {
  var d = new Date(timestamp * 1000),	// Convert the passed timestamp to milliseconds
		yyyy = d.getFullYear(),
		mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
		dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
		hh = d.getHours(),
		h = hh,
		min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
		ampm = 'AM',
		time;
			
	if (hh > 12) {
		h = hh - 12;
		ampm = 'PM';
	} else if (hh === 12) {
		h = 12;
		ampm = 'PM';
	} else if (hh == 0) {
		h = 12;
	}
	
	// ie: 2013-02-18, 8:35 AM	
	time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
		
	return time;
}