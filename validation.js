const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    
    let oldMessage = document.querySelector('.form-message');
    if (oldMessage) {
        oldMessage.remove();
    }

    const formMessage = document.createElement('div');
    formMessage.classList.add('form-message');

    // Name validation
    if (name === '') {
        formMessage.innerHTML = 'Please enter your name';
        formMessage.style.color = 'red';
        contactForm.appendChild(formMessage);
        return;
    }

    // Email validation
    if (email === '') {
        formMessage.innerHTML = 'Please enter your email';
        formMessage.style.color = 'red';
        contactForm.appendChild(formMessage);
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        formMessage.innerHTML = 'Please enter a valid email';
        formMessage.style.color = 'red';
        contactForm.appendChild(formMessage);
        return;
    }

    // Subject validation
    if (subject === '') {
        formMessage.innerHTML = 'Please enter the subject';
        formMessage.style.color = 'red';
        contactForm.appendChild(formMessage);
        return;
    }

    // Message validation
    if (message === '') {
        formMessage.innerHTML = 'Please enter your message';
        formMessage.style.color = 'red';
        contactForm.appendChild(formMessage);
        return;
    }

    if (message.length < 10) {
        formMessage.innerHTML = 'Message must be at least 10 characters';
        formMessage.style.color = 'red';
        contactForm.appendChild(formMessage);
        return;
    }

    // Success
    formMessage.innerHTML = 'Message sent successfully!';
    formMessage.style.color = 'green';
    contactForm.appendChild(formMessage);

    contactForm.reset();
});

