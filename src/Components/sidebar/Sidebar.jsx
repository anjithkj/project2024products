import React from 'react'
import "../sidebar/sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import TimelineIcon from '@mui/icons-material/Timeline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top"><span className="logo">lamadmin</span></div>
<hr/>
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <li>
                <PersonOutlineOutlinedIcon className='icon'/>
                <span>Users</span>
            </li>
            <li>
                <StoreIcon className='icon'/>
                <span>Product</span>
            </li>
            <li>
                <CreditCardIcon className='icon'/>
                <span>Orders</span>
            </li>
            <li>
                <LocalShippingIcon className='icon'/>              
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
                <AssessmentIcon className='icon'/>
               <span>stats</span>
            </li>
            <li> <NotificationsNoneIcon className='icon'/>
                <span>Notification</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
            <SystemSecurityUpdateGoodIcon className='icon'/>
                <span>System Health</span>
            </li>
            <li>
                
                <TimelineIcon className='icon'/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsOutlinedIcon className='icon'/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
                <AccountCircleOutlinedIcon className='icon'/>
                <span>Profile</span>
            </li>
            <li>
                <LogoutOutlinedIcon className='icon'/>
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
