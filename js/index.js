

const heartClicks = document.getElementsByClassName('heart-click');

for (const heartClick of heartClicks) {
    heartClick.addEventListener('click', function () {
        const heartCount = parseInt(document.getElementById('heart-count').innerText);

        const newHeartCount = heartCount + 1;
        document.getElementById('heart-count').innerText = newHeartCount;
    })
}

const histoyData = [];

document.addEventListener('DOMContentLoaded', function () {
    const callBtns = document.querySelectorAll('.card-btn-call');

    let coinCount = parseInt(document.querySelector('.coin-section p').innerText);

    for (const callBtn of callBtns) {
        callBtn.addEventListener('click', function () {
            const card = callBtn.closest('.cards');

            const name = card.querySelector('.card-text2').innerText;
            const phone = card.querySelector('.card-text3').innerText;

            if (coinCount < 20) {
                alert('❌You don’t have enough coins. You need 20 coins to make a call.');
                return;
            }

            alert(`📞Calling ${name} ${phone}.....`);

            coinCount = coinCount - 20;
            document.querySelector('.coin-section p').innerText = coinCount;

            const data = {
                name: `${name}`,
                number: `${phone}`,
                date: new Date().toLocaleString(),
            };

            histoyData.push(data); 

            const historyContainer = document.getElementById('history-messege');
            historyContainer.innerText = '';  // Clear existing history

            for (const data of histoyData) {
                const div = document.createElement('div');
                div.innerHTML = `
                    <div class="history-contant">
                        <div>
                            <h1 class="history-contant-title">${data.name}</h1>
                            <p class="history-contant-number">${data.number}</p>
                        </div>
                        <div>
                            <p>${data.date}</p>
                        </div>
                    </div>
                `;
                historyContainer.appendChild(div);
            }
        });
    }
});

const clearBtn = document.querySelector('.clear-btn');
if (clearBtn) {
    clearBtn.addEventListener('click', function () {
        histoyData.length = 0;

        const historyContainer = document.getElementById('history-messege');
        historyContainer.innerHTML = '';  
    });
}



const copyClicks = document.getElementsByClassName('copy-clicks');

for (const copyClick of copyClicks) {
    copyClick.addEventListener('click', function () {
        const copyCount = parseInt(document.getElementById('copy-count').innerText);

        const card = copyClick.closest('.cards');

        const number = card.querySelector('.card-text3').innerText;

        alert(`The number has been copied: ${number}.`);

        navigator.clipboard.writeText(number);

        const newCopyCount = copyCount + 1;
        document.getElementById('copy-count').innerText = newCopyCount;
    });
}


const callBtns = document.getElementById('card-btn-call');

for (const callBtn of callBtns) {
    callBtn.addEventListener('click', function () {
        document.getElementsByClassName('hiscard-call-btn').addEventListener('click', function () {
            const historyContainer = document.getElementById('x');
            historyContainer.innerText = '';

            for (const data of histoyData) {
                const div = document.createElement('div');
                div.innerHTML = `
       <div class="history-contant">
                        <div>
                            <h1 class="history-contant-title">${data.name}</h1>
                            <p class="history-contant-number">${data.number}</p>
                        </div>
                        <div>
                            <p>${data.date}</p>
                        </div>
                    </div>
        `
                historyContainer.appendChild(div);

            }
        })
    })
}









