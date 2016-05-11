var main = function(){
    $.ajax({
        url: "http://infinigag.k3min.eu/trending",
        success: function(data) {
            random_post = data['data'][Math.floor(Math.random() * data['data'].length)];
            if(!random_post['media']){
                html_text = '<h1>'+random_post['caption']+'</h1><img src="'+ random_post['images']['normal']+'" /><br><br><a href="'+random_post['link']+'">Link to original post</a>';
            }
            else{
                 html_text = '<h1>'+random_post['caption']+'</h1><video height="450" width="450" autoplay><source src="'+ random_post['media']['mp4']+'" type="video/mp4"></video><br><br><a href="'+random_post['link']+'">Link to original post</a>';
            }
            $('#9gagcontent').html(html_text);
        }   
    });
}

$(document).ready(main);