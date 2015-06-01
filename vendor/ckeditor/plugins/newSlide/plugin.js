CKEDITOR.plugins.add( 'newSlide', {
    icons: 'newslide',
    init: function( editor ) {
        //Plugin logic goes here.
        var pluginDirectory = this.path;
        editor.addContentsCss( pluginDirectory + 'styles/newSlide.css' );
        editor.addCommand( 'newSlide', {
					allowedContent: 'hr[class]',
    			exec: function( editor ) {
		        editor.insertHtml( '<hr class="newSlide" />' );
		    	}
				});
				editor.ui.addButton( 'newslide', {
				    label: 'New Slide',
				    command: 'newSlide',
				    toolbar: 'insert,100'
				});
    }
});


	

