

( function( $ ) {

    $( document ).ready( function() {

        $( '.report-a-bug' ).on( 'click', '.show-form', function( event ) {
            // change label and switch class

            // show textarea
            $( '.report-a-bug-message' ).show();

        })

    });
})( jQuery );

( function( $ ){
	
		$('#apply_job').on('submit',function(event){
			event.preventDefault();
			 $( '.report-a-bug-message' ).hide();
			 var form= $(this);
			 var formdata= new FormData(this);
			 var detail_info = {
                name: form.find("#a_name").val(),
                email: form.find("#a_email").val(),
                phone : form.find("#a_phone").val(),
                experience : form.find("#exp").val()
            }
           
            var name = form.find("#a_name").val();
            var email = form.find("#a_email").val();
            var phone = form.find("#a_phone").val();
            var experience = form.find("#exp").val();
            var data = [name,
            			email,
            			phone,
            			experience]; 
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
                success: function(response) {
                   // alert(data);
                    console.log(response);

                }

    		});	
		})
})( jQuery );




