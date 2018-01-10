
function grandtotal() {
	var value1 = document.getElementById('ProductPrice').value;
	var value2 = document.getElementById('ProductQuantity').value;
	var value3 = document.getElementById('CustomerCountry').value;
	var value4 = document.getElementById('ProductName').value;
	var value5 = document.getElementById('CustomerName').value;

	var total;
	
	total = value1 * value2;
	if (total > 10000 && value3 == 'India') {
		total = total - (total * 0.1);
	} else if (total > 10000 && value3 == 'USA') {
		total = total - (total * 0.05);
	}
	var queryString = "?CoustomerName=" + value5 + "&ProductName=" + value4
			+ "&TotalPrice=" + (value1*value2) + "&DiscountTotal=" + total;
	window.location.href = "productdisplay.html" + queryString;
}