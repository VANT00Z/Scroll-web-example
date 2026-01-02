function createBubbles() {
    const container = document.querySelector('.decoration');
    const numberOfBubbles = 40;

    const fullHeight = document.documentElement.scrollHeight;

    for (let i = 0; i < numberOfBubbles; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        const size = Math.random() * 100 + 60;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;

        const posX = Math.random() * 100;
        const posY = Math.random() * fullHeight + 100;

        circle.style.left = `${posX}%`;
        circle.style.top = `${posY}px`;

        container.appendChild(circle);
    }
}

window.onload = createBubbles;
