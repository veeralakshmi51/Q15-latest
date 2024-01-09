import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { TextField } from "@mui/material";

export default function ControlledAccordions() {
  const [expandedPanel1, setExpandedPanel1] = React.useState<string | false>(
    false
  );
  const [expandedPanel2, setExpandedPanel2] = React.useState<string | false>(
    false
  );
  const [expandedPanel3, setExpandedPanel3] = React.useState<string | false>(
    false
  );
  const [expandedPanel4, setExpandedPanel4] = React.useState<string | false>(
    false
  );
  const [expandedPanel5, setExpandedPanel5] = React.useState<string | false>(
    false
  );
  const[report, setReport]= React.useState<any>(null)
const[date, setDate]=React.useState("")
  const handleViewDetails = async (date:any) => {
    try {
      const response = await axios.get(`http://47.32.254.89:7000/api/config/getByDate/${date}`); // Replace with your API endpoint
      const reportData = response.data.data; // Adjust according to your API response structure
      console.log(reportData)
      setReport(reportData)
    } catch (error) {
      console.error("Failed to fetch staff details", error);
    }
  };

  React.useEffect(() => {
    handleViewDetails(date)
    console.log(report)
  }, [date]);
  const handleChangePanel1 = (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpandedPanel1(isExpanded ? "panel1" : false);
  };

  const handleChangePanel2 = (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpandedPanel2(isExpanded ? "panel2" : false);
  };

  const handleChangePanel3 = (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpandedPanel3(isExpanded ? "panel3" : false);
  };

  const handleChangePanel4 = (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpandedPanel4(isExpanded ? "panel4" : false);
  };

  const handleChangePanel5 = (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpandedPanel5(isExpanded ? "panel5" : false);
  };

  return (
    <div style={{marginTop:'60px'}}>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center"><h4>Q15 Reports</h4></div>
        <div className="col-md-6"> 
        <p>Q15 Date :</p>
        <TextField
        id="outlined-basic-1"
        label="Q15 Date"
        variant="outlined"
        
        onChange={(e:any) => setDate(e.target.value)}
      /></div>
       
      </div>
      <Accordion
        expanded={expandedPanel1 === "panel1"}
        onChange={handleChangePanel1}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Date : {date}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Print</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {report && (
        <>
          {report.map((item:any, index:any) => (
            
          <Accordion
            expanded={expandedPanel2 === "panel2"}
            onChange={handleChangePanel2}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Patient Name :{ item.pid }
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>Shift</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Accordion
                expanded={expandedPanel3 === "panel3"}
                onChange={handleChangePanel3}
                style={{ backgroundColor: "#F7FAFE" }}
                
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Shift A : {item.shiftIncharge.shiftInchargeA}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="row gap-2">
                    <div className="col-md-1"></div>
                    <div
                      className="col-md-2"
                    //   style={{ backgroundColor: "#0f3995" }}
                    > 
                    <div className="box" style={{textAlign:'end'}}>06:00 AM to 07:45 AM:</div>
                      <div className="box"style={{textAlign:'end'}}>Social Workers:</div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A06</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A06")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B06</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B06")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C06</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C06")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D06</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D06")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A07</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A07")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B07</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B07")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C07</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C07")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D07</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D07")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                  </div>

                  <div className="row my-2 gap-2">
                    <div className="col-md-1"></div>
                    <div
                      className="col-md-2"
                    //   style={{ backgroundColor: "#0f3995" }}
                    > 
                    <div className="box" style={{textAlign:'end'}}>08:00 AM to 09:45 AM:</div>
                      <div className="box"style={{textAlign:'end'}}>Social Workers:</div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A08</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A08")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B08</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B08")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C08</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C08")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D08</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D08")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A09</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A09")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B09</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B09")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C09</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C09")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D09</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D09")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                  </div>

                  <div className="row gap-2">
                    <div className="col-md-1"></div>
                    <div
                      className="col-md-2"
                    //   style={{ backgroundColor: "#0f3995" }}
                    > 
                    <div className="box" style={{textAlign:'end'}}>10:00 AM to 11:45 AM:</div>
                      <div className="box"style={{textAlign:'end'}}>Social Workers:</div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A10</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A10")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B10</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B10")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C10</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C10")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D10</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D10")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A11</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A11")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B11</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B11")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C11</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C11")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D11</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D11")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                  </div>

                  <div className="row my-2 gap-2">
                    <div className="col-md-1"></div>
                    <div
                      className="col-md-2"
                    //   style={{ backgroundColor: "#0f3995" }}
                    > 
                    <div className="box" style={{textAlign:'end'}}>12:00 AM to 13:45 AM:</div>
                      <div className="box"style={{textAlign:'end'}}>Social Workers:</div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A12</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A12")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B12</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B12")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C12</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C12")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D12</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D12")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A13</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A13")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B13</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B13")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C13</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C13")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D13</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "13")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                              <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expandedPanel4 === "panel4"}
                onChange={handleChangePanel4}
                style={{ backgroundColor: "#F7FAFE" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Shift B : {item.shiftIncharge.shiftInchargeB}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <div className="row gap-2">
                    <div className="col-md-1"></div>
                    <div
                      className="col-md-2"
                    //   style={{ backgroundColor: "#0f3995" }}
                    > 
                    <div className="box" style={{textAlign:'end'}}>14:00 AM to 15:45 AM:</div>
                      <div className="box"style={{textAlign:'end'}}>Social Workers:</div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A14</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A14")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem.location?filteredItem.location : '--'}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B14</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B14")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C14</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C14")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D14</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D14")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A15</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A15")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B15</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B15")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C15</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C15")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D15</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D15")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                  </div>

                  <div className="row my-2 gap-2">
                    <div className="col-md-1"></div>
                    <div
                      className="col-md-2"
                    //   style={{ backgroundColor: "#0f3995" }}
                    > 
                    <div className="box" style={{textAlign:'end'}}>16:00 AM to 17:45 AM:</div>
                      <div className="box"style={{textAlign:'end'}}>Social Workers:</div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A16</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A16")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B16</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B16")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C16</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C16")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D16</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D16")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A17</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A17")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B17</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B17")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C17</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C17")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D17</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D17")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                  </div>

                  <div className="row gap-2">
                    <div className="col-md-1"></div>
                    <div
                      className="col-md-2"
                    //   style={{ backgroundColor: "#0f3995" }}
                    > 
                    <div className="box" style={{textAlign:'end'}}>18:00 AM to 19:45 AM:</div>
                      <div className="box"style={{textAlign:'end'}}>Social Workers:</div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A18</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A18")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B18</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B18")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C18</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C18")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D18</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D18")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A19</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A19")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B19</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B19")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C19</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C19")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D19</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D19")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                  </div>

                  <div className="row my-2 gap-2">
                    <div className="col-md-1"></div>
                    <div
                      className="col-md-2"
                    //   style={{ backgroundColor: "#0f3995" }}
                    > 
                    <div className="box" style={{textAlign:'end'}}>20:00 AM to 21:45 AM:</div>
                      <div className="box"style={{textAlign:'end'}}>Social Workers:</div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A20</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A20")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B20</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B20")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C20</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C20")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D20</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D20")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A21</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A21")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B21</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B21")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C21</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C21")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D21</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D21")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expandedPanel5 === "panel5"}
                onChange={handleChangePanel5}
                style={{ backgroundColor: "#F7FAFE" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Shift C : {item.shiftIncharge.shiftInchargeC}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <div className="row gap-2">
                    <div className="col-md-1"></div>
                    <div
                      className="col-md-2"
                    //   style={{ backgroundColor: "#0f3995" }}
                    > 
                    <div className="box" style={{textAlign:'end'}}>22:00 AM to 23:45 AM:</div>
                      <div className="box"style={{textAlign:'end'}}>Social Workers:</div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A22</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A22")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B22</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B22")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C22</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C22")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D22</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D22")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A23</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A23")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B23</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B23")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C23</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C23")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D23</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D23")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                  </div>

                  <div className="row my-2 gap-2">
                    <div className="col-md-1"></div>
                    <div
                      className="col-md-2"
                    //   style={{ backgroundColor: "#0f3995" }}
                    > 
                    <div className="box" style={{textAlign:'end'}}>00:00 AM to 01:45 AM:</div>
                      <div className="box"style={{textAlign:'end'}}>Social Workers:</div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A00</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A00")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B00</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B00")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C00</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C00")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D00</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D00")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A01</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A01")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B01</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B01")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C01</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C01")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D01</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D01")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                  </div>

                  <div className="row gap-2">
                    <div className="col-md-1"></div>
                    <div
                      className="col-md-2"
                    //   style={{ backgroundColor: "#0f3995" }}
                    > 
                    <div className="box" style={{textAlign:'end'}}>02:00 AM to 03:45 AM:</div>
                      <div className="box"style={{textAlign:'end'}}>Social Workers:</div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A02</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A02")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B02</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B02")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C02</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C02")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D02</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D02")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A03</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A03")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B03</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B03")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C03</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C03")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D03</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D03")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                  </div>

                  <div className="row my-2 gap-2">
                    <div className="col-md-1"></div>
                    <div
                      className="col-md-2"
                    //   style={{ backgroundColor: "#0f3995" }}
                    > 
                    <div className="box" style={{textAlign:'end'}}>04:00 AM to 05:45 AM:</div>
                      <div className="box"style={{textAlign:'end'}}>Social Workers:</div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A04</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A04")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B04</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B04")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C04</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C04")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D04</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D04")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >A05</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "A05")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >B05</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "B05")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >C05</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "C05")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div
                      className="col-md-1 d-flex justify-content-between flex-column align-items-center"
                      style={{ border:'2px solid #6581BC',borderRadius:'7px',height:'60px',width:'100px' }}
                    >
                      <div className="box" style={{borderBottom:'1px solid #6581BC',height:'30px'}} >D05</div>
                      <div className="box">
                            {item.data
                              .filter((item: any) => item.q15Slot === "D05")
                              .map((filteredItem: any) => (
                              <div key={filteredItem.id}>
                                <p> {filteredItem ? filteredItem.location : "-"}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          
        </Accordion>
        ))}
      </>
    )}

        </AccordionDetails>
      </Accordion>
      
      
    </div>
  );
}
