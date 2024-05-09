const circleButton = document.querySelectorAll('.circle-button');
let selectedRating = null;

circleButton.forEach((button) => {
    button.addEventListener('click', () => {
        selectedRating = button.value;
    })
})




const submitbutton = document.getElementById('buttoon');
const thankYouCard = document.getElementById('thank-you-card');
function showThankYouCard() {
    thankYouCard.style.display = 'block';
}



document.addEventListener("DOMContentLoaded", function() {
    submitButton = document.getElementById('buttoon');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (selectedRating) {
        console.log('Rating submitted: ' + selectedRating);
        thankYouCard.style.display = 'block';
        } else {
        console.log('No rating selected');
        }
    });
});