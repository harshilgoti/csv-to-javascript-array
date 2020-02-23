import React, { useState } from "react";
import './App.css';

function App() {
  const [imageFileURL, setImageFileURL] = useState();
  const [aray, setArray] = useState([]);


  function handleChangeCsv(e) {
    // const file = e.target.files[0];
    // console.log("csv", e.target.files, file);
    var file = e.target.files[0];
    var reader = new FileReader();
     reader.readAsText(file);
    // console.log("reader", reader);

    reader.onload = () => {
      setImageFileURL(reader.result);
    };
  }

  function csvJSON(csv = imageFileURL) {
    console.log("csv", imageFileURL);
    var lines = imageFileURL.split(/\r?\n|\r/);
    console.log("lines", lines);

    var result = [];

    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length - 1; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    //return result; //JavaScript object
    // return setArray(JSON.stringify(result)); //JSON
    return setArray(result);
  }

  console.log("array", aray);



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
      <input type="submit" onClick={csvJSON} />
    </div>
  );
}

export default App;
