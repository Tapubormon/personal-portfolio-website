// Replace "your-username" with your GitHub username
fetch("https://api.github.com/users/Tapubormon/repos")
    .then((response) => response.json())
    .then((data) => {
        // Display the total count of repositories
        function startCounterWhenVisible() {
            let counterElement = document.querySelector(".counter");
            let counterAlreadyStarted = false;

            function startCounter() {
                if (!counterAlreadyStarted) {
                    counter("count1", 0, data.length, 1000);
                    counterAlreadyStarted = true;
                }
            }

            // Set up the Intersection Observer
            let observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startCounter();
                        observer.unobserve(counterElement); // Stop observing once counter starts
                    }
                });
            });

            // Start observing the counter element
            observer.observe(counterElement);
        }

        function counter(id, start, end, duration) {
            let obj = document.getElementById(id),
                current = start,
                range = end - start,
                increment = end > start ? 1 : -1,
                step = Math.abs(Math.floor(duration / range)),
                timer = setInterval(() => {
                    current += increment;
                    obj.textContent = current;
                    if (current == end) {
                        clearInterval(timer);
                    }
                }, step);
        }

        startCounterWhenVisible();
    })
    .catch((error) => console.error("Error fetching GitHub data:", error));
