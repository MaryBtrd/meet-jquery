/*Mary/Mett-jQuerry

*/
const fChangeTab = function( oEvent ) {
  oEvent.preventDefault();

  $tabs.parent().filter( ".active" ).removeClass( "active" );
  $( this ).parent().addClass ( "active" );
  $( ".tab-content .tab-pane.active" ).removeClass( "active" );
  $( `#${ $( this ).data( "tab-target" )}` ).addClass( "active" );
};

//called when DOM is ready.
$( function () {

  //1. link with rel=external
  $( 'a[rel*="external"]' ).Attr( "target", "_new");

  //2. tab
  ( $tabs = $( "ul.nav.nav-tabs a" )).on( "click", fChangeTab );
} );
