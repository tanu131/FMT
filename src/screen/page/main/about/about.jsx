import React from 'react'
import DefaultBreadcrumb from '../../../component/breadCrumbs/defaultBreadCrumbs';
import Category from '../home/innerScreen/category/category';
const breadcrumbs = [
  {label: "Home", url: "/"},
  {label: "Conditions", url: ""},
]
const About = () => {
  return (
    <div>
       <DefaultBreadcrumb breadcrumbs={breadcrumbs}/>
      <Category/>
    </div>
  )
}

export default About
