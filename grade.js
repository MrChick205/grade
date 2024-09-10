function ok() {
    var semester1 = parseFloat(document.getElementById('nhap1').value);
    var semester2 = parseFloat(document.getElementById('nhap2').value);
    var year = document.getElementById('chon').value;
    var average;
    if (year == 1) {
        average = (semester1 + semester2) / 2;
    } else if (year == 2) {
        average = (semester1 + (semester2 * 2)) / 3;
    } else if (year == 3) {
        average = (semester1 + (semester2 * 3)) / 4;
    }
    document.getElementById('tong').innerText = average;
}
function reset() {
    document.getElementById('nhap1').value = '';
    document.getElementById('nhap2').value = '';
    document.getElementById('tong').innerText = '';
    document.getElementById('kq').innerText = '';
}
