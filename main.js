var main = function(){
    $.ajax({
        url: "http://infinigag.k3min.eu/trending",
        success: function(data) {
            randomPost = data['data'][Math.floor(Math.random() * data['data'].length)];
            if(!randomPost['media']){
                html_text = '<h1>'+randomPost['caption']+'</h1><img src="'+ randomPost['images']['normal']+'" /><br><br><a href="'+randomPost['link']+'">Link to original post</a>';
            }
            else{
                 html_text = '<h1>'+randomPost['caption']+'</h1><video height="450" width="450" autoplay><source src="'+ randomPost['media']['mp4']+'" type="video/mp4"></video><br><br><a href="'+randomPost['link']+'">Link to original post</a>';
            }
            $('#9gagcontent').html(html_text);
        }   
    });
}

$(document).ready(main);