const download = document.getElementById('download');
const modal = document.getElementById('myModal');
const closeBtn = document.getElementsByClassName('close')[0];

download.addEventListener('click', function() {
  modal.style.display = 'block';
});
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});


function showRatingPopup() {
    Swal.fire({
      title: 'Rate my website',
      text: 'How would you rate my website out of 5 stars?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      input: 'range',
      inputAttributes: {
        min: 1,
        max: 5,
        step: 1
      },
      inputLabel: 'Your rating:',
      inputValue: 5
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Thanks for rating!',
          `You rated my website ${result.value} stars.`,
          'success'
        )
      }
    })
}

const toggleButton = document.getElementById('toggleButton');
const content = document.getElementById('content');

toggleButton.addEventListener('click', function() {
  if (content.style.display === 'none') {
    content.style.display = 'block';
    toggleButton.innerHTML = '<i class="fa-brands fa-wpexplorer icon"></i> Hide Projects';
    // toggleButton.textContent = 'Hide Projects';
    toggleButton.classList.remove('btn-one');
    toggleButton.classList.add('btn-one');
  } else {
    content.style.display = 'none';
    toggleButton.innerHTML = '<i class="fa-brands fa-wpexplorer icon"></i> Show Projects';
    // toggleButton.textContent = 'Show Projects';
    toggleButton.classList.remove('btn-one');
    toggleButton.classList.add('btn-one');
  }
});
