document.addEventListener('DOMContentLoaded', () => {
    let isSubmitting = false; // Flag to prevent multiple submissions

    function closeModal(className) {
        const modal = document.querySelector(className);
        modal.classList.add('hidden');

    }


    const getTrainingFormat = () => {
        const checkedRadio = document.querySelector('input[name="trainingFormat"]:checked');
        
        if (checkedRadio) {
            console.log(checkedRadio.id); // Logs the selected radio button ID
            return checkedRadio.value; // Returns the selected radio button ID
        }
        
        return null; // No selection made
    };

    document.getElementById("trainingForm1").addEventListener("submit", async function (event) {
        event.preventDefault();

        const trainingFormat = getTrainingFormat();
        if(!trainingFormat) {
            alert("Availability Required.");            
            return;
        }

        const submitButton = event.target.querySelector("button[type='submit']");
        if (isSubmitting) return; // Prevent multiple submissions
        isSubmitting = true;
        submitButton.disabled = true; // Disable button to prevent multiple clicks
        submitButton.textContent = "Submitting..."; // Show loading text


        const formData = {
            fullName: document.getElementById("fullName").value,
            companyName: document.getElementById("orgName").value,
            email: document.getElementById("email").value,
            phoneNumber: document.getElementById("phone").value,
            regionName: document.getElementById("region").value,
            countryName: document.getElementById("country").value,
            interestedIn: document.getElementById("trainingTopic").value,
            participants: document.getElementById("participants").value,
            comments: document.getElementById("comments").value,
            trainingFormat: trainingFormat,
            jobRole: document.getElementById("designation").value,
            mailType: "request_for_training"
        };

        try {
            const response = await fetch("https://thegawindustries.com/api/v1/contact/request_for_training", {
            // const response = await fetch("http://localhost:3000/api/v1/contact/request_for_training", {
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
        } finally {
            isSubmitting = false;
            submitButton.disabled = false; // Disable button to prevent multiple clicks
            submitButton.textContent = "Submit"; // Show loading text
            closeModal(".training-request-modal");
        }
    });
});

