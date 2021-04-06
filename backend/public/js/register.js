var result = null;
var fileInput = document.getElementById("customFile"),

    readFile = function () {
        var reader = new FileReader();
        reader.onload = function () {
            // document.getElementById('out').innerHTML = reader.result;
        	// console.log();
        	result = reader.result.split("\n");
        	document.getElementById("form").classList.add("d-none");
        // console.log(reader.result);
        	
        	var result3 = result[0].split(",");
            var result2 = [];
        	var i;
        	// console.log(result2[0]);
        	for(i=1;i<result.length;i++){
        		result2[i] = result[i].split(",");
        	}
            document.getElementById("values").innerHTML = result2;
        	// for(i=0;i<result.length;i++){
        		console.log(result[1]);
        	// }
        	
        };


        reader.readAsBinaryString(fileInput.files[0]);
    };


fileInput.addEventListener('change', readFile);

function printData(){
	// alert("print");
	// console.log(result);
	// alert(result);
	// alert("after print");	
}
