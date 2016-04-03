javascript:(function()
{

  /* hide unneccessary elements */
  $('.header, .pagehead, .repository-sidebar, .commit-tease, .file-wrap, .boxed-group>h3, .site-footer, .file-navigation, .file-header')
  .css(
  {
    'display':'none'
  });

  /* general rules for the "body" */
  $('#readme .markdown-body, .file')
  .css(
  {
    'border':'none', 
    'padding': '0'
  });

  /* images */
  $('img')
  .css(
  {
    'max-width': '100%',
    'vertical-align': 'middle'
  });

  /* tables */
  $('th, td', '.markdown-body table tr')
  .css(
  {
    'padding':'1rem',
    'vertical-align': 'top'
  });

  /* TYPOGRAPHY */
  $('#readme .markdown-body, .file')
  .css(
  {
    'font-family':'Lekton', 
    '-webkit-font-smoothing': 'antialiased'
  });

  /* headings */
  $('h1, h2', '.markdown-body')
  .css(
  {
    'border-bottom':'none'
  });

  $('.highlight pre, code', '.markdown-body')
  .css(
  { 
    'background-color':'#E0E0E0', 
    'word-break':'break-word'
  });
  
  /* print-only stuff */
  $('h1', '.markdown-body')
  .css(
  {
    'page-break-before': 'always'
  }); 
  $('h1:first-child', '.markdown-body')
  .css(
  {
    'page-break-before': 'avoid'
  }); 

  $('pre, blockquote')
  .css(
  {
    'page-break-inside': 'avoid'
  });

}())