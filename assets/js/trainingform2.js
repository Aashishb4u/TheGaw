document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("trainingForm2"); // Get form by ID
    const submitButton = document.getElementById("submitButton"); // Get button by ID

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Disable the submit button to prevent multiple submissions
        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";

        // Prepare form data (including file upload)
        const formData = new FormData(form);

        try {
            const response = await fetch("https://api.example.com/submit-training-form", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (response.ok) {
                alert("Form submitted successfully!");
                form.reset(); // Reset the form after success
            } else {
                alert("Failed to submit: " + result.message);
                submitButton.disabled = false;
                submitButton.textContent = "Submit";
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again later.");
            submitButton.disabled = false;
            submitButton.textContent = "Submit";
        }
    });
});
