document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("partnershipForm");
    const submitButton = form.querySelector("button[type='submit']");
    let isSubmitting = false; // Prevent multiple submissions

    function closeModal(className) {
        const modal = document.querySelector(className);
        modal.classList.add('hidden');

    }

    const getCheckedInterests = () => {
        const checkboxes = document.querySelectorAll('input[name="interestedIn"]');
        const selected = {};
    
        checkboxes.forEach(checkbox => {
            selected[checkbox.id] = checkbox.checked;
        });
    
        // Filter and return only the IDs where the value is `true`
        const checkedIds = Object.keys(selected).filter(id => selected[id]);
        
        console.log(checkedIds); // Logs only the checked IDs
        return checkedIds;
    };

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Stop default form submission

        const checkedIds = getCheckedInterests();
        if(!checkedIds || checkedIds.length === 0) {
            alert("Area of Interest in Partnership Required.");            
            return;
        }

        if (isSubmitting) return; // Prevent multiple submissions
        isSubmitting = true;
        submitButton.disabled = true; // Disable button during submission
        submitButton.textContent = "Submitting..."; // Show loading text

        const formData = new FormData(form); // Automatically collects all form fields

        formData.append("interestedIn", checkedIds.join(", "));
        formData.set("mailType", "transfer_partner_form");

        // Debugging: Log all form values before submission
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        try {
            // const response = await fetch("http://localhost:3000/api/v1/contact/transfer_partner", {
            const response = await fetch("https://thegawindustries.com/api/v1/contact/transfer_partner", {
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
            submitButton.textContent = "Submit"; // Show loading text
            closeModal(".organization-registration-modal");
        }
    });
});

