function showPopup() {
    Swal.fire({
      
        text: "Applied Successfully!!",
        showCloseButton: true,
    });
  }
  const subscribeButton = document.querySelector(".email-button");
  
  subscribeButton.addEventListener("click", function() {
    alert("Subscribed Successfully!");
    const popup = document.createElement("div");
    popup.classList.add("subscribe-popup"); 
    popup.innerHTML = `
      <span class="tick">&#10004;</span> Subscribed Successfully!
    `;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 2000);
  });
  
  const loginForm = document.getElementById('login');
  const createAccountForm = document.getElementById('createAccount');
  const linkCreateAccount = document.getElementById('linkCreateAccount');
  const linkLogin = document.getElementById('linkLogin');
  linkCreateAccount.addEventListener('click', (event) => {
    event.preventDefault(); 
    loginForm.classList.add('form--hidden');
    createAccountForm.classList.remove('form--hidden');
  });
  linkLogin.addEventListener('click', (event) => {
    event.preventDefault(); 
    loginForm.classList.remove('form--hidden');
    createAccountForm.classList.add('form--hidden');
  });
  