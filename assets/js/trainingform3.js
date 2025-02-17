document.getElementById("partnershipForm").addEventListener("submit", async function(event) {
    event.preventDefault();  // Prevent default form submission

    const formData = new FormData();
    
    // Collect form data
    formData.append("organizationName", document.getElementById("organizationName").value);
    formData.append("contactPersonName", document.getElementById("contactPersonName").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("phone", document.getElementById("phone").value);
    
    // Append file
    const supportDocs = document.getElementById("supportDocs").files[0];
    if (supportDocs) {
        const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];  // Example allowed file types
        if (!allowedTypes.includes(supportDocs.type)) {
            alert("Please upload a valid file (PDF, JPEG, PNG).");
            return;
        }
        const maxSize = 5 * 1024 * 1024;  // 5MB
        if (supportDocs.size > maxSize) {
            alert("File size exceeds the 5MB limit.");
            return;
        }
        formData.append("file-parts", supportDocs);
    }

    // Add any other data fields as needed (e.g., area of interest)
    const interestElements = document.querySelectorAll("input[name='interest[]']:checked");
    interestElements.forEach((checkbox) => {
        formData.append("interest[]", checkbox.value);
    });

    // Send the API call
    try {
        const response = await fetch("YOUR_API_ENDPOINT", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        if (response.ok) {
            alert("Form submitted successfully!");
        } else {
            alert("Error: " + result.message);
        }
    } catch (error) {
        console.error("Error submitting the form", error);
        alert("Error submitting the form. Please try again.");
    }
});
