import {Link, Outlet, useLocation} from "react-router-dom";
import "./header.css";
import avatar from "../../assets/avatar.jpg";

export default function Header() {
  const location = useLocation();
  return(
    <div className='header'>
      <div className='header-btns'>
        <Link to='/glossary'><button className={`btn ${location.pathname === '/glossary' ? 'active' : ''}` }><span>Глоссарий</span></button></Link>
        <Link to='/semantic-graph'><button className={`btn ${location.pathname === '/semantic-graph' ? 'active' : ''}` }><span>Семантический граф</span></button></Link>
      </div>
      <div className='header-info'>
        Жданов Антон
        <img src={avatar} alt="avatar" width={38} height={38} className='info-img'/>
      </div>
      <Outlet/>
    </div>
  )
}
