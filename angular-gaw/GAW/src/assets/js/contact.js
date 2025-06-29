document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (!form) {
        console.error("Form not found!");
        return;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = new FormData(form);

        try {
            // Send data to API
            const response = await fetch("https://your-api-endpoint.com/submit", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Message sent successfully!");
                form.reset(); // Clear form after submission
            } else {
                const errorText = await response.text();
                alert("Error sending message: " + errorText);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    });
});
