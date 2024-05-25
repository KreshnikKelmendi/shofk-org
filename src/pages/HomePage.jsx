import React from 'react'
import Banner from '../components/Banner/Banner'
import SectionBanner from '../components/Banner/SectionBanner'
import ImportantDates from '../components/dates/ImportantDates'
import DataBanner from '../components/Banner/DataBanner'
import Sponsor from '../components/Banner/Sponsor'

const HomePage = () => {
  return (
    <>
      <Banner />
      <SectionBanner />
      <ImportantDates />
      <Sponsor />
      <DataBanner />
    </>
  )
}

export default HomePage