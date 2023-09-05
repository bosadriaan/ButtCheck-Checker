let isMuted = false; // Initial state for mute status
const controlButtons = document.querySelectorAll(".control-btn");

controlButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (this.classList.contains("power-btn")) {
            // Toggle the 'active' class for the power button
            this.classList.toggle("active");
        } else if (this.classList.contains("mute-btn")) {
            // Toggle the mute status
            isMuted = !isMuted;
            if (isMuted) {
                this.classList.add("active");
            } else {
                this.classList.remove("active");
            }
        }
    });
});
