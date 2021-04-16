var result = null;
var fileInput = document.getElementById("customFile"),

    readFile = function () {
        var reader = new FileReader();
        reader.onload = function () {
            result = reader.result.split("\n");
            document.getElementById("form").classList.add("d-none");

            var table = document.getElementById("students");
            var row = table.insertRow(0);
            var array = ['First Name','Last Name','Roll Number','Hostel','Password']

            var result3 = result[0].split(",");
            result3[4] = "Password";

            for(var i =0;i<5;i++){
              var cell = row.insertCell(i);
              cell.innerHTML = result3[i];
            }

            document.getElementById("students").classList.remove("d-none");



            var result2 = [];
            var i;
            for(i=1;i<result.length;i++){
                result2[i] = result[i].split(",");
            }
            var rcount = 1;
            row = table.insertRow(rcount);

            var length = result3.length;
            var count = 0,j=0;

            for(i=1;i<result2.length;i++){

                while(j<length-1)
                {
                    var cell = row.insertCell(j);
                    cell.innerHTML = result2[i][j];
                    j++;

                    count += 1;
                }
                var pass = result2[i][0] + result2[i][2]
                result2[i].push(pass);
                var cell = row.insertCell(j);
                cell.innerHTML = pass;
                j=0;
                rcount++;
                row = table.insertRow(rcount);
                count = 0;
            }
            result = result2;
        };


        reader.readAsBinaryString(fileInput.files[0]);
    };


fileInput.addEventListener('change', readFile);

function submitdata(){
    $.ajax({
      url: "/auth/csv",
      type: "POST",
      data: {"data" : result},
      success: function (data) {
        alert("Registered Successfully");
        document.getElementById("students").classList.add("d-none");
        document.getElementById("form").classList.remove("d-none");
      }
    });
  }
$("#csvbtn").click(submitdata);
