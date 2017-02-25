import FontFaceObserver from 'fontfaceobserver'

const loadFonts = () => {
  const defaultBold = new FontFaceObserver('Lato', { style: 'bold' })
  const defaultItalic = new FontFaceObserver('Lato', { style: 'italic' })
  const defaultRegular = new FontFaceObserver('Lato', { style: 'normal' })

  const monoBold = new FontFaceObserver('Source Code Pro', { style: 'bold' })
  const monoRegular = new FontFaceObserver('Source Code Pro', { style: 'normal' })

  Promise.all([
    defaultBold.check(),
    defaultItalic.check(),
    defaultRegular.check()
  ]).then(() => {
    document.documentElement.className += ' default-fonts-loaded'
  })

  Promise.all([
    monoBold.check(),
    monoRegular.check()
  ]).then(() => {
    document.documentElement.className += ' mono-fonts-loaded'
  })
}

export { loadFonts }
