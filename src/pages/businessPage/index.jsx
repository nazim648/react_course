import React from 'react'
import Layout from '../../Layout'
import Banner from '../../global/banner'
import business from '../../Layout/AustinHumane.webp'

const businessPage = () => {
  return (
    <>
    <Layout>
      <Banner title='This is Business Page' desp='This is bussiness Page desp.' myImg={business}/>
    </Layout>
    </>
  )
}

export default businessPage