import React from 'react'
import AlfredoSelfIcon from '../assets/images/selfIcon.svg'
import icon from '../assets/images/rashmi.svg';
import AboutBox from '../components/About/AboutBox'
import about from '../data/About'
import { UserWrapper, UserTitle, UserDescription, DownloadButton, UserTopic } from '../styles/indexStyle.js'
import Layout from '../components/layout'
import '../styles/index.css';

const IndexPage = () => {
  return <Layout>
  <UserWrapper>
    <UserTitle>Alfredo <span>Mejia</span></UserTitle>
    <UserDescription>
      <div>
        <p>
        Hello there, welcome to my site. I am currently a
        student at the University of Texas at Dallas and
        an aspiring Software Engineer who loves to play sports
        and binge watch documentaries.
        </p>
        <DownloadButton href="https://drive.google.com/file/d/1hLvuclyks6m_InkHh6JisYIhGkbIeNPN/view?usp=sharing"  download title="PLz">Download Resume</DownloadButton>
      </div>
      <img className="selfIcon" src={AlfredoSelfIcon} alt="Person Icon" />
    </UserDescription>
    <UserTopic>
      {
        about.map(item => (<AboutBox key={item.id} info={item} />))
      }
    </UserTopic>
  </UserWrapper>
  </Layout>
}

export default IndexPage
