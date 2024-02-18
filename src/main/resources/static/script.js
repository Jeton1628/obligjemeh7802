function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

}

function validateInputs(filmer,antall,fornavn,etternavn,telefon,epost){
    if (filmer === "blank") {
        alert("Velg en film.");
        return false;
    }
    if (isNaN(antall) || antall <= 0) {
        alert("Antall må være positivt tall.");
        return false;
    }
    if (fornavn.trim() === "") {
        alert("Skriv inn fornavn.");
        return false;
    }
    if (etternavn.trim() === "") {
        alert("Skriv inn etternavn.");
        return false;
    }
    if (isNaN(telefon) || telefon.toString().length !== 8) {
        alert("Telefonnummer må ha en tallrekke på 8 sifre.");
        return false;
    }
    if(!isValidEmail(epost)) {
        alert("Skriv inn en gyldig epostadresse.");
        return false;
    }
    return true;
}
function kjopticket() {
    const filmer= document.getElementById("filmer").value;
    const antall = parseInt(document.getElementById("Antall").value);
    const fornavn= document.getElementById("Fornavn").value;
    const etternavn= document.getElementById("Etternavn").value;
    const telefon = parseInt(document.getElementById("TelefonNr").value);
    const epost= document.getElementById("Epost").value;

    if (validateInputs(filmer,antall, fornavn, etternavn, telefon, epost)) {
        const ticket = {
            film: filmer,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefon: telefon,
            epost: epost
        };
        tickets.push(ticket);
        renderTickets();
        document.getElementById("Antall").value = "";
        document.getElementById("Fornavn").value = "";
        document.getElementById("Etternavn").value = "";
        document.getElementById("TelefonNr").value = "";
        document.getElementById("Epost").value = "";

    }
}

function renderTickets() {
    const ticketContainer = document.getElementById("ut");
    ticketContainer.innerHTML = "";
    tickets.forEach(function (ticket, index) {
        const ticketElement = document.createElement("div");
        ticketElement.innerHTML = `
        <p>Billett ${index + 1}:</p>
        <p>Film: ${ticket.film}</p>
        <p>Antall: ${ticket.antall}</p>
        <p>Fornavn: ${ticket.fornavn}</p>
        <p>Etternavn: ${ticket.etternavn}</p>
        <p>Telefonnummer: ${ticket.telefon}</p>
        <p>E-post: ${ticket.epost}</p>`;
        ticketContainer.appendChild(ticketElement);
    });
}

function AltDelete() {
    tickets = [];
    renderTickets();
}

let tickets = [];
