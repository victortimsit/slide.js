class Slide {
  constructor(containerSelector, imagePath, imgNameArray) 
  {
    // Set slider & slide container
    const $sliderContainer = document.querySelector(containerSelector)
    const $slidesContainer = document.createElement('div')

    // Init images array
    const images = []

    for (const [index, imageName] of imgNameArray.entries()) 
    {
      images.push
      (
        {
          imageContainer: document.createElement('div'),
          image: document.createElement('img'),
        }
      )

      // Set image src
      images[index].image.setAttribute('src', imagePath + imageName)

      // Inject image into imageContainer
      images[index].imageContainer.appendChild(images[index].image)

      images[index].imageContainer.style.cssText = "width: 80vw; height: 100%; display: inline; float: left; margin-left: 10px; margin-right: 10px"
      images[index].image.style.cssText = "width: 100%; height: 100%"
    }

    // Inject imageContainer into slidesContainer
    $slidesContainer.appendChild(images[images.length - 1].imageContainer)

    for(let i = 0; i < 2; i++)
    {
      // Inject imageContainer into slidesContainer
      $slidesContainer.appendChild(images[i].imageContainer)
    }

    $sliderContainer.style.cssText = "width: 100vw; height: 100vh"
    $slidesContainer.style.cssText = "height: 100%; width: max-content; padding-top: 20px; padding-bottom: 20px; padding-left: 10px; padding-right: 10px"

    // Inject slidesContainer into sliderContainer
    $sliderContainer.appendChild($slidesContainer)
  }
}

