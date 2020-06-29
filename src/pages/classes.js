import React from 'react'
import classes from '../data/Classes'
import { RecWrapper, RecBox, RecDes } from '../styles/recStyle.js'
import Layout from '../components/layout'

const Classes = () => (
  <Layout>
  <RecWrapper>
    <h1>Classes</h1>
    {
      classes.map(item => (<RecBox key={item.id} >
      <h3><a href={item.officialLink}>{item.name}</a></h3>
          <p>Grade: {item.grade}</p>
          <RecDes>{item.description}</RecDes>
        <hr/>
      </RecBox>
      ))
    }
    <p style={{color: "#FFF"}}><b>Note: </b>Not all classes taken have been listed</p>
  </RecWrapper>
  </Layout>
)

export default Classes
