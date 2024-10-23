function showAlert() {
    alert("Message Sent");

    // Clear the input fields
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"],input[type="number"], textarea');
    inputs.forEach(input => {
        input.value = '';
    });
}

window.onload = function() {
    const button = document.getElementById('sendButton');
    button.addEventListener('click', showAlert);
};