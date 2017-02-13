/*Leny/meet-jquery
*
/src/js/scripts.js-Main scripts
*
*/

window.addEventListener( "load", function(){
  //1. select a with rel=external attributes.
 Array.from(document.querySelectorAll( 'a[rel*="external"]' ) ).forEach( function( $elt ){
   $elt.addEventListener ("click", function( oEvent ) {
     $elt.setAttribute( "target", "_new" );
    ;
   } );

 } );

})
