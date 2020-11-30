import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Message(props) {
  
  useEffect(() => {
    
  },[]);

  return (
    <div className="py-7 bg-white">
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-10 col-md-6">
                  <h3 className="text-center custom pb-5 text-justify">{props.mess}</h3>
                </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="card">
                  <div className="card-body px-5 pt-7 pb-0">
                    <h3 className="text-center custom">Manage your inventory</h3>
                    <p className="text-center">Unlimited items with minimal stress.</p>
                    <div className="row align-items-center justify-content-center">
                      <Link href="#">
                        <a className="text-center ">Tìm hiểu</a>
                      </Link>
                    </div>
                    <img className="img-fluid rounded" src="https://images.ctfassets.net/2d5q1td6cyxq/5KfN7vb9FWjCWYE1LAQZBZ/5a3757d059ce5a5cfadf06f25601ddd7/Manage-your-inventory-crunch.png" />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="card">
                  <div className="card-body px-5 pt-7 pb-0">
                    <h3 className="text-center custom">Manage your inventory</h3>
                    <p className="text-center">Unlimited items with minimal stress. </p>
                    <div className="row align-items-center justify-content-center">
                      <Link href="#">
                        <a className="text-center ">Tìm hiểu</a>
                      </Link>
                    </div>
                    <img className="img-fluid rounded" src="https://images.ctfassets.net/2d5q1td6cyxq/5HPaJew2dVlk2dgXP0dpCG/0d31ccffaaa341296eafd8099696167f/USEN_retail-mobile-pos-sell-online-and-in-store.png" />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="card">
                  <div className="card-body px-5 pt-7 pb-0">
                    <h3 className="text-center custom">Manage your inventory</h3>
                    <p className="text-center">Unlimited items with minimal stress.</p>
                    <div className="row align-items-center justify-content-center">
                      <Link href="#">
                        <a className="text-center ">Tìm hiểu</a>
                      </Link>
                    </div>
                    <img className="img-fluid rounded" src="https://images.ctfassets.net/2d5q1td6cyxq/5KfN7vb9FWjCWYE1LAQZBZ/5a3757d059ce5a5cfadf06f25601ddd7/Manage-your-inventory-crunch.png" />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="card">
                  <div className="card-body px-5 pt-7 pb-0">
                    <h3 className="text-center custom">Manage your inventory</h3>
                    <p className="text-center">Unlimited items with minimal stress.</p>
                    <div className="row align-items-center justify-content-center">
                      <Link href="#">
                        <a className="text-center ">Tìm hiểu</a>
                      </Link>
                    </div>
                    <img className="img-fluid rounded" src="https://images.ctfassets.net/2d5q1td6cyxq/1kUssHbgcW8glf7Hcae1ik/a2ed331729d337b86952300b8c103c9a/retail-pos-customer-marketing.png" />
                  </div>
                </div>
              </div>

              
            </div>
        </div>
        {/* <img className="img-fluid pt-6" src={props.image_src} /> */}
        <style jsx>{`
        .card-body {

        }
        `}</style>   
    </div>
  )
}
