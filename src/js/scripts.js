/*Leny/meet-jquery
*
/src/js/scripts.js-Main scripts
*
*/
const fHandleTabClick = function( oEvent ) {
  oEvent.preventDefault();
  const $target = oEvent.currentTarget;
  if ( $target.parentNode.classList.contains( "active" ) ) {
    return;
    console.log( "Tab is already active !");
  }
  document.querySelector( "ul.nav-tabs li.active" ).classList.remove( "active" );
  $target.parentNode.classList.add( "active" );
  document.querySelector( ".tab-content .tab-pane.active" ).classList.remove( "active" );
  document.getElementById($target.getAttribute( "data-tab-target" ) ).classList.add( "active" );
  console.log("Tab clicked!" );

};

window.addEventListener( "load", function(){
  //1. select a with rel=external attributes.
 Array.from(document.querySelectorAll( 'a[rel*="external"]' ) ).forEach( function( $elt ) {
     $elt.setAttribute( "target", "_new" );

   } );

   //2. tab mecanism
   Array.from( document.querySelectorAll( "ul.nav.nav-tabs a" ) ).forEach( function( $elt ) {
     $elt.addEventListener("click", fHandleTabClick);
   } );

 } );
