import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern2.png'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate('/Pages/Portfolio/Portfolio', { state: { headerId: id } });
  };

  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => {
                return <img key={index} src={work.w_img} alt={work.w_name} title={work.w_name} onClick={() => handleItemClick(work.id)}/>
            })}
        </div>
        <Link to="/Pages/Portfolio/Portfolio" className="mywork-link" state={{ scrollToTop: true }}>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </Link>
    </div>
  )
}

export default MyWork