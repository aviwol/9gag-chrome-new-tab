var main = function(){
    $.ajax({
        url: "http://infinigag.k3min.eu/trending",
        success: function(data) {
            $('#9gagcontent').html('<h1>'+data['data'][0]['caption']+'</h1><img src="'+ data['data'][0]['images']['normal']+'" height="450" width="450" /><br><br><a href="'+data['data'][0]['link']+'">Link to original post</a>');
        }   
    });
}

$(document).ready(main);