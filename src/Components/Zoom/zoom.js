import TopBar from '../Top_bar/top_nav.js'
import TopSection from '../Top_Section/top_section.js'
import BottomSection from '../Bottom_Section/bottom_section.js'
import { PRODUCTS } from '../../App.js'

export default function Zoom() {
    return (
        <div className="zoom">
            <TopBar />
            ZOOM
            <TopSection props={PRODUCTS[1]} />
            <BottomSection props={PRODUCTS} />
        </div>
    );
}