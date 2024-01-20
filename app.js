const table = document.querySelector("table");
const bntEstrai = document.querySelector("button");

for (let i = 1; i <= 90; i += 10) {
    let riga = document.createElement("tr");
    table.appendChild(riga);
    for (let j = i; j < 10 + i; j++) {
        let colonna = document.createElement("td");
        riga.appendChild(colonna);
        colonna.setAttribute("id", `${j}`);
    }
}

let numeriEstratti = [];

bntEstrai.onclick = function () {
    let num;
    let controllo;

    if (numeriEstratti.length < 90) {
        do {
            controllo = true;
            num = Math.floor(Math.random() * 90) + 1;
            if (!numeriEstratti.includes(num)) {
                numeriEstratti.push(num);
                controllo = false;
            }
        } while (controllo);

        document.getElementById(`${num}`).innerHTML = num;
    } else {
        alert("Hai estratto tutti i numeri");
    }
}
