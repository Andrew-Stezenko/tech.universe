function openShop() {
    window.location.href = 'shop.html';
}

function openComputer() {
    window.location.href = 'computer.html';
}

function openLaptop() {
    window.location.href = 'laptop.html';
}

function openKeyboard() {
    window.location.href = 'keyboard.html';
}

function openModal() {
    document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};