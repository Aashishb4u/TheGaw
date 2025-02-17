document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const submitButton = form.querySelector("button[type='submit']");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission
        
        // Disable the button to prevent multiple submissions
        if (submitButton.disabled) return;
        submitButton.disabled = true;

        // Collect form data
        const formData = {
            firstName: form.querySelector("input[placeholder='First Name']").value.trim(),
            lastName: form.querySelector("input[placeholder='Last Name']").value.trim(),
            email: form.querySelector("input[placeholder='Email']").value.trim(),
            phoneNumber: form.querySelector("input[placeholder='Phone Number']").value.trim(),
            companyName: form.querySelector("input[placeholder='Company / Organization Name']").value.trim(),
            subject: form.querySelector("input[name='subject']:checked")?.nextElementSibling.textContent.trim(),
            message: form.querySelector("textarea[placeholder='Message']").value.trim(),
            mailType: "contact"
        };

        // Basic validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            alert("Please fill in all required fields.");
            submitButton.disabled = false;
            return;
        }

        try {
            // Send API request
            const response = await fetch("https://thegawindustries.com/api/v1/contact/contact_us", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                alert("Your message has been sent successfully!");
                form.reset();
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again later.");
        } finally {
            // Re-enable the button after request completion
            submitButton.disabled = false;
        }
    });
});
