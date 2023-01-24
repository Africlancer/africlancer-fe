import React from 'react'

interface IPictureInput
{
  inputRef: React.MutableRefObject<HTMLInputElement>,
  inputButton: string,
  loader: string,
  imgPreview: string
}


export const picInputHandler = (args: IPictureInput) =>
{
  let input = args.inputRef.current
  let file = input.files[0]
  let iButton = document.getElementById(args.inputButton)
  let iLoader = document.getElementById(args.loader)
  let iPreview = document.getElementById(args.imgPreview)
  let reader = new FileReader

  if(file !== undefined)
  {
    if(file.type == 'image/jpeg' || file.type == 'image/png')
    {
      if(file.size < 600000)
      {
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
      else
      {
        console.log('ynah')
      }
    }
    else
    {
      console.log('nah');
    }
  }

}

export const clearPic = (inputButton: string, imgPreview: string) =>
{
  let iButton = document.getElementById(inputButton)
  let iPreview = document.getElementById(imgPreview)

  iPreview.classList.replace('opacity-1', 'opacity-0')
  setTimeout(() => {
    iPreview.classList.add('hidden')
  }, 500);
  setTimeout(() => {
    iButton.classList.remove('hidden')
  }, 1000);
}