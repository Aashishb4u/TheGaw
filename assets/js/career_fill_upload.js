// Function to handle form submission with file upload
function handleFileUploadCareerForm(formId, endpointUrl, allowedExtensions = ['pdf', 'doc', 'docx']) {
    const form = document.getElementById(formId);

    if (!form) {
        console.error(`Form with ID "${formId}" not found!`);
        return;
    }

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent default form submission

        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true; // Disable button to prevent multiple clicks
            submitBtn.classList.add("opacity-50", "cursor-not-allowed"); // Optional: Add styles
        }

        const formData = new FormData();
        const modal = document.querySelector('.modal');
        let fileInputsValid = true; // Ensure file validation is properly checked

        // Get all inputs from the form
        const inputs = form.querySelectorAll('input, select, textarea');

        inputs.forEach(input => {
            if (input.type === 'file' && input.files.length > 0) {
                const file = input.files[0];
                const fileExtension = file.name.split('.').pop().toLowerCase();

                if (!allowedExtensions.includes(fileExtension)) {
                    alert(`Invalid file type: ${file.name}. Allowed types are: ${allowedExtensions.join(', ')}`);
                    fileInputsValid = false; // Mark as invalid
                } else {
                    formData.append(input.name, file);
                }
            } else if (input.type !== 'file') {
                formData.append(input.name, input.value);
            }
        });

        // Stop form submission if file validation fails
        if (!fileInputsValid) {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.classList.remove("opacity-50", "cursor-not-allowed");
            }
            return;
        }

        switch (formId) {
            case 'apply-form': 
                const jobName = modal.getAttribute('data-job-name');
                formData.append('mailType', 'career');
                formData.append('jobRole', jobName);
            
                try {
                    const response = await fetch(endpointUrl, {
                        method: 'POST',
                        body: formData,
                    });

                    if (response.ok) {
                        alert('Form submitted successfully!');
                        form.reset();
                        closeModal();
                    } else {
                        const error = await response.text();
                        alert(`Failed to submit form: ${error}`);
                    }
                } catch (error) {
                    console.error('Error submitting form:', error);
                    alert('An error occurred while submitting the form. Please try again.');
                }
                break;
            
            case 'news-letter-form': 
                try {
                    const response = await fetch(endpointUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json', 
                        },
                        body: JSON.stringify({
                            email: form.querySelector('input#emailInput').value.trim(),
                            mailType: 'news_letter'
                        }),
                    });

                    if (response.ok) {
                        alert('Form submitted successfully!');
                        form.reset();
                        closeModal();
                    } else {
                        const error = await response.text();
                        alert(`Failed to submit form: ${error}`);
                    }
                } catch (error) {
                    console.error('Error submitting form:', error);
                    alert('An error occurred while submitting the form. Please try again.');
                }
                break;
        }

        // Re-enable the button after request completes (success or failure)
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.classList.remove("opacity-50", "cursor-not-allowed");
        }
    });
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('hidden');
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('hidden');
}

function openModal(buttonElement) {
    // Find the closest parent 'div' with class 'grid'
    const jobContainer = buttonElement.closest('.grid');
    // Find the job title inside that container
    const jobNameElement = jobContainer.querySelector('.jobName');
    // Get the text content of the job name
    const jobName = jobNameElement ? jobNameElement.textContent.trim() : "Unknown Job";
    const modal = document.querySelector('.modal');
    // Set job name in a data attribute
    modal.setAttribute('data-job-name', jobName);

    modal.classList.remove('hidden');
}

function scrollActions() {
  // navigation scroll effect
    document.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('-translate-y-10', 'shadow-lg', 'border', 'border-gray-200', 'backdrop-filter', 'bg-white/60', 'backdrop-blur-xl', 'bg-opacity-30');
        } else {
            navbar.classList.remove('-translate-y-10', 'shadow-lg', 'border', 'border-gray-200', 'backdrop-filter', 'bg-white/60', 'backdrop-blur-xl', 'bg-opacity-30');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    handleFileUploadCareerForm('apply-form', 'https://thegawindustries.com/api/v1/contact/careers');
    handleFileUploadCareerForm('news-letter-form', 'https://thegawindustries.com/api/v1/contact/news-letter');
    scrollActions();
});


// handleFileUploadForm('apply-form', 'https://your-api-endpoint.com/upload');
