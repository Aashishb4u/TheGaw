document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("trainingForm2");
    const submitButton = form.querySelector("button[type='submit']");
    let isSubmitting = false; // Flag to prevent multiple submissions

    function closeModal(className) {
        const modal = document.querySelector(className);
        modal.classList.add('hidden');

    }

    const getAvailability = () => {
        const checkedRadio = document.querySelector('input[name="availability"]:checked');
        
        if (checkedRadio) {
            console.log(checkedRadio.id); // Logs the selected radio button ID
            return checkedRadio.id; // Returns the selected radio button ID
        }
        
        return null; // No selection made
    };

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        const checkAvailability = getAvailability();
        if(!checkAvailability) {
            alert("Availability Required.");            
            return;
        }
        
        if (isSubmitting) return; // Prevent multiple submissions
        isSubmitting = true;
        submitButton.disabled = true; // Disable button during submission
        submitButton.textContent = "Submitting..."; // Show loading text

        const formData = new FormData(form); // Automatically collects all form fields

        // Manually append the selected radio button (as it's not always auto-collected)
        // const availability = document.querySelector('input[name="availability"]:checked');
        // if (availability) {
        //     formData.set("availability", availability.value);
        // }


        
        formData.set("availability", checkAvailability);
        formData.set("mailType", "sme_form");

        // Log payload for debugging
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        try {
            // const response = await fetch("http://localhost:3000/api/v1/contact/sme_form", {
            const response = await fetch("https://thegawindustries.com/api/v1/contact/sme_form", {
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
            submitButton.textContent = "Submit"; // Show loading text
            closeModal(".sme-registration-modal");
        }
    });
});

