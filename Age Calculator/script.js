function getDOB() {
    let dobInput = document.getElementById('inputDob').value;
    let currentDateInput = document.getElementById('cdate').value;

    if (!dobInput || !currentDateInput) {
        alert('Please enter both Date of Birth and Current Date.');
        return;
    }

    let dob = new Date(dobInput);
    let currentDate = new Date(currentDateInput);

    if (currentDate < dob) {
        document.getElementById('currentAge').textContent = 'The current date cannot be earlier than the Date of Birth.';
        return;
    }

    let years = currentDate.getFullYear() - dob.getFullYear();
    let months = currentDate.getMonth() - dob.getMonth();
    let days = currentDate.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(dob.getFullYear(), dob.getMonth() + 1, 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('currentAge').textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;
}
