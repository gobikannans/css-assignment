import {AiOutlineStar} from "react-icons/ai"
import {IoIosArrowForward} from "react-icons/io"
import {FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"
import "./App.css"


const App=()=>(
  <div className="bg-container">
    <div className="header-container">
      <img src="https://res.cloudinary.com/dpjowvn70/image/upload/v1676366684/Vector_x9bqcq.png" alt="header" />
      <h1 className="header-heading">Culinary kitchen</h1>
    </div>
      <hr className="hr-line"/>
      <h1 className="heading">VARIETIES</h1>
      <hr className="hr-line-two"/>

    
      <div className="varieties-container">
       <div className="card-container-one">
         <div className="pizza-card">
           <h1 className="pizza-heading">Pizza is a savory dish of Italian origin</h1>
           <p className="pizza-para">Loreum Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br/> the industry.</p>
           <hr className="pizza-card-line"/>
        <div className="pizza-bottom-container">
          <button type="button" className="pizza-btn">Explore   
          <span className="icon"><IoIosArrowForward/></span>
          </button>
        <div className="rating-container">
          <span className="icon"><AiOutlineStar/></span>
          <span className="rated-text">Rated</span>
       </div>
  </div>
</div>
        </div>
        <div className="card-container-two">
          <div className="fries-container">
          <div className="fries-card">
           <h1 className="fries-heading">Crispy French Fries</h1>
           <p className="fries-para">Loreum Ipsum is simply dummy text of the printing and typesetting industry.</p>
           <hr className="card-line"/>
        <div className="card-bottom-container">
          <div className="card-btn">
            <span className="card-text">Explore</span> 
          <span className="card-icon"><IoIosArrowForward/></span>
          </div>
        <div className="rating-container">
          <span className="card-icon"><AiOutlineStar/></span>
          <span className="card-text">Rated</span>
       </div>
  </div>
  </div>
          </div>
          <div className="macaroon-container">
          <div className="macaroon-card">
           <h1 className="macaroon-heading">Macaroon</h1>
           <p className="macaroon-para">Loreum Ipsum is simply dummy text of the printing and typesetting industry.</p>
           <hr className="pizza-line"/>
        <div className="card-bottom-container">
          <div className="card-btn">
            <span className="macaroon-text">Explore</span> 
          <span className="macaroon-icon"><IoIosArrowForward/></span>
          </div>
        <div className="rating-container">
          <span className="macaroon-icon"><AiOutlineStar/></span>
          <span className="macaroon-text">Rated</span>
       </div>
  </div>
  </div>
          </div>

        </div>
        <div className="card-container-three">
          <div className="paneer-container">
          <div className="fries-card">
           <h1 className="fries-heading">Paneer Tikka </h1>
           <p className="fries-para">Loreum Ipsum is simply dummy text of the printing and typesetting industry.</p>
           <hr className="card-line"/>
        <div className="card-bottom-container">
          <div className="card-btn">
            <span className="card-text">Explore</span> 
          <span className="card-icon"><IoIosArrowForward/></span>
          </div>
        <div className="rating-container">
          <span className="card-icon"><AiOutlineStar/></span>
          <span className="card-text">Rated</span>
       </div>
  </div>
  </div>
          </div>
          <div className="doughnut-container">
          <div className="fries-card">
           <h1 className="fries-heading">Doughnut</h1>
           <p className="fries-para">Loreum Ipsum is simply dummy text of the printing and typesetting industry.</p>
           <hr className="card-line"/>
        <div className="card-bottom-container">
          <div className="card-btn">
            <span className="card-text">Explore</span> 
          <span className="card-icon"><IoIosArrowForward/></span>
          </div>
        <div className="rating-container">
          <span className="card-icon"><AiOutlineStar/></span>
          <span className="card-text">Rated</span>
       </div>
  </div>
  </div>
          </div>

        </div>
      </div>

      <div className="cuisine-container">
        <div className="cuisine-card">
          <h1 className="cuisine">Indian Cuisine</h1>
          <p className="cuisine-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className="cuisine-card">
          <h1 className="cuisine">American Cuisine</h1>
          <p className="cuisine-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
        </div>
        <div className="cuisine-card">
          <h1 className="cuisine">Chinese Cuisine</h1>
          <p className="cuisine-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
      </div>


      <h1 className="heading">TOP CHEFS</h1>
      <hr className="hr-line-two"/>
      <div className="top-chef-container">
        <div className="chef-container">
          <div className="chef-card">
            <img src="https://res.cloudinary.com/dpjowvn70/image/upload/v1676366700/Mask_Group_1_xl1ait.png" alt="chef"/>
            <h1 className="chef-heading">Eileen Johnson</h1>
            <p className="chef-para">Executive Chef, USA</p>
          </div>
          <div className="chef-full-card">
            <img src="https://res.cloudinary.com/dpjowvn70/image/upload/v1676366700/Mask_Group_2_tzxipx.png" alt="chef"/>
            <h1 className="chef-card-heading">Robert Downey Jr</h1>
            <p className="chef-card-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="chef-card">
            <img src="https://res.cloudinary.com/dpjowvn70/image/upload/v1676386954/Mask_Group_3_cwh8zv.png" alt="chef"/>
            <h1 className="chef-heading">Eileen Johnson</h1>
            <p className="chef-para">Executive Chef, USA</p>
          </div>
        </div>
      </div>


      <div className="food-guide-container">
      <h1 className="food-guide-heading">FOOD GUIDE</h1>
      <hr className="hr-line-three"/>
      <div className="food-guide-items">
        <div className="food-guide-card">
          <img src="https://res.cloudinary.com/dpjowvn70/image/upload/v1676386953/Group_5_wvgbq5.png" alt="food-items" className="food-guide-img"/>
          <h1 className="food-guide-item-heading">VEGETABLES</h1>
          <p className="food-guide-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
        </div>
        <div className="food-guide-card">
          <img src="https://res.cloudinary.com/dpjowvn70/image/upload/v1676386953/Group_2_fw4ezc.png" alt="food-items" className="food-guide-img"/>
          <h1 className="food-guide-item-heading">WHOLE GRAINS</h1>
          <p className="food-guide-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>

      <div className="food-guide-items">
        <div className="food-guide-card">
          <img src="https://res.cloudinary.com/dpjowvn70/image/upload/v1676386953/Group_4_zrbeaf.png" alt="food-items" className="food-guide-img"/>
          <h1 className="food-guide-item-heading">FRUITS</h1>
          <p className="food-guide-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
        </div>
        <div className="food-guide-card">
          <img src="https://res.cloudinary.com/dpjowvn70/image/upload/v1676386953/Group_2_fw4ezc.png" alt="food-items" className="food-guide-img"/>
          <h1 className="food-guide-item-heading">HEALTHY PROTIENS</h1>
          <p className="food-guide-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
        </div>
      </div>
      </div>


      <div className="footer-container">
        <div className="footer-icon-items">
        <div className="icon-container">
          <FiFacebook className="footer-icon"/>
        </div>
        <div className="icon-container">
          <AiOutlineInstagram className="footer-icon"/>
        </div>
        <div className="icon-container">
          <FiTwitter className="footer-icon"/>
        </div>
      </div>
      </div>
  </div>
)

export default App