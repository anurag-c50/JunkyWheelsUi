import React from 'react'
import './App.css'
import Accountabilitylogo from "./logo/Account.png"
import Personalitylogo from './logo/Personal.png'
import Transparencylogo from './logo/Transperenecy.png'
import Qualitylogo from './logo/Quality.png'
import Personalityimg from './logo/Personalimg.png'
import Transparencyimg from './logo/Transperencyimg.png'
import Qualityimg from './logo/Qualityimg.png'
import RigionLogo from './logo/Rigion.png'
import Applogo from './logo/Applogo.png'
import carlogo from './logo/carLogo.png'
import Accountabilityimg from './logo/image_2024_12_26T08_44_59_825Z.png'
import carlogo1 from './logo/carlogo1.png'
import styled from "styled-components"
export default function App() {
  const carbutton=[{
    buttonname:"Hatchback",
    id:"Hatchback",
    className:"buttoncar"
  },{
    id:"Sedan",
    buttonname:"Sedan",
    className:"buttoncar"
  },{
    id:"MUV",
    buttonname:"MUV",
    className:"buttoncar"
  },{
    id:"LuxurySedan",
    buttonname:"Luxury Sedan",
    className:"buttoncar"
  },{
    id:"LuxurySUV",
    buttonname:"Luxury SUV",
    className:"buttoncar"
  }
]
  const cardcity=[{
    img:RigionLogo,
    cityname:"All cities"
  },{
    img:RigionLogo,
    cityname:"Delhi"
  },{
    img:RigionLogo,
    cityname:"Noida"
  },{
    img:RigionLogo,
    cityname:"Faridabad"
  },{
    img:RigionLogo,
    cityname:"Greater Noida"
  }]
  return (
    <Container>
      <div className="Homefirst">
        <div className="homeimg">
         <div className="header">
           <div className="logoanddrop">
            <div className="logocar">
              <img src={Applogo} alt="" />
            </div>
            <div className="drop">
            <div className="buttonlocation">
            <i class="fa fa-map-marker icon"></i>
            <select name="" id="" className='selectbutton'>
            <option value="">Noida</option>
            </select>
            </div>
            </div>
          </div>
          <div className="menubar">
          <select name="" id="" className='menubarselectbutton'>
            <option value="">Buy a Car</option>
            </select>
            <select name="" id="" className='menubarselectbutton'>
            <option value="">Sell a Car</option>
            </select>
            <select name="" id="" className='menubarselectbutton'>
            <option value="">About Us</option>
            </select>
            <select name="" id="" className='menubarselectbutton'>
            <option value="">Contact Us</option>
            </select>
          </div>
          <div className="buttons">
            <div className="buttonicon">
            <i class="fa fa-heart heatbellicon"></i>
            <i class="fa fa-bell heatbellicon"></i>
            </div>
            <div className="loginsignupbutton">
            <input type="button" className='Loginbutton' value="Login" />
            <input type="button" className='Signupbutton' value="Signup" />
            </div>
          </div> 
          <div className="phonemenubar">
            <div className='menuicon'>
              <img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E" alt="" />
            </div>
            <div className='threebutton'>
            <div className="logos">
              <img src={Applogo} alt="" />
            </div>
              <div className="loginsihnup">
            <input type="button" className='Loginbutton' value="Login" />
            <input type="button" className='Signupbutton' value="Signup" />
            </div>
            </div>
          </div>
        </div> 
        <div className="Headline">
          <div className="headlineimg">
            <h2>Shift Gears With Confidence:</h2>
            <h3>Buy and Sell Cars <small>with ease</small>
            </h3>
            <p>fom browsing to closing the deal, we've got your journey covered</p>
            <div className="buttonBuycarsellcar">
              <input type="button" className='Buycarbutton' value="Buy Car" />
              <input type="button" className='sellcarbutton' value="Sell Car"/>
            </div>
          </div>
        </div>
        </div>
        <div className="carsearchmenu">
          <div className="subcarsearchmenu">
          <div className="button">
            {carbutton.map((item,index)=>{return(
              <input type="button" value={item.buttonname} className={item.className} id={item.id}/>
          )})}
                      </div>
            <div className="searchbar">
              <div className="inputsearchcar">
                <div className="searchicon">
                <i class="fa fa-search" aria-hidden="true"></i>
                </div>
                <input className='inputsearch' type="text" name="" placeholder='Search For cars' />
                <input className='searchbutton' type="button" value="Search" />
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="HomeSecond">
          <div className="cards">
          <div className="tagline"><h2>Why you should choose us?</h2></div>

            <div className="cardsone">
              <div className="maincard">
              <div className="subonecards">
                <div className="taglinecardone">
                  <div className="taglinecardoneicon">
                    <img src={Accountabilitylogo} alt="" />
                  </div>
                <h2>Accountability</h2>
                </div>
                <div className="onecardparagraph">
           
                  <div className='onecardparagraphall'>
                <p className='onecardparagraphone'>Trust us to ensure <small> transparency and reliability </small></p>
                <p className='onecardparagraphtwo'>making your car transaction effortless and secure</p>
                <p className='onecardparagraphthree'>we hold ourselves to the highest standard of <small> accountability. </small> Our team is dedicated to delivering on our</p>
                <p className='onecardparagraphfour'>promises and ensuring that every customer feels valued</p>
                </div>
                <div className="Accountabilityimg">
                    <img src={Accountabilityimg} alt="" />
                  </div>
                </div>
              </div>
              <div className="subtwocards">
              <div className="taglinecardtwo">
                  <div className="taglinecardtwoicon">
                    <img src={Personalitylogo} alt="" />
                  </div>
                <h2>Personalised Experience</h2>
                </div>
                <div className="twocardparagraph">
                  <div className='twocardparagraphall'>
                <p className='twocardparagraphtwo'>Embark on a journey <small> trailored just for you, </small>where every moment is crafted to reflect your unique desires and aspirations.</p>
                <p className='twocardparagraphthree'>At JunkyWheels, we understand that every customer has unique need and preferences.</p>
                <p className='twocardparagraphfour'><small>We are dedicated to provide a personalised car-buying that caters to your specific requirements.</small></p>
              </div>
              <div className="Personalisedimg">
                    <img src={Personalityimg} alt="" />
                                  </div>              
                                  </div>

                  </div>
              </div>
            </div>
            <div className="cardstwo">
            <div className="maincard">
              <div className="subtwocards">
              <div className="taglinecardonepart">
                  <div className="taglinecardsuboneicon">
                    <img src={Transparencylogo} alt="" srcset="" />
                  </div>
                <h2>Transparency</h2>
                </div>
                <div className="onepartcardparagraph">
         
                <div className='onepartcardparagraphoneall'>
                <p className='onepartcardparagraphone'>Trust in our transpaernt process for a <small>stress-free and confident</small> car buying or selling experience.</p>
                <p className='onepartcardparagraphtwo'>Tranparency is at heart of our business. We believe in providing claer, honest information to help you make</p>
                <p className='onepartcardparagraphthree'>informed decision</p>
                <p className='onepartcardparagraphfour'>Every car in our inventory comes with a comprehensive history report,detailed specifications, and an in-depth inspection report.</p>
                </div>
                <div className="Transparencyimg">
                  <img src={Transparencyimg} />
                </div>
              </div>
              </div>
              <div className="subonecards">
              <div className="taglinecardtwopart">
                  <div className="taglinecardsubtwoicon">
                    <img src={Qualitylogo} alt="" srcset="" />
                  </div>
                <h2>Quality</h2>
                </div>
                <div className="twopartcardparagraph">
       <div className='twopartcardparagraphoneall'>
                <p className='twopartcardparagraphone'>Experience <small> seamless transaction </small> and find your perfect rider with confidence.</p>
                <p className='twopartcardparagraphtwo'>we are committed to offering only the <small>highest quality vehicles.</small> Each car undergoes a rigorous inspection and reconditioning process to ensure it meets our strict standards. Experience</p>
       
                </div>
                <div className="Qualityimg">
                  <img src={Qualityimg} />
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="HomeFourth">
          <div className="carslogo">
          <div className="box one"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box two"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box three"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box four"></div>
          <div className="Homefourthtag">
            <h2>Exploar Popular Brands</h2>
          </div>
          <div className="cardlogoCintainer">
            <div className="onecardcar">
            <div className="cardcontainernameimg">
              <div className="carimg">
                <img src={carlogo} alt="" />
              </div>
              <h3 className="carname">
                Nissan
              </h3>
            </div>
            <div className="cardcontainernameimg">
              <div className="carimg">
                <img src={carlogo1} alt="" />
              </div>
              <h3 className="carname">
                Tata
              </h3>
            </div>
            <div className="cardcontainernameimg">
              <div className="carimg">
                <img src={carlogo} alt="" />
              </div>
              <h3 className="carname">
                Toyota
              </h3>
            </div>
            <div className="cardcontainernameimg">
              <div className="carimg">
                <img src={carlogo1} alt="" />
              </div>
              <h3 className="carname">
                BMW
              </h3>
            </div>
            <div className="cardcontainernameimg">
              <div className="carimg">
                <img src={carlogo} alt="" />
              </div>
              <h3 className="carname">
                Mahindra
              </h3>
            </div>
            </div>
            <div className="twocardcar">
            <div className="cardcontainernameimg">
              <div className="carimg">
                <img src={carlogo1} alt="" />
              </div>
              <h3 className="carname">
                Hyundai
              </h3>
            </div>
            <div className="cardcontainernameimg">
              <div className="carimg">
                <img src={carlogo} alt="" />
              </div>
              <h3 className="carname">
                Honda
              </h3>
            </div>
            <div className="cardcontainernameimg">
              <div className="carimg">
                <img src={carlogo1} alt="" />
              </div>
              <h3 className="carname">
                Suzuki
              </h3>
            </div>
            <div className="cardcontainernameimg">
              <div className="carimg">
                <img src={carlogo} alt="" />
              </div>
              <h3 className="carname">
                Ford
              </h3>
            </div>
            <div className="cardcontainernameimg">
              <div className="carimg">
                <img src={carlogo1} alt="" />
              </div>
              <h3 className="carname">
                Volkswagen
              </h3>
            </div>
          </div>
          </div>
          </div>
          </div>
          <div className="HomeFifth">
<div className="dealing-section">
  <div className="container">
    <h2>Dealing Across India</h2>
    <div className="cities-grid">
      {cardcity.map((city, index) => (
        <div className="city-card" key={index}>
          <div className="city-image">
            <img src={city.img} alt={city.name} />
          </div>
          <h3>{city.cityname}</h3>
        </div>
      ))}
    </div>
  </div>
</div>
</div>

<footer className="main-footer">
  <div className="footer-container">
    <div className="footer-column logo-column">
      <img src={Applogo} alt="Junky Wheels" className="footer-logo" />
      <p className="footer-description">
        Your trusted partner in buying quality second-hand cars. 
        Revolutionizing the pre-owned car market with transparency 
        and personalized service.
      </p>
      <div className="email-contact">
        <div className="mail-icon" />
        <a href="mailto:contact@junkywheels.com">contact@junkywheels.com</a>
      </div>
    </div>

    <div className="footer-column">
      <h4>Our Company</h4>
      <ul className="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/buy">Buy a Car</a></li>
        <li><a href="/sell">Sell a Car</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>Legals</h4>
      <ul className="footer-links">
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/cookies">Cookie Policy</a></li>
        <li><a href="/terms">Terms & Conditions</a></li>
        <li><a href="/returns">Returns & Refunds</a></li>
      </ul>
    </div>

    <div className="footer-column social-column">
      <h4>Follow Us</h4>
      <div className="social-icons">
      <a target="_blank" href="https://www.instagram.com/accounts/login/?hl=en"><i class="fa fa-instagram inst"></i></a>             
           <a target="_blank" href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"><i class="fa fa-facebook-f facebook"></i></a>
           <a target="_blank" href="https://x.com/?lang=en"> <p className='twitter'>x</p></a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} Junky Wheels. All rights reserved.</p>
  </div>
</footer>
    </Container>
  )
}
const Container=styled.div`

`