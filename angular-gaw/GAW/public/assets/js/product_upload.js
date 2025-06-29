// Function to handle form submission

function handleFileUploadUI(formId) {
    const fileInput = document.getElementById('coverLetter');
    const emptyBlock = document.getElementById('empty_label');
    const fileUploadBlock = document.getElementById(formId);

    // Ensure file input exists
    if (!fileInput || !emptyBlock || !fileUploadBlock) {
        console.error("One or more required elements are missing.");
        return;
    }

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            emptyBlock.textContent = file.name;
            fileUploadBlock.classList.add("hidden");
            emptyBlock.classList.remove("hidden");
        } else {
            emptyBlock.textContent = "Upload Answered File"; // Default text when no file is selected
            fileUploadBlock.classList.remove("hidden");
            emptyBlock.classList.add("hidden");
        }
    });
}


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
                const error = response.text(); // Get error message from the server
                alert(`Failed to upload file: ${error}`);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('An error occurred while uploading the file. Please try again.');
        } finally {
            form.reset(); // Reset form after successful upload
            resetButton(submitBtn);
            const uploadFileContent = `<img class="h-6 w-6" src="assets/images/icons/upload_ico.png" alt=""> Upload Answered File`;
            form.querySelector('label').innerHTML = uploadFileContent; 
            document.querySelector('#file_upload_block').classList.remove("hidden");
            document.querySelector('#empty_label').classList.add("hidden");
        }
    });
  }, 1000);

    function resetButton(button) {
        if (button) {
            button.disabled = false;
            button.classList.remove("opacity-50", "cursor-not-allowed");
        }
    }
}