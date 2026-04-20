import { data } from '../../data/Data';
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {

    // siapin logic-logic JS disini

    return (
        <footer>

{/* cond coding */}
            {/* isi semua kode disini dan di file CSS buat urusan DESIGN */}
            {/* dan di data/Data.js untuk urusan DATA */}

            {/* taro ini buat nanti link ke page Design System */}
            <Link to="/design-system" style={{ cursor: 'pointer' }}>Design System</Link>
        </footer>
    )
}
export default Footer;