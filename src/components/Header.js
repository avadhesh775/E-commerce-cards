import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Menu from "@mui/material/Menu";
import { useSelector, useDispatch } from "react-redux";
//import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { ADL } from "../redux/actions/actions";

const Header = () => {
  const [price, setPrice] = useState(0);

  const getData = useSelector((state) => state.cartReducer.carts);
  // console.log(getData);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(ADL(id));
  };

  const total = () => {
    let price = 0;
    getData.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };
  useEffect(() => {
    total();
  }, [total]);
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to Carts
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
          </Nav>
          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-sharp fa-solid fa-cart-shopping text-light "
              style={{ fontSize: 30, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getData.length ? (
            <div className="card_details">
              <Table>
                <thead>
                  <tr>
                    <th>Photos</th>
                    <th>Restaurant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink
                              to={`/carts/${e.id}`}
                              onClick={handleClose}
                            >
                              <img
                                src={e.imgdata}
                                alt=""
                                style={{ width: "8rem", height: "5rem" }}
                              ></img>
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>

                            <p> Price:₹ {e.price}</p>
                            <p>quantity {e.qnty}</p>
                            <p
                              style={{
                                color: "red",
                                fontSize: "20",
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(e.id)}
                            >
                              <i className="fas fa-trash smalltrash"></i>
                            </p>
                          </td>
                          <td>
                            <p
                              style={{
                                color: "red",
                                fontSize: "20",
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(e.id)}
                            >
                              <i className="fas fa-trash largetrash"></i>
                            </p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <tr>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
              <div className="totalPrice">
                <p>Total Price:₹ {price}</p>
              </div>
            </div>
          ) : (
            <div className="card_details  d-flex justify-content-center align-item-center">
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",

                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: 22 }}>
                Your Cards Is Empty
                <img
                  width={100}
                  src="https://www.eonbazar.com/images/loading_cart_2.gif"
                  alt=""
                  className="emptycart_img "
                  style={{ width: "5rem", padding: 10 }}
                />
              </p>
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
