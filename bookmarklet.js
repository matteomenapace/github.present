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
	padding: 2.5em 2em; 
}

.repository-with-sidebar .repository-content 
{ 
	float: none; 
	width: auto; 
}

#readme .markdown-body 
{ 
	font-size: 2.5em; 
	border: none; 
	padding: 0; 
}

/* PARAGRAPHS */

.markdown-body p, li 
{
	margin-bottom: 1em; 
	font-size: 1.5em;
}

/* BLOCK QUOTES */

.markdown-body blockquote 
{
    padding: 1em;
    color: #444;
    border-left: .25em solid #ddd;
    background: whitesmoke;
}

/* HEADINGS */

.markdown-body h1 
{ 
	font-size: 6em; 
}

.markdown-body h2 
{ 
	font-size: 5em; 
}

.markdown-body h3
{
	font-size: 4em; 	
}

.markdown-body h4 
{ 
	font-size: 3em;  
}

.markdown-body h5 
{ 
	font-size: 2em;  
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
	margin-bottom: 1em; 
	line-height: 1.2; 
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
} 

.markdown-body kbd 
{ 
	font: inherit; 
	line-height: inherit; 
	padding: .25em .5em; 
}
  
  
';

var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    
document.head.appendChild(style);
 
}())
