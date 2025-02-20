
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const submitButton = form.querySelector("button[type='submit']");
    let isSubmitting = false; // Flag to prevent multiple submissions

    const getSubject = () => {
        const checkedRadio = document.querySelector('input[name="subject"]:checked');
        
        if (checkedRadio) {
            console.log(checkedRadio.id); // Logs the selected radio button ID
            return checkedRadio.value; // Returns the selected radio button ID
        }
        
        return null; // No selection made
    };

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        const selectedSubject = getSubject();
        if(!selectedSubject) {
            alert("Subject Required.");      
            return;
        }

        if (isSubmitting) return; // Prevent multiple submissions
        isSubmitting = true;
        submitButton.disabled = true; // Disable button to prevent multiple clicks
        submitButton.textContent = "Submitting..."; // Show loading text


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
            isSubmitting = false;
            submitButton.disabled = false; // Disable button to prevent multiple clicks
            submitButton.textContent = "Send Message"; // Show loading text
        }
    });
});
