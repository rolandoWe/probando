

$(document).ready(function(){
   $.ajax({
    url:'includes/nav.php',
    type:'GET',
    success:function(s){
        $('.navbar').html(s)
    }
   })
   $.ajax({
    url:'includes/header.php',
    type:'GET',
    success:function(resp){
        $('.header').html(resp)
    }
   })
})