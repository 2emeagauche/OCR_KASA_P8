import arrow from '../../assets/arrow.png'
import { useState } from 'react'

const Folder = ({tabTitle, folderContent}) => {
  const [collapsed, setCollapsed] = useState(true)
  return (
      <div className={`folder ${collapsed ? '':'opened'}`}>
        <button onClick={() => setCollapsed(!collapsed)}><span>{tabTitle}</span><img src={arrow} alt="" width="26" height="26" className='arrow-anim' /></button>
        <div className="folder-anim">
          <div className="folder-content">
            {folderContent}
          </div>
        </div>
      </div>
  );
};

export default Folder;