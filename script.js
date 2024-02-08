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
    playSound("atack.mp3"); // 攻撃効果音を再生
    checkResult();
}

// 逃げる関数
function runAway() {
    displayMessage("あなたは逃げ出しました！");
    playSound("run.mp3"); // 攻撃効果音を再生
    changeImage("ikada.png"); // 逃げる画像に変更
    disableButtons();
    document.getElementById("retry-button").style.display = "inline-block"; // リトライボタンを表示
}

// 結果を確認する関数
function checkResult() {
    if (character.hp <= 0) {
        displayMessage("黒ひげを倒しました！おめでとうございます！\nこれで世界は救われました!!");
        changeImage("homeless_furousya.png"); // 画像に変更
        disableButtons();
    } else {
        displayMessage("黒ひげの体力: ???\nまだ余裕がありそうだ");
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


// 画像を変更する関数
function changeImage(imagePath) {
    const imageElement = document.getElementById("character-image");
    imageElement.src = imagePath;
}

function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

// リトライ関数
function retry() {
    // ゲームをリセットする処理を追加する（キャラクターの初期化など）
    character.hp = getRandomNumber(50, 100);
    document.getElementById("retry-button").style.display = "none"; // リトライボタンを非表示にする
    document.querySelector('.attack-button').disabled = false; // 攻撃ボタンを有効にする
    document.querySelector('button:nth-of-type(2)').disabled = false; // 逃げるボタンを有効にする
    document.getElementById("character-image").src = "kaizoku_man.png"; // 画像を元の黒ひげの画像に戻す
    document.getElementById("output").innerHTML = ""; // メッセージをクリアする
}

// 結果を確認する関数
function checkResult() {
    if (character.hp <= 0) {
        displayMessage("黒ひげを倒しました！おめでとうございます！\nこれで世界は救われました!!");
        changeImage("homeless_furousya.png"); // 画像に変更
        disableButtons();
        document.getElementById("retry-button").style.display = "inline-block"; // リトライボタンを表示
    } else {
        displayMessage("黒ひげの体力: ???\nまだ余裕がありそうだ");
    }
}
