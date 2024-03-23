import Header from '@/components/shared/header'
import React from 'react'
import { transformationTypes } from '@/constants'
import TransformationForm from '@/components/shared/TransformationForm'
const AddTransformationTypePage = ({params:{type}}:SearchParamProps) => {
  const Transformation = transformationTypes[type]
  return (
    <>
      <Header title={Transformation.title} subTitle={Transformation.subTitle} />
      <TransformationForm />
    </>
  )
}

export default AddTransformationTypePage