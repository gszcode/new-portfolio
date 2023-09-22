import './Box.css'
import ball_image from '/assets/img/ball.png'
import pc_image from '/assets/img/pc.png'

// eslint-disable-next-line react/prop-types
function Box({ children, contact }) {
  return (
    <div className={contact ? 'about aboutLG' : 'about'}>
      <img src={ball_image} alt="Ball Image" className="ball_img" />
      {children}
      <img src={pc_image} alt="PC Image" className="pc_img" />
    </div>
  )
}

export default Box
