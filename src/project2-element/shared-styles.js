import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .card {
        margin: 10px;
        padding: 10px;
        color: #757575;
        border-radius: 5px;
        background-color: #d5e0c3;
        width: 702px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        display: flex;
      }
      .div_hotels_list {
        padding-right: 20px;
      }
      .div_hotel_address h3 {
        color: #006b80;
        margin-top: 0px;
      }
      .div_hotel_address{
        font-size: 12px;
        padding-left: 15px;
        width: 220px;
      }
      .div_hotel_ratings {
        padding-top: 55px;
        width: 170px;
      }
      .div_hotel_ratings h5 {
        color: #006b80;
        margin-top: 0px;
      }
      .div_hotel_ratings span {
        font-size : 12px;
      }
      .detailsbutton {
        width: 80px;
        margin-left: 10px;
        float: right;
        height: 25px; 
        margin-top: 62px;
        background-color: #68d09d; 
        color: #3c3b3b;
        font-size: 12px;
        box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }
    .hotelimg{
      max-width:200px;
    }


    .flightdetail {
      margin: 10px;
      padding: 10px;
      color: #757575;
      border-radius: 5px;
      background-color: #d5e0c3;
      min-width: 700px;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      display: inline-block;
      padding-left: 15px;
      margin-bottom: 5px;
      height: 45px;
    }
    #divflightsheading{
      color: #006b80; 
      max-width: 700px; 
      max-height: 35px; 
      padding-top: 5px; 
      background-color: #bac; 
      border-radius: 0px; 
      border: #828080 1px solid;
      margin-bottom: 0px; 
      margin-top: 0px; 
      display: none;
    }
    .searchControls {
      width: 120px;
      margin-left: 24px;
      float: left;
    }
    #journeydate, #returndate {
      padding-top: 18px;
    }
    .searchtitle {
      font-size:1em; 
      font-weight: bold; 
      color: #006b80;
    }
    paper-radio-button {
      padding-left: 0px;
    }
    #searchbutton {
      height: 35px; 
      margin-top: 22px; 
      background-color: #68d09d; 
      color: #3c3b3b;
    }
    .errormessage {
      display: none; 
      color: #d61010; 
      font-size: 14px;
      margin-left: 0px;
    }
    .headingAirlines {
      display: inline-block; 
      width: 105px; 
      font-size: 13px;
    }
    .headingAirlines span{
      font-size: 11px;
    }
    .headingDeparture {
      display: inline-block; 
      width: 95px; 
      font-size: 13px;
    }
    .headingDeparture span {
      font-size: 11px;
    }
    .headingBaggageDetails {
      display: inline-block; 
      width: 110px; 
      font-size: 11px; 
      font-weight: bold;
    }
    .detailAirlines {
      display: inline-block; 
      width: 110px; 
      font-size: 14px;
    }
    .detailAirlines span {
      font-size: 11px;
    }
    .detailDeparture {
      display: inline-block; 
      width: 100px; 
      font-size: 14px;
    }
    .detailDeparture span {
      font-size: 11px;
    }
    .detailBaggage {
      display: inline-block; 
      width: 307px; 
      font-size: 11px;
    }
    .bookflightbutton {
      height: 25px; 
      font-size: 12px; 
      margin-top: 10px; 
      margin-left: 15px; 
      margin-bottom: 0px; 
      background-color: #68d09d; 
      color: #3c3b3b;
    }


    .div_searchForm {
      margin: 10px;
      padding: 10px;
      color: #757575;
      border-radius: 5px;
      background-color: #d5e0c3;
      width: 702px;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      display: inline-block;
      padding-left: 15px;
  }
  .searchControls {
      width: 120px;
      margin-left: 24px;
      float: left;
  }
  .searchtitle {
    font-size:1em; 
    font-weight: bold; 
    color: #006b80;
  }
  #divtrainsheading{
    color: #006b80; 
    max-width: 700px; 
    max-height: 35px; 
    padding-top: 5px; 
    background-color: #bac; 
    border-radius: 0px; 
    border: #828080 1px solid;
    margin-bottom: 0px; 
    margin-top: 0px; 
    display: none;
  }
  .traindetail{
    margin: 10px;
    padding: 10px;
    color: #757575;
    border-radius: 5px;
    background-color: #d5e0c3;
    min-width: 700px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    display: inline-block;
    padding-left: 15px;
    margin-bottom: 5px;
    height: 45px;
    }
    #inputfrom {
      margin-left: 0px;
    }
    #journeydate {
      padding-top: 18px;
    }
    .errormessage {
      display: none; 
      color: #d61010; 
      font-size: 14px;
      margin-left: 0px;
    }
    .headingTrains {
      display: inline-block; 
      width: 115px; 
      font-size: 13px;
    }
    .headingTrains span {
      font-size: 11px;
    }
    .headingSeatDetails {
      display: inline-block; 
      width: 200px; 
      font-size: 11px;
      font-weight: bold;
    }
    .detailTrains {
      display: inline-block; 
      width: 120px; 
      height: 52px; 
      font-size: 14px;
    }
    .detailTrains span {
      font-size: 11px;
    }
    .detailSeatTypes {
      display: inline-block; 
      width: 257px; 
      height: 52px; 
      font-size: 11px;
    }
    .booktrainbutton {
      height: 25px; 
      font-size: 12px; 
      margin-top: 10px; 
      margin-left: 15px; 
      margin-bottom: 0px; 
      background-color: #68d09d; 
      color: #3c3b3b;
    }
  
  .searchtitle {
      font-size:1em; 
      font-weight: bold; 
      color: #006b80;
  }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
