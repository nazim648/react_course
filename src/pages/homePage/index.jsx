import React from 'react'
import Layout from '../../Layout'
import Banner from '../../global/banner'
import newImg from '../../Layout/AlenDonatesAirPurifiersto.webp'

const homePage = () => {
  return (
    <>
    <Layout>
    <Banner title='this is my about data' desp='this is description of about data' myImg={newImg} />
    </Layout>
    </>
  )
}

export default homePage