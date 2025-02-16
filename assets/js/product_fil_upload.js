// Function to handle form submission
function handleFileUploadForm(formId, endpointUrl, productName, allowedExtensions = ['pdf', 'doc', 'docx']) {
  setTimeout(() => {
    const form = document.getElementById(formId);

    if (!form) {
        return;
    }

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the default form submission

        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true; // Disable button to prevent multiple clicks
            submitBtn.classList.add("opacity-50", "cursor-not-allowed"); // Optional: Add styles
        }

        const fileInput = form.querySelector('input[type="file"]');
        const file = fileInput?.files[0];

        // Validate file input
        if (!file) {
            alert('Please upload a file.');
            resetButton(submitBtn);
            return;
        }

        const fileExtension = file.name.split('.').pop().toLowerCase();

        if (!allowedExtensions.includes(fileExtension)) {
            alert(`Invalid file type. Allowed types are: ${allowedExtensions.join(', ')}`);
            resetButton(submitBtn);
            return;
        }

        // Create form data to send
        const formData = new FormData();
        formData.append('productOrderForm', file);
        formData.append('productName', productName);
        formData.append('mailType', 'product_order_form');

        try {
            // Make the API call
            const response = await fetch(endpointUrl, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('File uploaded successfully!');
                form.reset(); // Reset form after successful upload
            } else {
                const error = await response.text(); // Get error message from the server
                alert(`Failed to upload file: ${error}`);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('An error occurred while uploading the file. Please try again.');
        }

        // Re-enable the button after request completes (success or failure)
        resetButton(submitBtn);
    });
  }, 1000);

    function resetButton(button) {
        if (button) {
            button.disabled = false;
            button.classList.remove("opacity-50", "cursor-not-allowed");
        }
    }
}

