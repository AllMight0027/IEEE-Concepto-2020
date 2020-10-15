import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../navbar/navbar'
import './sticker.css'
const Sticker = () => {
    return (
        <>
        <div className='container'>
            <Navbar/>
            <div className="row" style={{marginTop:130, marginBottom:50}} > 
            <div className="col-12 text-center" style={{ marginBottom: 10 }}>
            <h1 className="font-weight-bold">Stickers</h1>
          </div>
                <div className="col-sm-12 col-md-4 col-xl-3 mb-5 mt-5  text-center" >
                    <img src={require('./sticker conc.png')} alt="" style={{maxHeight:100, marginTop:35, marginLeft:-15 ,marginBottom:35}} />
                    <div className="col-12">
                        <a href='/static/media/sticker%20conc.7be46109.png' target='_blank' download >
                            <button className="btn btn-outline-light">Download</button> 
                        </a>            
                    </div>
                </div> 
                
                <div className="col-sm-12 col-md-4 col-xl-3 mb-5 mt-5  text-center" >
                    <img src={require('./STICK COMFORTA.png')} alt="" style={{maxHeight:150, marginBottom:20}} />
                    <div className="col-12">
                        <a href='/static/media/STICK%20COMFORTA.7804c28c.png' target='_blank' download >
                            <button className="btn btn-outline-light">Download</button> 
                        </a>            
                    </div>
                </div> 
                
                <div className="col-sm-12 col-md-4 col-xl-3 mb-5 mt-5  text-center" >
                    <img src={require('./stick.png')} alt="" style={{maxHeight:150, marginBottom:20}} />
                    <div className="col-12">
                        <a href='/static/media/stick.659b3305.png' target='_blank' download >
                            <button className="btn btn-outline-light">Download</button> 
                        </a>            
                    </div>
                </div> 
                
                <div className="col-sm-12 col-md-4 col-xl-3 mb-5 mt-5  text-center" >
                    <img src={require('./STICKER 1.png')} alt="" style={{maxHeight:150, marginBottom:20}} />
                    <div className="col-12">
                        <a href='/static/media/STICKER%201.a4d63b3a.png' target='_blank' download >
                            <button className="btn btn-outline-light">Download</button> 
                        </a>            
                    </div>
                </div> 
                
                <div className="col-sm-12 col-md-4 col-xl-3 mb-5 mt-5  text-center" >
                    <img src={require('./STICKER 2.png')} alt="" style={{maxHeight:150, marginBottom:20}} />
                    <div className="col-12">
                        <a href='/static/media/STICKER%202.344d87bb.png' target='_blank' download >
                            <button className="btn btn-outline-light">Download</button> 
                        </a>            
                    </div>
                </div> 
                
                <div className="col-sm-12 col-md-4 col-xl-3 mb-5 mt-5  text-center" >
                    <img src={require('./STICKER 3.png')} alt="" style={{maxHeight:150, marginBottom:20}} />
                    <div className="col-12">
                        <a href='/static/media/STICKER%203.731c9e45.png' target='_blank' download >
                            <button className="btn btn-outline-light">Download</button> 
                        </a>            
                    </div>
                </div> 
                
                <div className="col-sm-12 col-md-4 col-xl-3 mb-5 mt-5  text-center" >
                    <img src={require('./STICKER 4.png')} alt="" style={{maxHeight:150, marginBottom:20}} />
                    <div className="col-12">
                        <a href='/static/media/STICKER%204.44777027.png' target='_blank' download >
                            <button className="btn btn-outline-light">Download</button> 
                        </a>            
                    </div>
                </div> 
                
                <div className="col-sm-12 col-md-4 col-xl-3 mb-5 mt-5  text-center" >
                    <img src={require('./STICKER 5.png')} alt="" style={{maxHeight:150, marginBottom:20}} />
                    <div className="col-12">
                        <a href='/static/media/STICKER%205.8fbc13aa.png' target='_blank' download >
                            <button className="btn btn-outline-light">Download</button> 
                        </a>            
                    </div>
                </div> 
                
                <div className="col-sm-12 col-md-4 col-xl-3 mb-5 mt-5  text-center" >
                    <img src={require('./sticker guy.png')} alt="" style={{maxHeight:150, marginBottom:20}} />
                    <div className="col-12">
                        <a href='/static/media/sticker%20guy.1c3d2edf.png' target='_blank' download >
                            <button className="btn btn-outline-light">Download</button> 
                        </a>            
                    </div>
                </div> 

                <div className="col-sm-12 col-md-4 col-xl-3 mb-5 mt-5  text-center" >
                    <img src={require('./sticker guys.png')} alt="" style={{maxHeight:150, marginBottom:20}} />
                    <div className="col-12">
                        <a href='/static/media/sticker%20guys.ae761b29.png' target='_blank' download >
                            <button className="btn btn-outline-light">Download</button> 
                        </a>            
                    </div>
                </div>

                <div className="col-sm-12 col-md-4 col-xl-3 mb-5 mt-5  text-center" >
                    <img src={require('./sticker new.png')} alt="" style={{maxHeight:150, marginBottom:20}} />
                    <div className="col-12">
                        <a href='/static/media/sticker%20new.4fb5541c.png' target='_blank' download >
                            <button className="btn btn-outline-light">Download</button> 
                        </a>            
                    </div>
                </div> 
                
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Sticker
