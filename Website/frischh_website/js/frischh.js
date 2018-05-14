$(document).ready(function(){

  emailjs.init("user_QASoPvrHIN4DZflGSCSnz");

  //Waiting List
   $('#waiting_list').on('submit', function(event){
       event.preventDefault();

       $("#waiting_list_submit").html('Sending...');

       var name = $('#first_name').val();
       var email = $('#email').val();
       var note =  $('#note').val();
       var city =  $('#city').val();
       var state =  $('#state').val();

       emailjs.send("gmail","frischh",{name: name, email: email, city: city, state: state, notes: note})
       .then(function(response) {
          $("#waiting_list_submit").html('Send');
          alert('Thanks for your feedback.');
       }, function(err) {
          console.log("FAILED. error=", err);
          alert(err);
       });

       return false
   })

   //Partnership List
   $('#partner_form').on('submit', function(event){
       event.preventDefault();

       $("#partner_submit").html('Sending...');

       var company_name = $('#company_name').val();
       var contact_name = $('#contact_name').val();
       var phone_number =  $('#phone_number').val();
       var email =  $('#email').val();
       var message =  $('#icon_prefix2').val();

       emailjs.send("gmail","frischh_company",{company_name: company_name, email: email, contact_name: contact_name, phone_number: phone_number, notes: message})
       .then(function(response) {
          $("#partner_submit").html('Send');
          alert('Thanks for your interest.');
       }, function(err) {
          console.log("FAILED. error=", err);
          alert(err);
       });

       return false
   })

});
