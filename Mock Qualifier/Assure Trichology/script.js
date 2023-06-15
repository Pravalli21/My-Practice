// Function to validate the form inputs
function validateForm(sessionCount, previousSession) {
  if (sessionCount > 1 && !previousSession) {
    return false;
  }
  return true;
}

// Function to identify the next session date based on treatment and session count
function identifyNextSessionDate(treatment, sessionCount, previousSession) {
  const currentDate = new Date();
  let nextSessionDate = '';

  if (sessionCount === 1) {
    // If session count is one, add 1 day to the current date
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);
    nextSessionDate = nextDate.toLocaleDateString();
  } else if (previousSession) {
    // If session count exceeds one and previous session date is provided
    const prevDate = new Date(previousSession);
    let daysToAdd = 0;

    if (treatment === 'Laser Hair Removal') {
      if (sessionCount === '2-3') {
        daysToAdd = 15;
      } else if (sessionCount === 'More than 3') {
        daysToAdd = 30;
      }
    } else if (treatment === 'Acne') {
      daysToAdd = 7;
    } else if (treatment === 'Wart Removal') {
      daysToAdd = 5;
    }

    const nextDate = new Date(prevDate);
    nextDate.setDate(prevDate.getDate() + daysToAdd);
    nextSessionDate = nextDate.toLocaleDateString();
  }

  return nextSessionDate;
}

// Function to handle the form submission
function scheduleAppointment() {
  // Get the form elements
  const name = document.getElementById('name').value;
  const treatment = document.getElementById('treatment').value;
  const sessionCount = document.getElementById('sessionCount').value;
  const previousSession = document.getElementById('previousSession').value;
  const nextSessionDiv = document.getElementById('nextSession');

  // Validate the form inputs
  const formValid = validateForm(sessionCount, previousSession);

  if (!formValid) {
    nextSessionDiv.innerHTML = `Hi, ${name}.<br> To schedule your appointment, please specify the prior session date.`;
  } else {
    // Identify the next session date
    const nextSessionDate = identifyNextSessionDate(treatment, sessionCount, previousSession);

    if (nextSessionDate) {
      nextSessionDiv.innerHTML = `Hi, ${name}.<br> The date of your upcoming session is ${nextSessionDate}.`;
    } else {
      nextSessionDiv.innerHTML = '';
    }
  }
}

// Add event listener to the form submission
document.getElementById('scheduleButton').addEventListener('click', scheduleAppointment);
