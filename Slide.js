class Slide {
  constructor(containerSelector, imagePath, imgNameArray, imageMargin = 0) 
  {
    // Set Globals
    this.imageMargin = imageMargin
    this.currentSlide = 1

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

      images[index].imageContainer.style.cssText = `width: 80vw; height: 100%; display: inline; float: left; margin-left: ${this.imageMargin / 2}px; margin-right: ${this.imageMargin / 2}px;`
      images[index].image.style.cssText = "width: 100%; height: 100%"
    }

    // Inject last imageContainer into slidesContainer
    $slidesContainer.appendChild(images[images.length - 1].imageContainer)
    
    // Inject first & second imageContainer into slidesContainer
    for(let i = 0; i < 3; i++)
    {
      $slidesContainer.appendChild(images[i].imageContainer)
    }

    // Set sliderContainerStyle
    this.setSliderContainerStyle($sliderContainer, images)

    // Set slidesContainerStyle
    this.setSlidesContainerStyle($slidesContainer, images)
    
    // Inject slidesContainer into sliderContainer
    $sliderContainer.appendChild($slidesContainer)

    window.addEventListener('click', () => 
    {
      this.updateSlide($slidesContainer, images)
    })
  }

  setSlidesContainerStyle($slidesContainer, images)
  {
    setTimeout(() => 
    {
      if(images[0].imageContainer.offsetWidth == 0)
      {
        this.setSlidesContainerStyle($slidesContainer, images)
      }
      else
      {
        $slidesContainer.style.cssText = `height: 100%; width: max-content; padding-left: ${this.imageMargin / 2}px; padding-right: ${this.imageMargin / 2}px; padding-top: ${this.imageMargin}px;; padding-bottom: ${this.imageMargin}px; transform: translateX(${- images[0].imageContainer.offsetWidth + (images[0].imageContainer.offsetWidth / 8) - (this.imageMargin *2 )}px);`
        console.log(images[0].imageContainer.offsetWidth)
      }
    }, 10)
  }
  setSliderContainerStyle($sliderContainer)
  {
    $sliderContainer.style.cssText = "width: 100vw; height: 100vh; overflow: hidden"
  }
  updateSlide($slidesContainer, images)
  {
    
    this.currentSlide++
    $slidesContainer.style.cssText = `height: 100%; width: max-content; padding-left: ${this.imageMargin / 2}px; padding-right: ${this.imageMargin / 2}px; padding-top: ${this.imageMargin}px;; padding-bottom: ${this.imageMargin}px; transform: translateX(${(- images[0].imageContainer.offsetWidth + (images[0].imageContainer.offsetWidth / 8) - (this.imageMargin * 2)) * this.currentSlide - (images[0].imageContainer.offsetWidth / 8) + 20}px);`
  }
}

