$(document).ready(function () {
    // Ensure all product sections are hidden at the start
    $(".products").hide();

    // Handle clicking on dropdown items
    $(".dropdown-content a").on("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        $(".products").hide(); // Hide all product sections

        let productId = $(this).attr("id").replace("-link", ""); // Extract correct ID
        $("#" + productId).fadeIn(); // Show the selected product section
    });

    // Add tooltip dynamically using $.parseHTML()
    $(".btn-primary").hover(function () {
        let tooltip = $.parseHTML('<div class="custom-tooltip">Click to learn more!</div>');

        $("body").append(tooltip); // Append tooltip to body
        let btnOffset = $(this).offset();

        $(".custom-tooltip").css({
            position: "absolute",
            top: btnOffset.top - 30, // Position above the button
            left: btnOffset.left + 10,
            background: "#333",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "5px",
            display: "none"
        }).fadeIn();
    }, function () {
        $(".custom-tooltip").fadeOut(function () {
            $(this).remove(); // Remove tooltip when not hovering
        });
    });

    
});
