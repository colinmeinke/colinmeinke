import FontFaceObserver from 'fontfaceobserver';

const loadFonts = () => {
  const fontBold = new FontFaceObserver( 'Lato', { style: 'bold' });
  const fontItalic = new FontFaceObserver( 'Lato', { style: 'italic' });
  const fontRegular = new FontFaceObserver( 'Lato', { style: 'normal' });

  Promise.all([
    fontBold.check(),
    fontItalic.check(),
    fontRegular.check(),
  ]).then(() => {
    document.documentElement.className += ' fonts-loaded';
  });
};

export { loadFonts };
