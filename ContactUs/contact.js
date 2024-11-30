$(document).ready(function() {
    
   // DOM Modification
   $('.navbar-nav .nav-link').hover(
    function() {
        // Mouse enter: change text color to blue and text to uppercase
        $(this).css('color', 'white');
        $(this).text($(this).text().toUpperCase());
    },
    function() {
        // Mouse leave: revert text color and text to original
        $(this).css('color', '');
        $(this).text($(this).text().toLowerCase());
    }
    );

    // DOM Traversal
    console.log('second contact:', $('.table tbody tr:nth-child(2) td:nth-child(3)').text());
   


    // Attribute Modification
        $("#name").attr("placeholder", "Enter your full name");
        $("#email").attr("placeholder", "Enter your active email");
        $("#message").attr("placeholder", "Describe your issue or query...");
    

    // CSS Manipulation
    $('.table tbody tr td').hover(
        function() { 
            $(this).text($(this).text().toUpperCase());
            $(this).css('color' , 'blue');
        },
        function() {
            $(this).css('color', '');
            $(this).text($(this).text().toLowerCase());

        }
    );

    //java script effects
    $('#name').focus(function() {
        $(this).css('background-color', 'lightblue');
    });



    // HTML Event --submit
    $('.btn.btn-outline-primary.btn-lg').click(function() {
        alert('Your message has been sent successfully!');
    });
    
});