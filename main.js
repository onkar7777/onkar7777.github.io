$(document).ready(function(){
    $(function() {
        $('#toggle-two').bootstrapToggle({
          on: 'Enabled',
          off: 'Disabled'
        });
      })
    // console.log(window.location.pathname.split("/").pop())
     var urlLoc  = window.location.pathname.split("/").pop();
 //console.log(urlLoc)
     if(urlLoc == 'index.html'){
        $('#Link-setting1').addClass("active");
     }
     if(urlLoc == 'settings.html'){
        $('#Link-setting2').addClass("active");
     }
     if(urlLoc == 'import.html'){
      $('#Link-setting3').addClass("active");
   }
     if(urlLoc == 'appearance.html'){
      $('#Link-setting4').addClass("active");
   }
   if(urlLoc == 'export.html'){
    $('#Link-setting5').addClass("active");
 }
 $('[data-toggle="offcanvas"]').click(function(){
     $("#navigation").toggleClass("hidden-xs");
 });

//     $("#Link-setting").click(function(){
//     $('#Link-setting').addClass("active");
//     alert("hi")
//   });
});