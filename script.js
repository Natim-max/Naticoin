let coinCount = 0;
let clickValue = 1;
let upgradeCost = 10;

const coinDisplay = document.getElementById('coin-count');
const coinImage = document.getElementById('coin-image');
const upgradeButton = document.getElementById('upgrade-click');
const clickValueDisplay = document.getElementById('click-value');
const upgradeCostDisplay = document.getElementById('upgrade-cost');

coinImage.addEventListener('click', () => {
    coinCount += clickValue;
    coinDisplay.textContent = coinCount;
});

upgradeButton.addEventListener('click', () => {
    if (coinCount >= upgradeCost) {
        coinCount -= upgradeCost;
        clickValue++;
        upgradeCost = Math.floor(upgradeCost * 1.5);

        coinDisplay.textContent = coinCount;
        clickValueDisplay.textContent = clickValue;
        upgradeCostDisplay.textContent = upgradeCost;
    }
});
let clickCounter = 0;
let upgradeCounter = 0;

coinImage.addEventListener('click', (event) => {
    clickCounter++;
    coinCount += clickValue;
    coinDisplay.textContent = coinCount;
    createClickEffect(event);
    checkTasks();
});

function createClickEffect(event) {
    const clickEffect = document.createElement('div');
    clickEffect.classList.add('click-effect');
    clickEffect.style.top = `${event.clientY - 50}px`;
    clickEffect.style.left = `${event.clientX - 50}px`;
    document.body.appendChild(clickEffect);
    setTimeout(() => clickEffect.remove(), 500);
}

function checkTasks() {
    if (clickCounter >= 100) {
        coinCount += 50;
        document.getElementById('task-list').children[0].innerText = "Click 100 times - Completed";
    }
    if (upgradeCounter >= 5) {
        coinCount += 100;
        document.getElementById('task-list').children[1].innerText = "Upgrade 5 times - Completed";
    }
    coinDisplay.textContent = coinCount;
}

upgradeButton.addEventListener('click', () => {
    if (coinCount >= upgradeCost) {
        coinCount -= upgradeCost;
        clickValue++;
        upgradeCounter++;
        upgradeCost = Math.floor(upgradeCost * 1.5);

        coinDisplay.textContent = coinCount;
        clickValueDisplay.textContent = clickValue;
        upgradeCostDisplay.textContent = upgradeCost;
        checkTasks();
    }
});
