<script>
    function showProjectPopup(projectNumber) {
         const projectNames = [
            "Project 1 Name",
            "Project 2 Name",
            "Project 3 Name",
            "Project 4 Name"
        ];

        const projectDescriptions = [
            "Description for Project 1...",
            "Description for Project 2...",
            "Description for Project 3...",
            "Description for Project 4..."
        ];

        const popup = document.createElement("div");
        popup.className = "project-popup";
        popup.innerHTML = `
            <img src="project${projectNumber}.jpg" alt="Project ${projectNumber}" />
            <h2>${projectNames[projectNumber - 1]}</h2>
            <p>${projectDescriptions[projectNumber - 1]}</p>
            <button onclick="closeProjectPopup()">Close</button>
        `;
        document.body.appendChild(popup);
    }

    function closeProjectPopup() {
        const popup = document.querySelector(".project-popup");
        if (popup) {
            document.body.removeChild(popup);
        }
    }
</script>
