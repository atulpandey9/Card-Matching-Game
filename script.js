let move=0;
const movecounter=document.getElementById("moveCounter")
const emoji = ["🥶","🥶","😁","😁","😍","😍","😨","😨","🤣","🤣","😎","😎","😶‍🌫️","😶‍🌫️","🤑","🤑"];
const shuffledEmoji = emoji.sort(() => Math.random() - 0.5);

for (let i = 0; i < shuffledEmoji.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffledEmoji[i];

    box.onclick = function() {
        this.classList.add('boxopen');

        let opened = document.querySelectorAll('.boxopen');


        if (opened.length === 2) {
            move++;
            movecounter.textContent=`Moves: ${move}`
            setTimeout(() => {
                if (opened[0].innerHTML === opened[1].innerHTML) {
                    opened[0].classList.add('boxmatch');
                    opened[1].classList.add('boxmatch');
                }

                opened[0].classList.remove('boxopen');
                opened[1].classList.remove('boxopen');

                if (document.querySelectorAll('.boxmatch').length === emoji.length) {
                    alert('You win! 🎉');
                }
            }, 500);
        }
    }

    document.querySelector('.main').appendChild(box);
}






