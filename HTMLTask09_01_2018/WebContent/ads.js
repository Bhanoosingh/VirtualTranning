function testJS() {

	var value1 = document.getElementById('productid').value;
	var value2 = document.getElementById('productname').value;
	var value3 = document.getElementById('productprice').value;
	var value4 = document.getElementById('productquantity').value;

	var queryString = "?productid=" + value1 + "&productname=" + value2+ "&productprice=" + value3+ "&productquantity=" + value4;
	window.location.href = "productdisplay.html" + queryString;

}