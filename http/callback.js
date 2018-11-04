function l(something){
	console.log(something);
}
function a(callback,something){
	something +='is cool';
	callback(something)	
}

a(l,'nodejs');
a(function(something){
	console.log(something)
},'jade');

