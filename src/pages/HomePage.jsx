import React from 'react'
import Banner from '../components/Banner/Banner'
import SectionBanner from '../components/Banner/SectionBanner'
import ImportantDates from '../components/dates/ImportantDates'
import DataBanner from '../components/Banner/DataBanner'
import Sponsor from '../components/Banner/Sponsor'
import Description from '../components/venue/Description'

const HomePage = () => {
  return (
    <>
      <Banner />
      <Description />
      {/* <SectionBanner /> */}
      <ImportantDates />
      <Sponsor />
      <DataBanner />
    </>
  )
}

export default HomePage