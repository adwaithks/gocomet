import React from 'react'
import ImageShowcase from '../../components/ImageShowcase/ImageShowcase'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import './DetailsPage.css'

function DetailsPage() {
  return (
    <div className='details-page'>
        <ImageShowcase className='image-showcase-comp' images={['https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/4/18/d335c205-fb51-4e31-b709-b9475a3091c11650284973257RoadsterMenBlackGreyCheckedCasualSustainableShirt1.jpg',
        'https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15508666/2021/9/30/d735dbe8-22ea-45de-a840-7c02505a822b1632983382306-Hancock-Women-Olive-Green-Slim-Fit-Opaque-Cotton-Formal-Shir-1.jpg',
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/4/18/d335c205-fb51-4e31-b709-b9475a3091c11650284973257RoadsterMenBlackGreyCheckedCasualSustainableShirt1.jpg',
        'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/4/18/d335c205-fb51-4e31-b709-b9475a3091c11650284973257RoadsterMenBlackGreyCheckedCasualSustainableShirt1.jpg'
    ]} />
        <ProductInfo className='product-info-comp' sizes={[38,40,42,44,48]} />
    </div>
  )
}

export default DetailsPage