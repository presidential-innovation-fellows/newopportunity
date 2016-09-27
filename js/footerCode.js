Handlebars.registerPartial('footer',  
 '    <footer class="usa-footer usa-footer-medium usa-sans usa-background-dark">  '  + 
 '       <div class="usa-footer-secondary_section">  '  + 
 '         <div class="usa-grid-full">  '  + 
 '           <div class="usa-footer-logo usa-width-two-thirds">  '  + 
 '             <a href="https://www.census.gov"  '  + 
 '                ><img class="usa-footer-logo-img"  '  + 
 '                      src="img/logos/census.png"  '  + 
 '                      alt="Census Bureau Logo"></a>  '  + 
 '             <a href="http://www.hud.gov"  '  + 
 '                ><img class="usa-footer-logo-img"  '  + 
 '                      src="img/logos/hud.png"  '  + 
 '                      alt="HUD Logo"></a>  '  + 
 '             <a href="https://www.commerce.gov"  '  + 
 '                ><img class="usa-footer-logo-img"  '  + 
 '                      src="img/logos/commerce.png"  '  + 
 '                      alt="Commerce Logo"></a>  '  + 
 '             <a href="https://presidentialinnovationfellows.gov"  '  + 
 '                ><img class="usa-footer-logo-img"  '  + 
 '                      src="img/logos/pif.png"  '  + 
 '                      alt="PIF Logo"></a>  '  + 
 '             <h3><a href="http://www.census.gov/privacy/">Data Protection and Privacy Policy</a></h3>  '  + 
 '           </div>  '  + 
 '     '  + 
 '           <div class="usa-footer-contact-links usa-width-one-third">  '  + 
 '             <h3 class="usa-footer-contact-heading">The Opportunity Project</h3>  '  + 
 '             <p>  '  + 
 '               <a href="http://opportunity.census.gov">http://opportunity.census.gov</a>  '  + 
 '               <br>  '  + 
 '               <a href="https://github.com/uscensusbureau/opportunity">Visit on GitHub<i class="fa fa-github fa-fw"></i></a>  '  + 
 '             </p>  '  + 
 '           </div>  '  + 
 '         </div>  '  + 
 '       </div>  '  + 
 '     </footer>  ')

var data = {};
var template = Handlebars.compile($('#footer-template').html());
var html = template(data);
$(document.body).append(html);