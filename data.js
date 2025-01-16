async function fetchTimetable() {
  const sapId = document.getElementById('SapId').value;
  const response = await fetch('combined_data.json');
  const data = await response.json();

  const student = data[sapId];
  if (student) {
    displayTimetable(student.timeTable);
  } else {
    document.getElementById('timetable').innerHTML = 'No timetable found for this SAP ID.';
  }
}

function displayTimetable(timeTable) {
  const timetableDiv = document.getElementById('timetable');
  timetableDiv.innerHTML = '';

  for (const day in timeTable) {
    const dayDiv = document.createElement('div');
    dayDiv.innerHTML = `<h2>${day}</h2>`;
    
    timeTable[day].forEach(classInfo => {
      const classDiv = document.createElement('div');
      classDiv.innerHTML = `
        <p>Class: ${classInfo.class}</p>
        <p>Time: ${classInfo.time}</p>
        <p>Room: ${classInfo.location}</p>
      `;
      dayDiv.appendChild(classDiv);
    });

    timetableDiv.appendChild(dayDiv);
  }
}