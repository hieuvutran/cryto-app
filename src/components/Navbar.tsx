import React, { useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Typography.Title level={2} className="logo">
          <Link to="/" style={{color:"#F9F5EB"}}>Crypto</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark" style={{padding:"20px"}}>
          <Menu.Item icon={<HomeOutlined />}>
            <Link style={{color:"#E8F9FD"}} to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link style={{color:"#E8F9FD"}} to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
