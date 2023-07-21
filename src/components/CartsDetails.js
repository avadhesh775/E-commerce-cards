import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ADL, ADD, AAA } from "../redux/actions/actions";

const CartsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getData = useSelector((state) => state.cartReducer.carts);
  const dispatch = useDispatch();
  const histry = useNavigate();

  const compere = () => {
    let comparing = getData.filter((ele) => {
      return ele.id == id;
    });
    setData(comparing);
  };
  const send = (ele) => {
    dispatch(ADD(ele));
  };
  // remove one
  const remove = (item) => {
    dispatch(AAA(item));
  };
  useEffect(() => {
    compere();
  }, [id]);
  const dlt = (id) => {
    dispatch(ADL(id));
    histry("/");
  };
  return (
    <>
      <div className=" container mt-2">
        <h2 className="text-center">Items Details Page</h2>
        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata}></img>
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong> Restaurant </strong>:{ele.rname}
                          </p>
                          <p>
                            <strong> Price </strong>:{ele.price}
                          </p>
                          <p>
                            <strong> Dishes </strong>:{ele.address}
                          </p>
                          <p>
                            <strong> total </strong>: {ele.price * ele.qnty}
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-item-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              backgroundColor: "gray",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={
                                ele.qnty <= 1
                                  ? () => dlt(ele.id)
                                  : () => remove(ele)
                              }
                            >
                              -
                            </span>
                            <span style={{ fontSize: 24 }}>{ele.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(ele)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>
                              Rating :{" "}
                              <span
                                style={{
                                  background: "green",
                                  color: "#fff",
                                  padding: "2px 5px",
                                  borderRadius: "4px",
                                }}
                              >
                                {" "}
                                {ele.rating}
                              </span>
                            </strong>
                          </p>
                          <p>
                            <strong>{ele.somedata}: </strong>
                            <span> order place out side</span>
                          </p>
                          <p>
                            <strong>Remove : </strong>
                            <span>
                              <i
                                className=" fas fa-trash"
                                style={{
                                  color: "red",
                                  cursor: "pointer",
                                  fontSize: "22px",
                                }}
                                onClick={() => dlt(ele.id)}
                              ></i>{" "}
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CartsDetails;
