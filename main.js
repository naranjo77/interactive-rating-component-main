const circleButton = document.querySelectorAll('.circle-button');
let selectedRating = null;

circleButton.forEach((button) => {
    button.addEventListener('click', () => {
        selectedRating = button.value;
    })
})

const submitbutton = document.getElementById('buttoon');

submitbutton.addEventListener('click', () => {
    if (selectedRating) {
     // Submit the rating value using your preferred method (e.g., AJAX, form submission)
    console.log(`Rating submitted: ${selectedRating}`);
    showThankYouCard();
    } else {
    console.log('No rating selected');
    }
});

const thankYouCard = document.getElementById('thank-you-card');

function showThankYouCard() {
    thankYouCard.style.display = 'block';
}