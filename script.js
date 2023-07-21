function sendMessage() {
    var button = document.querySelector('.btn');
    button.classList.add('loading');
    
    // Simulate sending the message with a delay (you can replace this with actual API call)
    setTimeout(function() {
      button.classList.remove('loading');
      button.innerText = 'Message Sent Successfully';
      button.disabled = true;
    }, 2000); // Change the delay time (in milliseconds) to adjust how long the loading state will be shown
  }
  