document.addEventListener("DOMContentLoaded", function() {
    const terminal = document.getElementById("terminal");
    const glitchOverlay = document.querySelector(".glitch-overlay");
    const bgAnimation = document.querySelector(".bg-animation");
    const videoContainer = document.getElementById("video-container");
    const video = document.getElementById("hacked-video");

    let isDramatic = Math.random() < 0.6; // 10% chance for dramatic mode

    if (isDramatic) {
        activateDramaticMode();
    } else {
        startNormalProcess();
    }

    function startNormalProcess() {
        const commands = [
            "Connecting to Samridhya's Server... 🔗",
            "Task Successful ✅",
            "Waiting for Approval... ⏳",
            "Task Successful ✅",
            "Connecting to Zee5... 📡",
            "Task Successful ✅",
            "Bypassing Firewall... 🔓",
            "Task Successful ✅",
            "Finalizing exploit... 🚀",
            "Final Task Successful ✅",
            "Signal OK 😉"
        ];

        let index = 0;
        
        function typeCommand() {
            if (index < commands.length) {
                terminal.innerHTML += "<br>" + commands[index];
                terminal.scrollTop = terminal.scrollHeight;
                index++;
                setTimeout(typeCommand, Math.random() * 2000 + 1000);
            }
        }

        setTimeout(typeCommand, 1000);
    }

    function activateDramaticMode() {
        console.warn("Dramatic Mode Activated!");

        bgAnimation.classList.add("fast-bg");

        let spamMessages = [
            "ERROR 404",
            "I NEED A GIRLFRIEND",
            "LOVE YOU SANA",
            "LOVE YOU ANANYA",
            "CONTACT SAMRIDHYA",
            "HAY PROVU AND NAXT MASSAGE KRISHNA JAGANNATHO PRAMANONDI NEXT SARASWATI"
        ];

        let count = 0;
        function spamTerminal() {
            if (count < 50) {
                let randomMessage = spamMessages[Math.floor(Math.random() * spamMessages.length)];
                if (randomMessage === "CONTACT SAMRIDHYA") {
                    randomMessage = `<a href='https://wa.link/6xj1s0' target='_blank' style='color:#ff00ff;'>CONTACT SAMRIDHYA</a>`;
                }
                terminal.innerHTML += "<br>" + randomMessage;
                terminal.scrollTop = terminal.scrollHeight;
                count++;
                setTimeout(spamTerminal, Math.random() * 200 + 100);
            } else {
                startVideo();
            }
        }
        spamTerminal();
    }

    function startVideo() {
        let flashCount = 0;
        function glitchEffect() {
            if (flashCount < 10) {
                glitchOverlay.style.opacity = flashCount % 2 === 0 ? "1" : "0";
                flashCount++;
                setTimeout(glitchEffect, 100);
            } else {
                videoContainer.style.display = "block";

                let playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        console.log("Autoplay blocked. Waiting for user interaction...");
                        document.addEventListener("click", playVideoOnClick);
                    });
                }

                video.onended = function() {
                    document.body.style.background = "black";
                    setTimeout(() => {
                        location.reload();
                    }, 3000);
                };
            }
        }
        glitchEffect();
    }

    function playVideoOnClick() {
        video.play();
        document.removeEventListener("click", playVideoOnClick);
    }
});
