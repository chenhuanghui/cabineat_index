import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function FeatureItem(props) {
  
  useEffect(() => {
    
  },[]);

  return (
        <>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="row">
                        <img className="img-fluid rounded" src="assets/img/website.jpg" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="py-auto">
                        <h3 className="text-center custom">Xây dựng <br/> mối quan hệ khách hàng</h3>
                        <p className="text-center">Keep them comming back to shop for more.</p>
                    </div>
                </div>
            </div>
            
        </>                      
  )
}
