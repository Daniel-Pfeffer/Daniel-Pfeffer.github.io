// This file demonstrates how a XSS attack might inject malicious data into a website.
(() => {
        const adds = [
            "CONGRATULATIONS! You've won a free imaginary cookie!",
            "HOT DEAL: Buy one air guitar, get the second one FREE!",
            "Click here to download more RAM!",
            "Scientists hate this one weird trick to improve code quality!",
            "Your computer has detected that you need coffee!",
            "Warning: Continued coding may cause spontaneous dad jokes",
            "You are the 1,000,000th visitor! Click to claim nothing!",
            "9 out of 10 developers recommend taking breaks. This is your sign!",
            "SPECIAL OFFER: Trade your bugs for features!",
            "This popup will self-destruct in 5... 4... 3... just kidding, here's another one!"
        ];

// Function to create and display a popup
        function createAnnoyingPopup() {
            // Get random funny message
            const randomMessage = adds[Math.floor(Math.random() * adds.length)];

            // Create popup element
            const popup = document.createElement('div');
            popup.style.position = 'fixed';
            popup.style.width = '300px';
            popup.style.padding = '20px';
            popup.style.backgroundColor = '#ff' + Math.floor(Math.random() * 9999);
            popup.style.color = '#fff';
            popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
            popup.style.borderRadius = '10px';
            popup.style.zIndex = '9999';
            popup.style.left = Math.random() * (window.innerWidth - 300) + 'px';
            popup.style.top = Math.random() * (window.innerHeight - 100) + 'px';

            // Add content
            popup.innerHTML = `
    <h3 style="margin-top:0">AMAZING OFFER!</h3>
    <p>${randomMessage}</p>
    <button onclick="this.parentNode.remove()" style="background:#fff;color:#000;border:none;padding:5px 10px;cursor:pointer">
      Close (but why would you?)
    </button>
  `;

            // Add to body
            document.body.appendChild(popup);

            // Auto-remove after some time (but another will appear)
            setTimeout(() => {
                if (popup.parentNode) {
                    popup.remove();
                }
            }, 20000);
        }

        // Start spawning popups with a delay
        setTimeout(() => {
            // Show first popup
            createAnnoyingPopup();

            // Set interval for subsequent popups (every 3-6 seconds)
            setInterval(() => {
                createAnnoyingPopup();
            }, Math.random() * 3000 + 3000);
        }, 1000);
    })()
