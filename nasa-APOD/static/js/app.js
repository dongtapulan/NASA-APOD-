fetch("/api/apod")
    .then(response => response.json())
    .then(data => {
        const card = document.getElementById("apod-card");
        const downloadBtn = document.getElementById("download-btn");

        if (data.media_type === "image") {
            card.innerHTML = `
                <img id="apod-img" src="${data.url}" alt="APOD Image">
                <div class="apod-title">${data.title}</div>
                <div class="apod-date">${data.date}</div>
                <div class="apod-explanation">${data.explanation}</div>
            `;

            // Show download button
            downloadBtn.style.display = "inline-block";
            downloadBtn.onclick = () => {
                const link = document.createElement('a');
                link.href = data.url;
                link.download = `${data.date}-${data.title}.jpg`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
        } else {
            card.innerHTML = `
                <p>Today's APOD is a video.</p>
                <a href="${data.url}" target="_blank">Watch here</a>
            `;
            downloadBtn.style.display = "none";
        }
    })
    .catch(error => {
        document.getElementById("apod-card").innerHTML =
            "<p>Failed to load space data 🌑</p>";
        console.error(error);
    });
