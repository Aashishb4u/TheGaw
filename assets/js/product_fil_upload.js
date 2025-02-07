// Function to handle form submission
    function handleFileUploadForm(formId, endpointUrl, allowedExtensions = ['pdf', 'doc', 'docx']) {
        const form = document.getElementById(formId);
    
        if (!form) {
            console.error(`Form with ID "${formId}" not found!`);
            return;
        }
    
        form.addEventListener('submit', async function (event) {
            event.preventDefault(); // Prevent the default form submission
    
            const fileInput = form.querySelector('input[type="file"]');
            const file = fileInput?.files[0];
    
            // Validate file input
            if (!file) {
                alert('Please upload a file.');
                return;
            }
    
            const fileExtension = file.name.split('.').pop().toLowerCase();
    
            if (!allowedExtensions.includes(fileExtension)) {
                alert(`Invalid file type. Allowed types are: ${allowedExtensions.join(', ')}`);
                return;
            }
    
            // Create form data to send
            const formData = new FormData();
            formData.append('file', file);
    
            try {
                // Make the API call
                const response = await fetch(endpointUrl, {
                    method: 'POST',
                    body: formData,
                });
    
                if (response.ok) {
                    alert('File uploaded successfully!');
                } else {
                    const error = await response.text(); // Get error message from the server
                    alert(`Failed to upload file: ${error}`);
                }
            } catch (error) {
                console.error('Error uploading file:', error);
                alert('An error occurred while uploading the file. Please try again.');
            }
        });
    }    
