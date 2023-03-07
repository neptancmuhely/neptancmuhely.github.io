function applyOnClick() {
    var request = new XMLHttpRequest();

    request.open("GET", "applyBtnClickCount.txt");
    request.send(null);

    var count = parseInt(request.responseText);

    count++;

    request.open("POST", "applyBtnClickCount.txt", true);
    request.send(count.toString());

    window.location.href = "mailto:info@mayerneptancmuhely.hu?subject=Jelentkezés";
}