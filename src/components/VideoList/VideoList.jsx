import { useState, } from 'react';

import VideoLink from '../VideoLink/VideoLink';
import Popup from '../Popup/Popup';

const VideoList = ({ list }) => {

  const [idVideo, setIdVideo] = useState('');
  const [openPopup, setOpenPopup] = useState(false);

  const getId = (id) => {
    setIdVideo(id);
    setOpenPopup(true);
  };

  return (
    <div>
      {!!list.length &&
        list.map((item, index) => (
          <VideoLink
            key={index}
            {...item}
            onClick={getId}
          />
        ))}
      <Popup id={idVideo} visible={openPopup} setVisible={setOpenPopup} />
    </div>
  );
};

export default VideoList;
