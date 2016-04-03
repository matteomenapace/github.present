javascript:(function()
{

	/* hide unneccessary elements */
	$('.header, 
		 .pagehead, 
		 .repository-sidebar, 
		 .commit-tease, 
		 .file-wrap, 
		 .boxed-group>h3, 
		 .site-footer, 
		 .file-navigation, 
		 .file-header')
	.css(
	{
		'display':'none'
	});

	/* general rules for the "body" */
	$('#readme .markdown-body, 
		 .file')
	.css(
	{
		'font-family':'Lekton', 
		'border':'none', 
		'padding': '0'
	});

	/* headings */
	$('.markdown-body h1, 
		 .markdown-body h2')
	.css(
	{
		'border-bottom':'none'
	});

	$('.markdown-body .highlight pre, 
		 .markdown-body code')
	.css(
	{	
		'background-color':'#E0E0E0', 
		'word-break':'break-word'
	});
	
	/* print-only stuff */
	$('h1')
	.css(
	{
		'page-break-before': 'always'
	}); 
	
	$('pre, 
		 blockquote')
	.css(
	{
		'page-break-inside': 'avoid'
	});

}())