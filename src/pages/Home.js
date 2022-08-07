import FetchCricket from '../components/FetchCricket'
import FetchFootball from'../components/FetchFootball'
import FetchVolleyball from '../components/FetchVolleyball'
import FetchHockey from '../components/FetchHockey'
const Home=()=>{
    return(
        <div className="home">
            <h2>SPORTS THINGS</h2>
            <div className='cricket'>
                <h3><u>Cricket</u></h3>
                <p>The cricket sports things are available in this field: Bat, Ball, Helmet, Gloves and etc.,</p>
                <FetchCricket/>
            </div>
            <div className="football">
                <h3><u>Football</u></h3>
                <p>The football sports things are available in this field: Football, Boot, Pads</p>
                <FetchFootball/>
            </div>
            <div className="volleyball">
               <h3><u>Volleyball</u></h3>
               <p>The volleyball sports things are avalilable in this field: Volleyball, Nets</p>
                <FetchVolleyball/>
            </div>
            <div className="hockey">
                <h3><u>Hockey</u></h3>
                <p>The hockey sports this are available in this field: Hockeyball,Stick</p>
                <FetchHockey/>
            </div>
            <div className="populate">
                <div className='text'>
                   <div className='shop'>
                       <p>Shop</p>
                    </div>
                    <div className='information'>
                        <p>Information</p>
                    </div>
                    <div className='explore'>
                        <p>Explore</p>
                    </div>
                    <div className='customer'>
                        <p>Customer Service</p>
                    </div>
                </div>
                <div className='shop-details'>
                    <div className='scolor'>
                        <p>Sports</p>
                        <p>Fitness</p>
                        <p>Clothing</p>
                        <p>Accessories</p>
                    </div>
                </div>
                <div className='information-details'>
                    <div className='icolor'>
                        <p>Shoping & Returns</p>
                        <p>Public Policy</p>
                        <p>Private Policy</p>
                        <p>Payment Methods</p>
                    </div>
                </div>
                <div className='explore-details'>
                    <div className='ecolor'>
                        <p>About</p>
                        <p>Contact</p>
                        <p>Stockists</p>
                        <p>News</p>
                    </div>
                </div>
                <div className='customer-details'>
                   <div className='ccolor'>
                      <p>Phone No:+91 98435-21717</p>
                      <p>Email:sportsland@gmail.com</p>
                      <p>Instagram Id:SS_sports$$</p>
                      <p>Facboook Id:SS_sportsland**</p>
                   </div>
                </div>
                <h4>SS_sportsland 2022</h4>
            </div>
         </div>
    )
}
export default Home