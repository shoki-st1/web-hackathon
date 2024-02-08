// キャラクターオブジェクトの作成
const character = {
    name: "黒ひげ",
    hp: getRandomNumber(50, 100),
};

// 攻撃関数
function attack() {
    const attackDamage = getRandomNumber(10, 20);
    character.hp -= attackDamage;
    displayMessage("あなたは攻撃を仕掛けました！黒ひげに " + attackDamage + " のダメージを与えました！");
    checkResult();
}

// 逃げる関数
function runAway() {
    displayMessage("あなたは逃げ出しました！");
    checkResult();
}

// 結果を確認する関数
function checkResult() {
    if (character.hp <= 0) {
        displayMessage("黒ひげを倒しました！おめでとうございます！");
        disableButtons();
    } else {
        displayMessage("黒ひげの体力: ???");
    }
}

// ランダムな数を返す関数
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// メッセージを表示する関数
function displayMessage(message) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML += "<p>" + message + "</p>";
}

// ボタンを無効化する関数
function disableButtons() {
    document.querySelector('button:nth-of-type(1)').disabled = true;
    document.querySelector('button:nth-of-type(2)').disabled = true;
}
