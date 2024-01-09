import React, { useRef, useState, useEffect } from "react";
import { BrowserQRCodeReader } from "@zxing/library";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button } from "primereact/button";

const Scan = ({ getAPI }:{ getAPI: any }) => {
  const videoRef = useRef(null);
  const codeReader = new BrowserQRCodeReader();
  const [scanning, setScanning] = useState(false);
  const [scannedData, setScannedData] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const { organization } = useSelector((state: any) => state.Login);


  const postAPI = async () => {
    let convertedDId = deviceId;
    convertedDId = convertedDId.replace(/(.{2})/g, "$1:");
    convertedDId = convertedDId.slice(0, -1);
    try {
      const res = await axios.post("http://47.32.254.89:7000/api/add", {
        deviceId: convertedDId,
        deviceName,
        organization
      });
      if (res.data.message === "Beacon details saved successfully..") {
        // window.location.reload();
        closeModal();
        setDeviceId("");
        setDeviceName("");
        getAPI();
      }
    } catch (error) {
      console.log(error);
      alert("something wrong..");
      setDeviceId("");
      setDeviceName("");
    }
  };
  const startScanning = async () => {
    try {
      setScanning(true);
      const videoInputDevices = await codeReader.listVideoInputDevices();
      const selectedDeviceId = videoInputDevices[0].deviceId;
      const constraints = {
        video: { deviceId: selectedDeviceId },
      };
      codeReader.decodeFromVideoDevice(
        selectedDeviceId,
        videoRef.current,
        (result:any, err:any) => {
          if (result) {
            setScannedData(result.getText());
            setDeviceId(result.getText());
            setScanning(false);

            // Automatically open the modal
            const modal = document.getElementById("exampleModal");
            if (modal) {
              modal.classList.add("show");
              modal.style.display = "block";
            }
          }
          if (err && err.name === "NotFoundError") {
            console.error("No QR code found in the video feed.");
          }
          if (err) {
            console.error("Error during scanning:", err);
          }
        },
      );
    } catch (error) {
      console.error("Error starting the scanner:", error);
    }
  };

  useEffect(() => {
    if (scanning) {
      startScanning();
    } else {
      codeReader.reset();
    }

    return () => {
      codeReader.reset();
    };
  }, [scanning]);

  const handleDeviceNameChange = (e:any) => {
    setDeviceName(e.target.value);
  };

  const closeModal = () => {
    const modal = document.getElementById("exampleModal");
    if (modal) {
      modal.classList.remove("show");
      modal.style.display = "none";
      setDeviceId("");
      setDeviceName("");
      setScannedData("");
    }
  };
  return (
    <div >
      {/* <button className="scanbtn" onClick={() => setScanning(!scanning)}>
        {scanning ? "Stop Scanning" : "Start Scanning"}
      </button> */}
      <Button label={scanning ? "Stop Scanning" : "Start Scanning"} style={{ backgroundColor: '#0f3995' }} onClick={() => setScanning(!scanning)} />

      <video ref={videoRef} style={{ display: scanning ? "block" : "none" }} />

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Device
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="deviceName"
                  placeholder="Device Name"
                  value={deviceName}
                  onChange={handleDeviceNameChange}
                />
                <label htmlFor="deviceName">Device Name</label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="deviceId"
                  placeholder="Device ID"
                  value={deviceId}
                  readOnly
                />
                <label htmlFor="deviceId">Device ID</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={postAPI}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <input className="mt-2"
        type="text"
        placeholder="Scanned Text"
        value={scannedData}
        readOnly
      />
    </div>
  );
};

export default Scan;
