async function fetchTimetable() {
    const sapId = document.getElementById('sapId').value;
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
        dayDiv.classList.add("table") 
        dayDiv.innerHTML = `
        <h2><u>${day}</u></h2>
        `;

        timeTable[day].forEach(classInfo => {
            const classDiv = document.createElement('div');
            classDiv.classList.add("table-row")
            classDiv.innerHTML = `
            <div class="row"><b>Class:</b> ${classInfo.class}</div>
            <div class="row"><b>Time:</b> ${classInfo.time}</div>
            <div class="row"><b>Room:</b> ${classInfo.location}</div>
            <div class="row">-----------------------------</div>
            <span> </span>
      `;
            dayDiv.appendChild(classDiv);
        });

        timetableDiv.appendChild(dayDiv);
    }
}