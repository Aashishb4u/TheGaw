document.getElementById("trainingForm1").addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitButton = event.target.querySelector("button[type='submit']");
    submitButton.disabled = true; // Disable button to prevent multiple clicks
    submitButton.textContent = "Submitting..."; // Show loading text

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        requirements: document.getElementById("requirements").value
    };

    try {
        const response = await fetch("https://api.example.com/training-request", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            alert("Request submitted successfully!");
            event.target.reset(); // Reset the form after success
        } else {
            alert("Failed to submit request: " + result.message);
            submitButton.disabled = false; // Re-enable button on error
            submitButton.textContent = "Apply Now";
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again later.");
        submitButton.disabled = false; // Re-enable button on error
        submitButton.textContent = "Apply Now";
    }
});
