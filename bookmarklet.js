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
    'padding': '0 1rem'
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
  
  $('blockquote')
  .css(
  {
    'padding': '1rem 1.25rem',
    'color': 'inherit',
    'border-left': '4px solid rgb(255, 143, 4)',
    'position': 'relative',
    'margin-top': '2rem',
    'background': 'rgba(255, 143, 4, 0.2)'
  });
  
  var css =    'blockquote:before 
                {
                  content: "Your turn";
                  position: absolute;
                  color: #FF8F04;
                  top: -1.3rem;
                  left: -.3rem;
                  font-size: 83%;
                  font-weight: bold;
                }';
  
  var $style = $('<style>' + css + '</style>');
      $style.appendTo('head');
 
}())
