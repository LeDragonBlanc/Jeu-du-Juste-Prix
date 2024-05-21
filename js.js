window.number = Math.floor(Math.random() * 100);
window.trials = 0;

function CheckNumber() {
    var choix = document.getElementById('choice').value;
    document.getElementById('choice').value = null;
    window.trials = window.trials + 1;
    if (choix < window.number) {
        document.getElementById('min').innerHTML = String(choix);
        document.getElementById('helphrase').innerHTML = 'Ton nombre est trop petit.';
    } else if (choix > window.number) {
        document.getElementById('max').innerHTML = String(choix);
        document.getElementById('helphrase').innerHTML = 'Ton nombre est trop grand.';
    } else {
        document.getElementById('helphrase').innerHTML = 'Bravo, tu as réussi !';
        document.getElementById('victory').innerHTML = 'Rejoue si tu veux ! Ton score est de ' + String(window.trials) + ', essaie de faire moins. :)';
        if (document.cookie == "") {
            document.cookie = String(window.trials);
            alert("Tu as battu ton record !");
        } else if (Number(document.cookie) > window.trials) {
            document.cookie = String(window.trials);
            alert("Tu as battu ton record !");
        }
    }
}