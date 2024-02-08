document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const startScreen = document.getElementById("startScreen");

    startButton.addEventListener("click", function () {
        startScreen.style.display = "none"; // スタート画面を非表示にする
        // ゲームのロジックをここに追加
    });
});
