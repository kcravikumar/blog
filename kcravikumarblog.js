function myFunction(id) {
var children = $(id).children().children();

for (var i = 5; i < children.length; i++) {
    var currentChild = children.eq(i);

	if (currentChild.css('display') == 'none' )	 {
		currentChild.css('display', 'block');
		console.log('block ' + i) ;
	} else {
		currentChild.css('display', 'none');
		console.log('none ' + i) ;
	}
 }
}
