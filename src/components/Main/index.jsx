import React from 'react'
import PestovskyTimberPlant from './PestovskyTimberPlant'
import AboutCompany from './AboutCompany'
import SelectDepartment from './SelectDepartment'
import CompanyAdvantages from './CompanyAdvantages'
import CompanyProjects from './CompanyProjects'
import Career from './Career'
import OurSuccesses from './OurSuccesses'


export default function Main() {
  return (
    <main>
        <PestovskyTimberPlant />
        <AboutCompany />
        <SelectDepartment />
        <CompanyAdvantages />
        <CompanyProjects />
        <Career />
        <OurSuccesses />
    </main>
  )
}
