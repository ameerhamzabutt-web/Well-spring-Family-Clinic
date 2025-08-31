

    // --- BMI Calculator Logic ---
document.getElementById('calculate-btn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('bmi-result');

    // Input validation
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter valid weight and height values.</p>';
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;
    
    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);
    const roundedBmi = bmi.toFixed(2);
    
    let category = '';
    
    // Determine BMI category
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display the result
    resultDiv.innerHTML = `<h3>Your BMI is: ${roundedBmi}</h3><p>Category: <strong>${category}</strong></p>`;
});

// --- Calendar Date Restriction Logic ---
const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const day = today.getDate().toString().padStart(2, '0');

// Format the date as YYYY-MM-DD
const minDate = `${year}-${month}-${day}`;
document.getElementById('date').setAttribute('min', minDate);
