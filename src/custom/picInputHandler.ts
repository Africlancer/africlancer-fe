import React from 'react'

export const picInputHandler = (inputRef, inputButton, loader, imgPreview) =>
{
  let input = inputRef.current
  let file = input.files[0]
  let iButton = document.getElementById(inputButton)
  let iLoader = document.getElementById(loader)
  let iPreview = document.getElementById(imgPreview)
  let reader = new FileReader

  iButton.classList.add('hidden')
  iLoader.classList.remove('hidden')
  setTimeout(() => {
    reader.onload = (e) =>
    {
      iPreview.style.backgroundImage = `url(${e.target.result})`
    }
    reader.readAsDataURL(file)
    iLoader.classList.add('hidden')
    iPreview.classList.remove('hidden')
  }, 3000);
  setTimeout(() => {
    iPreview.classList.replace('opacity-0', 'opacity-1')
  }, 4000);

  return file
}