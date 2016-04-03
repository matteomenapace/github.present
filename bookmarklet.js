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
  $('.markdown-body table tr th, 
     .markdown-body table tr td')
  .css(
  {
    'padding':'1rem',
    'vertical-align': 'top'
  });

  /* TYPOGRAPHY */
  $('#readme .markdown-body, 
     .file')
  .css(
  {
    'font-family':'Lekton', 
    '-webkit-font-smoothing': 'antialiased'
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