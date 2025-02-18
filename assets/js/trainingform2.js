document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("trainingForm2");
    const submitButton = form.querySelector("button[type='submit']");
    let isSubmitting = false; // Flag to prevent multiple submissions

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        if (isSubmitting) return; // Prevent multiple submissions
        isSubmitting = true;
        submitButton.disabled = true; // Disable button during submission
        submitButton.textContent = "Submitting..."; // Show loading text

        const formData = new FormData(form); // Automatically collects all form fields

        // Manually append the selected radio button (as it's not always auto-collected)
        const availability = document.querySelector('input[name="availability"]:checked');
        if (availability) {
            formData.set("availability", availability.value);
        }

        // Log payload for debugging
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        try {
            const response = await fetch("https://your-api.com/submit", {
                method: "POST",
                body: formData, // Sends data as multipart/form-data
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

