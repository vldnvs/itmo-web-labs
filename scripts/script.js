// Использование IIFE - мне не нравится как выглядит просто ))

// (function () {
//     window.addEventListener("load", () => {
//         const [navigation] = performance.getEntriesByType("navigation");
//
//         if (navigation) {
//             const loadTime = navigation.loadEventEnd - navigation.startTime;
//             const footer = document.querySelector("footer");
//             const statsElement = document.createElement("p");
//             statsElement.textContent = `Время загрузки страницы: ${(loadTime / 1000).toFixed(2)} секунд`;
//             footer.appendChild(statsElement);
//         }
//     });
// })();

function setLoadTime(){
    const timing = performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    const footer = document.querySelector("footer");
    const statsElement = document.createElement("p");

    if (loadTime > 0) {
        statsElement.textContent = `Page load time is ${(loadTime / 1000).toFixed(2)} seconds`;
    } else {
        statsElement.textContent = "Page load time could not be measured.";
    }

    footer.appendChild(statsElement);
}

window.addEventListener("load", () => setTimeout(setLoadTime, 0));

