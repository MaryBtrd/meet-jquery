/* leny/meet-jquery
 *
 * /src/js/script.js - Main script (jQuery Version)
 *
 * coded by leny@flatLand!
 * started at 13/02/2017
 */
const rEmailValidation = /([\w-\.]+)@((?:[\w]+\.)+)([a-z]{2,})/i;
let $tabs, $trombinoFigures, $commentForm, $emailInput, $nameInupt, $commentTextarea;

const fHandleTab = function( oEvent ) {
    let $this = $( this );

    oEvent.preventDefault();
    if ( $this.parent().hasClass( "active" ) ) {
        return;
    }
    $( "ul.nav.nav-tabs .active" ).removeClass( "active" );
    $this.parent().addClass( "active" );
    $( ".tab-pane.active" ).removeClass( "active" );
    $( `#${ $this.data( "tab-target" ) }` ).addClass( "active" );
};

const fHandleTrombino = function(){
  $trombinoFigures.filter(":visible").fadeOut( function(){
    let $next = $(this).next();
  if( $next.length === 0){
    $next = $trombinoFigures.first();
    }
    $next.fadeIn();
  } );
}


const fHandleFormValidation = function(oEvent){
  let bHasErrors = false,
    sEmail;
  //1. check email
  sEmail = ($emailInput.val() || "").trim();
  if( !rEmailValidation.test( sEmail ) ){
    console.error("Email isn't valid!" );
    bHasErrors = true;
  } else{
  console.info ("Email i valid!");
  }
  //console.log("email:", $emailInput.val() );

  //2. check name


  return false; /*événement ne continue pas (Form non validé)*/
};


$( function() {

    // 1. a with rel=external
    $( 'a[rel*="external"]' ).attr( "target", "_new" );

    // 2. tabs
   $( "ul.nav.nav-tabs a" ).on( "click", fHandleTab );

    // 3. trombinoscope

    $trombinoFigures = $( "#trombino figure");
    $trombinoFigures.hide().first().show();
    setInterval( fHandleTrombino, 1000 );

    // 4. handle form validation

    $commentForm = $ ("form" );
    $emailInput = $( "#inputEmail");
    $nameInupt = $("#inputName");
    $commentTextarea = $("#inputComment")
    $commentForm.on( "submit", fHandleFormValidation);
} );
