import React from 'react'
import PropTypes from 'prop-types'

const AssetPage = props => {
  return (
    <div><div className='card'>
    <span>{props.assetTitle}<img src={require('../image/info-img.png')}  className="pos-absolute" id="info-img"/></span>
    
    
    
    <p className='asset-header'><b>Description:</b>{props.assetDescription}</p>
  
    <iframe src={props.assetContent}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
    </div></div>
  )
}

AssetPage.propTypes = {}

export default AssetPage