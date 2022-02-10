alert("Я оцениваю свою работу на 110 баллов");

document.body.style.margin = "0px";
document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.fontFamily = "Outfit, sans-serif";
document.body.style.fontSize = "18px";

let wrapper = document.createElement("div");
wrapper.id = "wrapper";
wrapper.style.marginLeft = "550px";
wrapper.style.maxWidth = "1440px";
wrapper.style.display = "flex";
wrapper.style.marginTop = "30px";

let card = document.createElement("div");
card.className = "card";
// card.style.position = "relative";
card.style.backgroundColor = "hsl(216, 50%, 16%)";
card.style.padding = "25px 25px";
card.style.borderRadius = "20px";
card.style.boxShadow =
  "3px 14px 28px rgba(0,0,0,0.25), 3px 10px 10px rgba(0,0,0,0.22)";

let imgEquil = document.createElement("img");
imgEquil.className = "img-equil";
imgEquil.src = "./images/image-equilibrium.jpg";
imgEquil.style.maxWidth = "300px";
imgEquil.style.borderRadius = "10px";
imgEquil.style.marginBottom = "3px";
imgEquil.style.cursor = "pointer";

// let overlay = document.appendChild("div");
// overlay.className = "overlay";

// let imgView = document.createElement("img");
// imgView.className = "view";
// imgView.src = "./images/icon-view.svg";

let title = document.createElement("h3");
title.className = "title";
title.innerText = "Equilibrium #3429";
title.style.color = "hsl(0, 0%, 100%)";
title.style.marginBottom = "15px";
title.style.cursor = "pointer";

let description = document.createElement("p");
description.className = "description";
description.innerText = "Our Equilibrium collection promotes balance and calm.";
description.style.fontSize = "300";
description.style.color = "hsl(215, 51%, 70%)";
description.style.maxWidth = "300px";
description.style.lineHeight = "20px";
description.style.marginBottom = "10px";

let price = document.createElement("div");
price.className = "price";
price.style.display = "flex";
price.style.justifyContent = "space-between";

let info = document.createElement("div");
info.className = "info";

let iconEth = document.createElement("img");
iconEth.className = "icon-ethereum";
iconEth.src = "./images/icon-ethereum.svg";
iconEth.style.marginRight = "5px";

let iconDesc = document.createElement("p");
iconDesc.className = "icon-desc";
iconDesc.innerText = "0.041 ETH";
iconDesc.style.fontWeight = "600";
iconDesc.style.marginTop = "20px";
iconDesc.style.color = "hsl(178, 100%, 50%)";
iconDesc.style.display = "inline-block";

let time = document.createElement("div");
time.className = "time";
time.style.display = "flex";
time.style.alignItems = "center";
time.style.marginBottom = "15px";

let imgTime = document.createElement("img");
imgTime.className = "time-img";
imgTime.style.marginRight = "5px";
imgTime.src = "./images/icon-clock.svg";

let timeDesc = document.createElement("p");
timeDesc.className = "time-desc";
timeDesc.style.color = "hsl(215, 51%, 70%)";
timeDesc.innerText = "3 days left";
timeDesc.style.marginTop = "20px";

let line = document.createElement("hr");
line.className = "line";
line.style.borderColor = "hsl(215, 32%, 27%)";
line.style.margin = "-10px";

let avatar = document.createElement("div");
avatar.className = "avatar";
avatar.style.alignItems = "center";
avatar.style.marginTop = "20px";
avatar.style.display = "flex";

let avatarImg = document.createElement("img");
avatarImg.className = "avatar-img";
avatarImg.src = "./images/image-avatar.png";
avatarImg.style.maxWidth = "35px";
avatarImg.style.marginRight = "15px";
avatarImg.style.border = "2px solid white";
avatarImg.style.borderRadius = "50%";

let avatarTxt = document.createElement("span");
avatarTxt.className = "avatar-text";
avatarTxt.innerText = "Creation of";
avatarTxt.style.fontSize = "17px";
avatarTxt.style.color = "hsl(215, 51%, 70%)";
avatarTxt.style.textAlign = "center";
avatarTxt.style.cursor = "pointer";

let avatarName = document.createElement("span");
avatarName.className = "avatar-name";
avatarName.style.color = "hsl(0, 0%, 100%)";
avatarName.innerText = " Jules Wyvern";

document.body.appendChild(wrapper);
wrapper.appendChild(card);
card.appendChild(imgEquil);
// card.appendChild(overlay);
// card.appendChild(imgView);
card.appendChild(title);
card.appendChild(description);
card.appendChild(price);
price.appendChild(info);
info.appendChild(iconEth);
info.appendChild(iconDesc);
price.appendChild(time);
time.appendChild(imgTime);
time.appendChild(timeDesc);
card.appendChild(line);
card.appendChild(avatar);
avatar.appendChild(avatarImg);
avatar.appendChild(avatarTxt);
avatarTxt.appendChild(avatarName);
