// Function to handle form submission with file upload
function handleFileUploadForm(formId, endpointUrl, allowedExtensions = ['pdf', 'doc', 'docx']) {
    const form = document.getElementById(formId);

    if (!form) {
        console.error(`Form with ID "${formId}" not found!`);
        return;
    }

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData();
        let fileInputsValid = true;

        // Get all inputs from the form
        const inputs = form.querySelectorAll('input, select, textarea');

        inputs.forEach(input => {
            if (input.type === 'file' && input.files.length > 0) {
                const file = input.files[0];
                const fileExtension = file.name.split('.').pop().toLowerCase();

                if (!allowedExtensions.includes(fileExtension)) {
                    alert(`Invalid file type: ${file.name}. Allowed types are: ${allowedExtensions.join(', ')}`);
                    fileInputsValid = false;
                } else {
                    formData.append(input.name, file);
                }
            } else if (input.type !== 'file') {
                formData.append(input.name, input.value);
            }
        });

        if (!fileInputsValid) return;

        try {
            const response = await fetch(endpointUrl, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                form.reset(); // Reset form after successful submission
            } else {
                const error = await response.text();
                alert(`Failed to submit form: ${error}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form. Please try again.');
        }
    });
}

handleFileUploadForm('myForm', 'https://your-api-endpoint.com/upload');
