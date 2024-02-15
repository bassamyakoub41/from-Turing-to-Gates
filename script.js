$(document).ready(function(){
    $('.timg1,.timg2,.timg3').click(function(){
        var altPic= $(this).attr('alt-pic');
        $(this).attr('src',altPic);
        });
});