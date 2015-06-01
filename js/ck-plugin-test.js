
//CKEDITOR.config.extraAllowedContent = 'hr {*}(*)';
CKEDITOR.replace( 'toEdit' );

CKEDITOR.instances["toEdit"].on('change', function() { 
	console.log(CKEDITOR.instances.toEdit.getData()); 
});