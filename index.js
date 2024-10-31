
// window.addEventListener("load",()=>{ 
//     console.log("gayab")
//   setTimeout(() => {
//     let hii=document.getElementById("hii")
//     hii.style.display="none"
//   }, 3000); 
// })
const container = document.querySelector('.container');
  const image = document.getElementById('movableImage');
  // const image = document.getElementById('divimage')
  const maxRadius = 200; // Define maximum radius in pixels

  // Track the original center position of the image
  const centerX = container.offsetWidth / 2;
  const centerY = container.offsetHeight / 2;
  //  Get container center position after the DOM has loaded
// let centerX, centerY;
// window.addEventListener('load', () => {
//   const rect = container.getBoundingClientRect();
//   centerX = rect.left + rect.width / 2;
//   centerY = rect.top + rect.height / 2;
// });
  container.addEventListener('mousemove', (event) => {
    // Get the position of the mouse relative to the container
    const c1=document.getElementById('movableImage1')
    c1.style.display="none"
    const c2=document.getElementById('movableImage2')
    c2.style.display="none"
    const c3=document.getElementById('movableImage3')
    c3.style.display="none"
    image.style.zIndex="100"
    const bigTexts = document.getElementsByClassName('big-text');
    for(let i=0;i<bigTexts.length;i++)
    {
      let bigText=bigTexts[i];
      bigText.style.fill="#212121"
      bigText.style.stroke="rgb(191,186,186)"
      bigText.style.strokeWidth="0.1px"
    }

    const rect = container.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    // const mouseX = event.clientX
    // const mouseY = event.clientY
    // const mouseX = event.clientX;
    // const mouseY = event.clientY;

    // Calculate the distance and angle from the center
    const dx = mouseX - centerX;
    const dy = mouseY - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Limit the movement within maxRadius
    if (distance <= maxRadius) {
      image.style.transition = 'none'; // Disable transition during movement
      image.style.transform = `translate(${dx}px, ${dy}px)`;
    } else {
      resetImage(); // Smoothly reset position if radius exceeded
    }
  });

  // Reset position smoothly when mouse leaves
  image.addEventListener('mouseleave', resetImage);

  function resetImage() {
    const c1=document.getElementById('movableImage1')
    c1.style.display=""
    const c2=document.getElementById('movableImage2')
    c2.style.display=""
    const c3=document.getElementById('movableImage3')
    c3.style.display=""
    const bigTexts = document.getElementsByClassName('big-text');
    for(let i=0;i<bigTexts.length;i++)
    {
      let bigText=bigTexts[i];
      bigText.style.fill="white"
    }
    image.style.transition = 'transform 0.5s ease'; // Enable smooth return transition
    image.style.transform = 'translate(0, 0)';
  }


  const container1 = document.querySelector('.container1');
  const image1 = document.getElementById('movableImage1');
  const maxRadius1 = 200; // Define maximum radius in pixels
  
  // Track the original center position of the image
  const centerX1 = container.offsetWidth / 2;
  const centerY1 = container.offsetHeight / 2;

  container1.addEventListener('mousemove', (event) => {
    // Get the position of the mouse relative to the container
    const c=document.getElementById('movableImage')
    c.style.display="none"
    const c2=document.getElementById('movableImage2')
    c2.style.display="none"
    const c3=document.getElementById('movableImage3')
    c3.style.display="none"

    const bigTexts = document.getElementsByClassName('big-text');
    for(let i=0;i<bigTexts.length;i++)
    {
      let bigText=bigTexts[i];
      bigText.style.fill="#212121"
      bigText.style.stroke="rgb(191,186,186)"
      bigText.style.strokeWidth="0.1px"
    } 
    const rect = container1.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Calculate the distance and angle from the center
    const dx = mouseX - centerX1;
    const dy = mouseY - centerY1;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Limit the movement within maxRadius
    if (distance <= maxRadius1) {
      image1.style.transition = 'none'; // Disable transition during movement
      image1.style.transform = `translate(${dx}px, ${dy}px)`;
    } else {
      resetImage1(); // Smoothly reset position if radius exceeded
    }
  });

  // Reset position smoothly when mouse leaves
  container1.addEventListener('mouseleave', resetImage1);
  function resetImage1() {
    const c=document.getElementById('movableImage')
    c.style.display=""
    const c2=document.getElementById('movableImage2')
    c2.style.display=""
    const c3=document.getElementById('movableImage3')
    c3.style.display=""
    const bigTexts = document.getElementsByClassName('big-text');
    for(let i=0;i<bigTexts.length;i++)
    {
      let bigText=bigTexts[i];
      bigText.style.fill="white"
    }
    image1.style.transition = 'transform 0.5s ease'; // Enable smooth return transition
    image1.style.transform = 'translate(0, 0)';
  }
  const container2 = document.querySelector('.container2');
  const image2 = document.getElementById('movableImage2');
  const maxRadius2 = 200; // Define maximum radius in pixels

  // Track the original center position of the image
  const centerX2 = container.offsetWidth / 2;
  const centerY2 = container.offsetHeight / 2;

  container2.addEventListener('mousemove', (event) => {
    const c=document.getElementById('movableImage')
    c.style.display="none"
    const c1=document.getElementById('movableImage1')
    c1.style.display="none"
    const c3=document.getElementById('movableImage3')
    c3.style.display="none"

    const bigTexts = document.getElementsByClassName('big-text');
    for(let i=0;i<bigTexts.length;i++)
    {
      let bigText=bigTexts[i];
      bigText.style.fill="#212121"
      bigText.style.stroke="rgb(191,186,186)"
      bigText.style.strokeWidth="0.1px"
    }
    // Get the position of the mouse relative to the container
    const rect = container2.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Calculate the distance and angle from the center
    const dx = mouseX - centerX2;
    const dy = mouseY - centerY2;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Limit the movement within maxRadius
    if (distance <= maxRadius2) {
      image2.style.transition = 'none'; // Disable transition during movement
      image2.style.transform = `translate(${dx}px, ${dy}px)`;
    } else {
      resetImage2(); // Smoothly reset position if radius exceeded
    }
  });

  // Reset position smoothly when mouse leaves
  container2.addEventListener('mouseleave', resetImage2);
  function resetImage2() {
    const c=document.getElementById('movableImage')
    c.style.display=""
    const c1=document.getElementById('movableImage1')
    c1.style.display=""
    const c3=document.getElementById('movableImage3')
    c3.style.display=""
    const bigTexts = document.getElementsByClassName('big-text');
    for(let i=0;i<bigTexts.length;i++)
    {
      let bigText=bigTexts[i];
      bigText.style.fill="white"
    }
    image2.style.transition = 'transform 0.5s ease'; // Enable smooth return transition
    image2.style.transform = 'translate(0, 0)';
  }





  const container3 = document.querySelector('.container3');
  const image3 = document.getElementById('movableImage3');
  const maxRadius3 = 200; // Define maximum radius in pixels

  // Track the original center position of the image
  const centerX3 = container.offsetWidth / 2;
  const centerY3 = container.offsetHeight / 2;

  container3.addEventListener('mousemove', (event) => {
    const c=document.getElementById('movableImage')
    c.style.display="none"
    const c1=document.getElementById('movableImage1')
    c1.style.display="none"
    const c2=document.getElementById('movableImage2')
    c2.style.display="none"

    const bigTexts = document.getElementsByClassName('big-text');
    for(let i=0;i<bigTexts.length;i++)
    {
      let bigText=bigTexts[i];
      bigText.style.fill="#212121"
      bigText.style.stroke="rgb(191,186,186)"
      bigText.style.strokeWidth="0.1px"
    }
    // Get the position of the mouse relative to the container
    const rect = container3.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Calculate the distance and angle from the center
    const dx = mouseX - centerX3;
    const dy = mouseY - centerY3;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Limit the movement within maxRadius
    if (distance <= maxRadius3) {
      image3.style.transition = 'none'; // Disable transition during movement
      image3.style.transform = `translate(${dx}px, ${dy}px)`;
    } else {
      resetImage3(); // Smoothly reset position if radius exceeded
    }
  });

  // Reset position smoothly when mouse leaves
  container3.addEventListener('mouseleave', resetImage3);
  function resetImage3() {
    const c=document.getElementById('movableImage')
    c.style.display=""
    const c1=document.getElementById('movableImage1')
    c1.style.display=""
    const c2=document.getElementById('movableImage2')
    c2.style.display=""
    const bigTexts = document.getElementsByClassName('big-text');
    for(let i=0;i<bigTexts.length;i++)
    {
      let bigText=bigTexts[i];
      bigText.style.fill="white"
      bigText.style.transition = 'transform 0.8s ease';
    }
    image3.style.transition = 'transform 0.5s ease'; // Enable smooth return transition
    image3.style.transform = 'translate(0, 0)';
  }


