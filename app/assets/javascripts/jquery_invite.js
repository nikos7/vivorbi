$(document).ready(function(){
    var inInvited = [""];
    var contacts = ["Jorik Jansma", "Jan Janssen", "Piet Hendriksen", "Hendrika Vera de Vrede"];
    $('#add').click(function() {
        var toAdd = $("input[name=message]").val();
        //var checkBox = '<input type="checkbox" checked="checked" />';
        var adding = '<i class="fa fa-times-circle-o fa-2x remove"></i>'; //"<button class=\"remove\">X</button>";
        var array = ["<li class=\"invited\">", toAdd, adding, "</li>"].join( "" );
        $("input[name=message]").val("");
        
        //errorhandeling and if succes adds contact in id:addperson
        if($.inArray(toAdd, contacts) > -1){
            if($.inArray(toAdd, inInvited)===-1){
                $('#addperson').append(array);
                $('#addperson li:even').addClass('grey');
                inInvited.push(toAdd);
            }
            else { 
                invitedError = $('<p/>').addClass('alert alert-danger').html('De zelfde persoon kan niet twee keer worden toegevoegd!');
                $('#addperson').prepend(invitedError);
                $('.alert-danger').fadeOut(5000);
            }
        }
        else if(toAdd ===""){
            invitedError = $('<p/>').addClass('alert alert-danger').html('Er moet wel iemand uitgenodigd worden met een naam!');
            $('#addperson').prepend(invitedError);
            $('.alert-danger').fadeOut(5000);
           
        }
        else {
            invitedError = $('<p/>').addClass('alert alert-danger').html('Er kan niet iemand worden toegevoegd die niet in de contact lijst staat');
            $('#addperson').prepend(invitedError);
            $('.alert-danger').fadeOut(5000);
        }
    });
    //moet eigenlijk elk element pakken door each loop en dan toevoegen aan een array op het moment van sturen. - anders opgelost, dus niet meer van belang
    //of manier vinden om een waarde uit de array inInvited te halen op het moment dat het element verwijderd is. - gelukt
    //eeeh gaat niet helemaal goed verwijderd niet de juiste - gelukt
    $(document).on('click', '.remove', function(evt){
        //console.log(evt);
        $(this).parent('.invited').remove();
        var deletion = $(this).parent('.invited').text();
        console.log(deletion);
        inInvited.splice($.inArray(deletion, inInvited),1);
    });

    //autocomplete the begin search for contacts
    $("#tags").autocomplete({
    source: contacts
    });

    //date for picking a date for the event(from plugin jquery)
    $( "#datepicker" ).datepicker({
        showWeek: false,
        firstDay: 1
    });


    $("#menu h3").click(function(){
        //slide up all the link lists
        $(":nth-child(2)", "#menu ul li h3").addClass('fa fa-chevron-down pull-right');
        $("#menu ul ul").slideUp();
        //slide down the link list below the h3 clicked - only if its closed
        if(!$(this).next().is(":visible"))
        {      
            $(this).next().slideDown();
            $(":nth-child(2)", this).removeClass('fa fa-chevron-down pull-right').addClass('fa fa-chevron-up pull-right');
        }
    });
});



