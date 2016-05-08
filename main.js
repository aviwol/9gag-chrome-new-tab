var main = function(){
    $.ajax({
        url: "http://infinigag.k3min.eu/trending",
        success: function(data) {
            if(!data['data'][0]['media']){
                html_text = '<h1>'+data['data'][0]['caption']+'</h1><img src="'+ data['data'][0]['images']['normal']+'" /><br><br><a href="'+data['data'][0]['link']+'">Link to original post</a>';
            }
            else{
                 html_text = '<h1>'+data['data'][0]['caption']+'</h1><video height="450" width="450" autoplay><source src="'+ data['data'][0]['media']['mp4']+'" type="video/mp4"></video><br><br><a href="'+data['data'][0]['link']+'">Link to original post</a>';
            }
            $('#9gagcontent').html(html_text);
        }   
    });
}

$(document).ready(main);
