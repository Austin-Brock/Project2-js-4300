document.addEventListener('DOMContentLoaded', function() {
    // Create a variable for each button
    var amButton = document.getElementById('am');
    var pmButton = document.getElementById('pm');

    // Create a listener with addEventListener to invoke a callback on the click of each button
    amButton.addEventListener('click', function() {
        // In the callback, add appropriate text content to the heading node (#greeting)
        document.getElementById('greeting').textContent = "Good morning!";
    });

    pmButton.addEventListener('click', function() {
        // In the callback, add appropriate text content to the heading node (#greeting)
        document.getElementById('greeting').textContent = "Good night!";
    });
});