

( function( $ ) {

    $( document ).ready( function() {

        $( '.report-a-bug' ).on( 'click', '.show-form', function( event ) {
            // change label and switch class

            // show textarea
            $( '.report-a-bug-message' ).slideDown('slow');

        })

    });
})( jQuery );

( function( $ ){
	
		$('#apply_job').on('submit',function(event){
			event.preventDefault();
			 var form= $(this);
             var title=$("#post_title").html();
			 var formdata= new FormData(this);
			 var detail_info = {
                title,
                name: form.find("#a_name").val(),
                email: form.find("#a_email").val(),
                phone : form.find("#a_phone").val(),
                experience : form.find("#exp").val()
            }
           console.log(detail_info);
 
            if(detail_info.post_name === "" || detail_info.post_email === "" ) {
                alert("Fields cannot be blank");
                return;
            }
 
            $.ajax({
 
                url: settings.ajaxurl,
                type: 'POST',

                data: {
                    post_details : detail_info,
                    action: 'send_form_data',
                    
                },

                error: function(error) {
                    alert("Insert Failed" + error);
                    console.log(formdata);
                },
                success: function(response){
                   // alert(data);
                   console.log('ok')
                  
                   console.log(response); 
                    var items = [];
                    $.each( response.data, function( key, val ) {
                        items.push( ("<li >" + key   + ' : ' + val + "</li>") );
                    });
                    $( "<ul/>", {
                        html: items.join( "" )
                    })
                    $('#report-a-bug-message').html(response);
                    $('#message').html("<h2>Contact Form Submitted!</h2>")
                    .append("<h4>Applicant Details</h4>")
                    .append(items)
                    .append("<p>We will be in touch soon.</p>")                                 
                }

    		});	
		})
})( jQuery );


( function( $ ) {

    $( document ).ready( function() {

         $( document ).on( 'click', '.delete_app', function( event ) {

        //     var id = $("#post_id").html();
            var id = $(this).data('id');
            console.log(id);
            var post = $(this).parents('.post:first');
            console.log(post);

            $.ajax({
                type: 'post',
                url: settings.ajaxurl,
                data: {
                    action: 'my_delete_post',
                    id: id
                },
            success: function( response ) {
                if( response == 'success' ) {
                    console.log(response);
                    post.fadeOut( function(){
                        post.remove();
                    });
                }
                 }
        })
        return false;
    })
})

})( jQuery );
    



