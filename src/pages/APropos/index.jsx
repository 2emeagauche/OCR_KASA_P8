import bannerImg from '../../assets/hero-img-about.png'
import Banner from "../../components/Banner"
import Folder from '../../components/Folder'
import { Fragment } from 'react'

const APropos = () => {

  // const {collapsed, setCollapsed} = useState(true)

  return (
    <div className="container">
      <Banner imgsrc={bannerImg} />
      <Folder tabTitle={'Fiabilité'} folderContent={
        <Fragment>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Consequatur placeat inventore doloremque amet voluptatem,</p>
          <p>veniam facilis voluptas suscipit et ex accusantium eligendi totam quia officia at ea? Veritatis, error molestiae.</p>
        </Fragment>
      } />
      <Folder tabTitle={'Respect'} folderContent={
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat inventore doloremque amet voluptatem, veniam facilis voluptas suscipit et ex accusantium eligendi totam quia officia at ea? Veritatis, error molestiae.</p>
      } />
      <Folder tabTitle={'Service'} folderContent={
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat inventore doloremque amet voluptatem, veniam facilis voluptas suscipit et ex accusantium eligendi totam quia officia at ea? Veritatis, error molestiae.</p>
      } />
      <Folder tabTitle={'Sécurité'} folderContent={
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat inventore doloremque amet voluptatem, veniam facilis voluptas suscipit et ex accusantium eligendi totam quia officia at ea? Veritatis, error molestiae.</p>
      } />
    </div>
  )
}

export default APropos