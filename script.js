let totalPlayers = 0;
let totalAmount = 0;
let players = [];

function startDraw(amount) {
    document.getElementById("form").style.display = "block";  // Hiện form nhập địa chỉ ví
    document.getElementById("result").innerHTML = `Bạn đã chọn quay thưởng với ${amount} Pi. Hãy nhập địa chỉ ví của bạn.`;
    window.selectedAmount = amount;  // Lưu giá trị lựa chọn vào biến toàn cục
}

function submitEntry() {
    const wallet = document.getElementById("wallet").value;

    if (wallet === "") {
        alert("Bạn chưa nhập địa chỉ ví.");
        return;
    }

    // Cập nhật người chơi và tổng giá trị quay thưởng
    totalPlayers++;
    totalAmount += window.selectedAmount;
    players.push({ wallet: wallet, amount: window.selectedAmount });

    // Thông báo đã tham gia
    document.getElementById("result").innerHTML = `Cảm ơn bạn đã tham gia quay thưởng với ${window.selectedAmount} Pi.`;

    // Ẩn form nhập địa chỉ ví
    document.getElementById("form").style.display = "none";

    // Kiểm tra xem đã đủ 50 người tham gia chưa
    if (totalPlayers >= 50) {
        drawWinner();
    }
}

function drawWinner() {
    // Tính phần thưởng
    let prizeAmount = totalAmount * 0.8;

    // Chọn người chơi ngẫu nhiên
    let winnerIndex = Math.floor(Math.random() * players.length);
    let winner = players[winnerIndex];

    document.getElementById("result").innerHTML = `Quay thưởng xong! Người chiến thắng là: ${winner.wallet} với phần thưởng trị giá ${prizeAmount} Pi.`;
}
