javascript:(function()
{

var css =    
'
  
/* HIDE STUFF */

.header, 
.pagehead, 
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

/* PARAGRAPHS */

.markdown-body p, li 
{
	margin-bottom: 2.5rem; 
	font-size: 4rem;
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
    color: #00a5e5;
    /*background: transparent;
    transition: 0.6s;*/
}  

a:hover, a:active
{
    text-decoration: none;
    border-bottom: 2px solid;
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

.markdown-body h3,
.markdown-body h4,
.markdown-body h5
{ 
	font-weight: normal; 
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5 
{ 
	margin-top: 4em; 
	margin-bottom: 2em; 
	line-height: 1.2; 
}

/* IMAGES  */
img:not(.emoji)
{
	height: 96vh;
    	margin: 2vh auto;
    	display: block;
}

/* LISTS */

.markdown-body > ul, 
.markdown-body > ol 
{
    padding-left: 6em;
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
 
}())
