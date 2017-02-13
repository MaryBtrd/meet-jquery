/*Leny/meet-jquery
*
/src/js/scripts.js-Main scripts
*
*/
let iTrombinoCurrentIndex = 0,
    iTrombinoLength,
    $TrombinoFigures;

const fHandleTabClick = function( oEvent ) {
  oEvent.preventDefault();
  const $target = oEvent.currentTarget;
  if ( $target.parentNode.classList.contains( "active" ) ) {
    return;
  }
  document.querySelector( "ul.nav-tabs li.active" ).classList.remove( "active" );
  $target.parentNode.classList.add( "active" );
  document.querySelector( ".tab-content .tab-pane.active" ).classList.remove( "active" );
  document.getElementById($target.getAttribute( "data-tab-target" ) ).classList.add( "active" );

};
const fUpdateTrombino = function(){
  $TrombinoFigures[ iTrombinoCurrentIndex ].classList.add( "hide" );
  if( ++iTrombinoCurrentIndex === iTrombinoLength ){
    iTrombinoCurrentIndex = 0;
  }
  $TrombinoFigures[ iTrombinoCurrentIndex ].classList.remove( "hide" );
};
 // When page is loaded
window.addEventListener( "load", function(){
  //1. select a with rel=external attributes.
 Array.from(document.querySelectorAll( 'a[rel*="external"]' ) ).forEach( function( $elt ) {
     $elt.setAttribute( "target", "_new" );

   } );

   //2. tab mecanism
   Array.from( document.querySelectorAll( "ul.nav.nav-tabs a" ) ).forEach( function( $elt ) {
     $elt.addEventListener("click", fHandleTabClick);
   } );

   //3. trombinoscope
   document.querySelectorAll( "#trombino figure:not(:first-of-type)" ).forEach( function( $elt ){
     $elt.classList.add( "hide" );
   } );
   $TrombinoFigures = Array.from(document.querySelectorAll("#trombino figure"));
   iTrombinoLength = $TrombinoFigures.length;
   setInterval( fUpdateTrombino, 1500 );
 } );
