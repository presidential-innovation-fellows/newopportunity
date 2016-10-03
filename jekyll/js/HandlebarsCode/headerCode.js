Handlebars.registerPartial('header', 

 '   <header >    '  + 
 '     <a class="usa-skipnav" href="#main-content">Skip to main content</a>  '  + 
 '     <div class="ood-nav">  '  + 
 '       <div class="usa-nav-container">  '  + 
 '         <div class="usa-navbar">  '  + 
 '           <button class="usa-menu-btn">Menu</button>  '  + 
 '           <div class="usa-logo" id="logo">  '  + 
 '             <em class="usa-logo-text">  '  + 
 '               <a href="#" accesskey="1" title="Home" aria-label="Home">The Opportunity Project</a>  '  + 
 '             </em>  '  + 
 '           </div>  '  + 
 '         </div>  '  + 
 '         <nav role="navigation" class="usa-nav">  '  + 
 '           <button class="usa-nav-close">  '  + 
 '             <img src="designstandards/assets/img/close.svg" alt="close">  '  + 
 '           </button>  '  + 
 '           <ul class="usa-nav-primary usa-accordion">  '  + 
 '             <li>  '  + 
 '               <a href="index.html"><button class="  '  + 
 '                usa-nav-link" aria-expanded="false">  '  + 
 '                 <span>Home</span>  '  + 
 '               </button></a>  '  + 
 '                 '  + 
 '             </li>  '  + 
 '             <li>  '  + 
 '               <a href="feature.html">  '  + 
 '                 <button class="usa-nav-link" aria-expanded="false">  '  + 
 '                 <span>Projects</span>  '  + 
 '                 </button></a>  '  + 
 '                 '  +  
 '             </li>  '  + 
 '             <li>  '  + 
 '               <a class="usa-nav-link" href="build.html">  '  + 
 '                 <button class="usa-nav-link" aria-expanded="false">  '  +
 '                 <span>Build</span>  '  + 
 '                 </button>' +
 '               </a>  '  + 
 '             </li>  '  + 
 '             <li>  '  + 
 '               <button class="usa-accordion-button usa-nav-link" aria-expanded="false" aria-controls="sidenav-2">  '  + 
 '                 <span><a href="http://eepurl.com/cd6yor">Join</a></span>  '  + 
 '               </button>  '  + 
 '             </li>  '  + 
 '               '  + 
 '           </ul>  '  + 
 '            '  + 
 '         </nav>  '  + 
 '       </div>  '  + 
 '       </div>  '  + 
 '     </header>  ')

var data = {};
var template = Handlebars.compile($('#header-template').html());
var html = template(data);
$(document.body).prepend(html);