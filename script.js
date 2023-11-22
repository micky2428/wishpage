function makeWish() {
    var nameInput = document.getElementById("name");
    var wishInput = document.getElementById("wish");
    var cardContainer = document.querySelector(".card-container");

    var name = nameInput.value;
    var wish = wishInput.value;

    if (name && wish) {
        var wishItem = document.createElement("div");
        wishItem.className = "wish-card";
        wishItem.innerHTML = `
            <strong>${name}:</strong> ${wish}
        `;

        cardContainer.appendChild(wishItem);

        // 清空輸入框
        nameInput.value = "";
        wishInput.value = "";

        // 顯示願望會成真的訊息
        alert("你的願望會成真的！");
    } else {
        alert("請輸入您的名字和願望！");
    }
}