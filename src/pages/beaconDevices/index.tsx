import axios from "axios";
import React, { useEffect, useState } from "react";
import "./beacon.css";
import Scan from "./Scan";
import ReactPaginate from 'react-paginate';

const QRCodeScanner = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 6;

  const getAPI = async () => {
    try {
      const res = await axios.get("http://47.32.254.89:7000/api/getAll");
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  

  const deleteAPI = async (id:any) => {
    const del = window.confirm(`do you want to miss this data?  ${id}`);
    if (del) {
      try {
        const res = await axios.delete(
          `http://47.32.254.89:7000/api/macDetails/${id}`
        );
        alert("Oops...Data was deleted.");
        getAPI();
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Oh god you save this data.");
    }
  };

  useEffect(() => {
    getAPI();
    //     var x = "48395395fdg398";
    // var formattedX = x.replace(/(.{2})/g, "$1:");
    // formattedX = formattedX.slice(0, -1); // Remove the trailing colon
    // console.log(formattedX);
  }, []);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const displayData = data.slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  return (
    <div className="main">
      <div className="left">
        Add a beacon with QR Scan
        <Scan getAPI={getAPI} />
      </div>
      <div className="right">
        <div>Beacon Details</div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">DEVICE NAME</th>
              <th scope="col">DEVICE ID</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {displayData.map((item:any, index:any) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.deviceName}</td>
                  <td>{item.deviceId}</td>
                  <td style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteAPI(item.id)}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination-container"}
          previousLinkClassName={"previous"}
          nextLinkClassName={"next"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default QRCodeScanner;
