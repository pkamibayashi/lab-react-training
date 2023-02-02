import { useState } from 'react';
import Glass from '../../assets/images/maxence-glasses.png';
import NoGlass from '../../assets/images/maxence.png';

export function ClickablePicture() {
  const [image, setImg] = useState(Glass);

  function changeImg() {
    if (image === Glass) {
      setImg(NoGlass);
    } else {
      setImg(Glass);
    }
  }

  return <img src={image} alt="man" onClick={changeImg}></img>;
}
