import React, { useState } from "react";
import './App.css';
// import MaterialTable from "material-table";


function App() {
  const [imageFileURL, setImageFileURL] = useState();
  const [array, setArray] = useState([]);


  function handleChangeCsv(e) {
   
    var file = e.target.files[0];
    var reader = new FileReader();
     reader.readAsText(file);
   

    reader.onload = () => {
      setImageFileURL(reader.result);
    };
  }

  // function csvJSON() {
  //   var lines = imageFileURL.split(/\r?\n|\r/);

  //   var result = [];

  //   var headers = lines[0].split(",");

  //   for (var i = 1; i < lines.length - 1; i++) {
  //     var obj = {};
  //     var currentline = lines[i].split(",");

  //     for (var j = 0; j < headers.length; j++) {
  //       obj[headers[j]] = currentline[j];
  //     }

  //     result.push(obj);
  //   }

  //   //return result; //JavaScript object
  //   // return setArray(JSON.stringify(result)); //JSON
  //   return setArray(result);
  // }

  function csvJSON() {
      var lines = imageFileURL.split(/\r?\n|\r/);
  
      var result = [];
  
      // var headers = lines[0].split(",");
  
      for (var i = 1; i < lines.length - 1; i++) {
        var obj = {};
        var currentline = lines[i].split(",");
  
        Object.assign(obj,{
          [currentline[0]] : {
            "id" :currentline[0],
            "medical" : {
              "allergies" : {
                "allergyEnvBiteCaterpillars" : true,
                "allergyEnvBiteMites" : false,
                "allergyEnvBiteMosquitos" : true,
                "allergyEnvBiteSpiders" : false,
                "allergyEnvMetalGold" : false,
                "allergyEnvMetalNickel" : false,
                "allergyEnvMetalSilver" : false,
                "allergyEnvMold" : false,
                "allergyEnvOtherCockroaches" : true,
                "allergyEnvStingBees" : true,
                "allergyEnvStingCaterpillars" : true,
                "allergyEnvStingWasps" : false,
                "allergyEnvTouchFlour" : false,
                "allergyEnvTouchWheat" : false,
                "allergyFoodEggCooked" : true,
                "allergyFoodEggRaw" : true,
                "allergyFoodFishSalmonRoe" : false,
                "allergyFoodFruitApple" : true,
                "allergyFoodFruitBanana" : false,
                "allergyFoodFruitMango" : true,
                "allergyFoodFruitPeach" : false,
                "allergyFoodFruitStrawberries" : false,
                "allergyFoodHerbSpiceCoriander" : true,
                "allergyFoodHerbSpiceGarlic" : false,
                "allergyFoodHerbSpiceMustard" : false,
                "allergyFoodMeatBeef" : true,
                "allergyFoodMeatChicken" : false,
                "allergyFoodMeatMutton" : true,
                "allergyFoodMeatPork" : false,
                "allergyFoodShellfishCrab" : true,
                "allergyFoodShellfishShrimp" : false,
                "allergyFoodVegCarrot" : true
              },
              "bloodType" : "AB+",
              "insuranceCardBackUrl" : "",
              "insuranceCardFrontUrl" : "",
              "insuranceCardNumber" : "90909090909",
              "medicalDoctorName" : "Doctor name",
              "medicalHospitalName" : "Hospital name",
              "medicalHospitalPhone" : "9898989898",
              "proneTo" : {
                "anaphylaxisShock" : false,
                "eczema" : false,
                "feverSeizures" : true,
                "haemophilia" : false,
                "jointDislocation" : true,
                "nosebleeds" : true,
                "seizures" : true,
                "swelling" : true
              }
            },
            "metadata" : {
              "active" : true,
              "classes" : "",
              "createdAt" : currentline[1],
              "createdBy" : "VU4CiJPxpmXJYQ6OsCuqceYnGr63",
              "family" : "",
              "guardians" : "",
              "id" : currentline[0],
              "inviteCodes" : "",
              "isUser" : false,
              "school" : "demo",
              "studentType" : currentline[8]
            },
            "profile" : {
              "avatarUrl" : "",
              "birthday" :currentline[10],
              "firstNameFurigana" :currentline[4],
              "firstNameKanji" :currentline[7],
              "firstNameRomaji" : currentline[2],
              "gender" : currentline[9],
              "joinedAt" : currentline[1],
              "lastNameFurigana" : currentline[5],
              "lastNameKanji" : currentline[6],
              "lastNameRomaji" : currentline[3],
              "nameFurigana" : "",
              "nameKanji" :"",
              "nameRomaji" : "",
              "primaryGuardianEmail" : currentline[22],
              "primaryStudentEmail" : currentline[24],
              "studentId" : currentline[0]
            }
          }
          })
  
        result.push(obj);
      }
  
      //return result; //JavaScript object
      // return setArray(JSON.stringify(result)); //JSON
      return setArray(result);
    }


  console.log("array", array);

  function DetailPanelWithRowClick() {
    return (
      // <MaterialTable
      //   columns={[
      //     { title: 'Booking status', field: 'booking_status' },
      //     { title: 'Payment Status', field: 'payment_status' },
      //     { title: 'Guest Name', field: 'guest_name'},
      //     {title: 'Ota Channel',field: 'ota_channel' },
      //   ]}
      //   data={array}
      //   title="Detail Panel With RowClick Preview"
      //   detailPanel={rowData => {
      //     return (
      //       <MaterialTable
      //         title="Render Image Preview"
      //         columns={[
      //           { title: 'Avatar', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{width: 40, borderRadius: '50%'}} alt="userProfilePic"/> },
      //           { title: 'Name', field: 'name' },
      //           { title: 'Surname', field: 'surname' },
      //           { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      //           {title: 'Birth Place',field: 'birthCity',lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },},
      //         ]}
      //         data={[
      //           { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
      //           { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
      //         ]}        
      //       />
      //     )
      //   }}
      //   onRowClick={(event, rowData, togglePanel) => togglePanel()}
      // />
      <div>
      </div>
    )
  }
  



  return (
    <div className="App">

      <label htmlFor="myfile">Select CSV files:</label>

      <input
        type="file"
        id="myfile"
        name="myfile"
        multiple
        onChange={handleChangeCsv}
      />

      <p>Output will show in console log</p>

     {imageFileURL&&<input type="submit" onClick={csvJSON} />} 

      {DetailPanelWithRowClick()}
      
    </div>
  );
}

export default App;
