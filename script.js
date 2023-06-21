const imageContainer = document.querySelector(".image-container");

const btn = document.querySelector(".btn");

btn.onclick = () => {
  const imageNUM = 10;
  for (let num = 0; num < imageNUM; num++) {
    const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainer.appendChild(newImage);
  }
};
