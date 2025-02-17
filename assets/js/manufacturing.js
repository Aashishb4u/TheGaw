document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("manufacturingForm");
    const submitButton = form.querySelector("button[type='submit']");
    const submitText = submitButton.querySelector("span"); // "SUBMIT" text
    const submitIcon = submitButton.querySelector("svg:last-of-type"); // Arrow icon
    const loadingIcon = document.getElementById("loadingIcon"); // Spinner image

    let isSubmitting = false; // Prevent multiple API calls

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        if (isSubmitting) return; // Prevent multiple clicks
        isSubmitting = true;

        // Disable button & show loading state
        submitButton.disabled = true;
        submitButton.style.opacity = "0.6";
        // submitText.classList.add("hidden"); // Hide text
        loadingIcon.classList.remove("hidden"); // Show spinner

        let errors = [];

        // Get form values
        let firstName = document.getElementById("firstName").value.trim();
        let lastName = document.getElementById("lastName").value.trim();
        let jobRole = document.getElementById("jobRole").value.trim();
        let email = document.getElementById("email").value.trim();
        let phoneNumber = document.getElementById("phoneNumber").value.trim();
        let interestedIn = document.getElementById("interestedIn").value;
        let companyName = document.getElementById("companyName").value.trim();
        let countryName = document.getElementById("countryName").value.trim();
        let mailType = "demo_form";
        let acceptTerms = document.getElementById("acceptTerms").checked;
        let message = document.getElementById("message").value.trim();

        // Validation checks
        if (firstName === "") errors.push("First Name is required.");
        if (lastName === "") errors.push("Last Name is required.");
        if (jobRole === "") errors.push("Job Role is required.");
        
        if (email === "" || !email.match(/^\S+@\S+\.\S+$/)) 
            errors.push("Valid Email is required.");
        
        if (phoneNumber === "" || !phoneNumber.match(/^\d{10}$/)) 
            errors.push("Phone Number must be 10 digits.");
        
        if (interestedIn === "") errors.push("Please select an option from 'Interested In'.");
        
        if (companyName === "") errors.push("Company Name is required.");
        if (countryName === "") errors.push("Region Name is required.");
        
        if (!acceptTerms) errors.push("You must accept the Terms and Conditions.");

        // Show errors if any
        if (errors.length > 0) {
            alert(errors.join("\n"));
            resetButton();
            return;
        }

        // API Call
        let formData = {
            firstName,
            lastName,
            jobRole,
            email,
            phoneNumber,
            interestedIn,
            companyName,
            countryName,
            mailType,
            message
        };

        fetch("https://thegawindustries.com/api/v1/contact/demo_form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) throw new Error("Failed to submit form");
            return response.json();
        })
        .then(data => {
            alert("Form submitted successfully!");
            form.reset();
        })
        .catch(error => {
            alert("Error submitting form: " + error.message);
        })
        .finally(() => {
            resetButton();
        });

        function resetButton() {
            isSubmitting = false;
            submitButton.disabled = false;
            submitButton.style.opacity = "1";
            submitText.classList.remove("hidden"); // Show text
            loadingIcon.classList.add("hidden"); // Hide spinner
        }
    });
});
