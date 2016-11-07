javascript:(function()
{

var css =    
'
  
/* HIDE STUFF */

.header, 
.pagehead, 
.repository-meta,
.overall-summary,
.file-navigation,
.repository-sidebar, 
.commit-tease, 
.file-wrap, 
.boxed-group>h3, 
.site-footer, 
.file-header,
.btn-group.right,
.branch-select-menu
{ 
	display: none; 
}

/* GENERAL RULES */

body 
{ 
	color: inherit; 
} 

.markdown-body, 
.file 
{ 
	font-family: "Lekton"; 
	border: none; 
} 

.container 
{ 
	width: 100%; 
	padding: 2.5rem 2rem; 
}

.repository-with-sidebar .repository-content 
{ 
	float: none; 
	width: auto; 
}

#readme .markdown-body 
{ 
	/*font-size: 2.5em; */
	border: none; 
	padding: 0; 
}

.markdown-body p, 
.markdown-body li,
.markdown-body blockquote,
.markdown-body table
{
	font-size: 4rem;
}

.markdown-body p, 
.markdown-body blockquote, 
.markdown-body ol, 
.markdown-body ul,
.markdown-body table	
{
    	margin-bottom: 16rem;
}

.markdown-body li 
{
	margin-bottom: 1em;
}	

/* BLOCK QUOTES */

.markdown-body blockquote 
{
    padding: 2rem;
    color: #444;
    border-left: .5rem solid #ddd;
    background: whitesmoke;
}

/* LINKS */

a 
{
    font-weight: 700;
    color: #00dfb7;
    transition: 0.6s;
    /*background: transparent;*/
}  

a:hover, a:active
{
    text-decoration: none;
    color: black;	
    /*border-bottom: 2px solid;*/
    /*background: #00a5e5;
    color: white;*/
}  

/* HEADINGS */

.markdown-body h1 
{ 
	font-size: 12rem; 
}

.markdown-body h2 
{ 
	font-size: 10rem; 
}

.markdown-body h3
{
	font-size: 8rem; 	
}

.markdown-body h4 
{ 
	font-size: 6rem;  
}

.markdown-body h5 
{ 
	font-size: 4rem;  
}

.markdown-body h2,
.markdown-body h1 
{ 
	border-bottom: none; 
}

/*.markdown-body h3,
.markdown-body h4,
.markdown-body h5
{ 
	font-weight: normal; 
}*/

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5 
{ 
	font-family: "Roboto",-apple-system-font,"Helvetica Neue",Helvetica,Arial,sans-serif;
	font-weight: 900;
	margin-top: 4em; 
	margin-bottom: 2em; 
	line-height: 1.2; 
}

/* LISTS */

.markdown-body > ul, 
.markdown-body > ol 
{
    	padding-left: 6em;
	margin-top: -12rem;
}

/* CHECKBOXES */

[type=checkbox] 
{
    /*transform: scale(4);
    position: relative;*/
    left: -3em;
    -webkit-appearance: none;
    border: 1px solid grey;
    width: 1em;
    height: 1em;
    border-radius: .2em;
    transition: background,border-color 0.3s;
    outline: none;
    cursor: pointer;
}

[type=checkbox]:checked
{
	background: #00a5e5;
	border-color: #00a5e5;
}
	
/* EMOJI */
	
g-emoji
{
	font-size:inherit;
	margin-right: 0;
}
	
/* TABLES */	

.markdown-body table
{
	display: table;
}
	
.markdown-body table td
{
	padding: 1rem;
	padding-top: 1.2rem;
}
	
/* CODE */

.markdown-body .highlight pre, 
.markdown-body code 
{ 
	background-color: #E0E0E0; 
	word-break: break-word; 
} 

.markdown-body .highlight pre, 
.markdown-body code, 
.markdown-body kbd 
{ 
	font-family: "Source Code Pro"; 
	font-size: 4rem;
} 

.markdown-body .highlight pre 
{
	padding: 0.5em .75em;
	margin-bottom: 7.5rem;
	white-space: pre-wrap;
	white-space: -moz-pre-wrap;
 	white-space: -pre-wrap;
 	white-space: -o-pre-wrap;
 	word-wrap: break-word;
}

/* variables */ 
/*.pl-smi,
.pl-c1
{
	color: #6cc644;	
}*/

.markdown-body kbd 
{ 
	font: inherit; 
	line-height: inherit; 
	padding: .5rem 1rem; 
}
  
  
';

var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    
document.head.appendChild(style);

/* enable all checkboxes */
var inputs = document.getElementsByTagName("INPUT");
for (var i=0; i<inputs.length; i++)
{
	var input = inputs[i];
	if (input.type == "checkbox")
	{
		input.disabled = false;
	}
}
	
	
/* fix images */	
var images = document.querySelectorAll(".markdown-body img");
for (var i=0; i<images.length; i++)
{
	var image = images[i];
	image.style.display = 'none';
	
	var parent = image.parentElement;
	parent.style.backgroundImage = 'url(' + image.src + ')';
	parent.style.width = '100%';
    	parent.style.height = '100vh';
    	parent.style.display = 'block';
    	parent.style.backgroundSize = 'contain';
    	parent.style.backgroundRepeat = 'no-repeat';
    	parent.style.backgroundPosition = 'center';

}
	
}())
