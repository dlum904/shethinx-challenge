// import TopBar from './Components/Top_bar/top_nav.js'
import TopSection from '../Top_Section/top_section.js'
import BottomSection from '../Bottom_Section/bottom_section.js'

// will use this to iterate through different products to show their names and descriptions, etc..
const product = {
    1: {
        id: 1,
        name: "someProduct1",
        img: "/assets/top section images/highwaist_black_front_2_1024x1024.jpg",
        desc: " blah blah blah"
    }
}

export default function Main() {
    return (
        <div className="main">
            MAIN
            <TopSection props={product[1]} />
            <BottomSection props={product} />
        </div>
    );
}