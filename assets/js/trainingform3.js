document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("partnershipForm");
    const submitButton = form.querySelector("button[type='submit']");
    let isSubmitting = false; // Prevent multiple submissions

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Stop default form submission

        if (isSubmitting) return; // Prevent multiple submissions
        isSubmitting = true;
        submitButton.disabled = true; // Disable button during submission
        submitButton.textContent = "Submitting..."; // Show loading text

        const formData = new FormData(form); // Automatically collects all form fields

        // Handle checkboxes (interest[] array)
        const checkboxes = document.querySelectorAll('input[name="interest"]:checked');
        formData.delete("interest"); // Ensure no duplicates
        checkboxes.forEach((checkbox) => {
            formData.append("interest", checkbox.value);
        });

        // Debugging: Log all form values before submission
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        try {
            const response = await fetch("https://your-api.com/submit", {
                method: "POST",
                body: formData, // Send as multipart/form-data
            });

            if (!response.ok) throw new Error("Form submission failed");

            alert("Form submitted successfully!");
            form.reset(); // Reset form after successful submission
        } catch (error) {
            console.error("Form Submission Error:", error);
            alert("Form submission failed.");
        } finally {
            isSubmitting = false;
            submitButton.disabled = false; // Re-enable button after submission
        }
    });
});

