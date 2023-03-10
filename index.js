function generate() {

    let stud_num = document.getElementById('stud_id').value;
    let lname = document.getElementById('lname').value;
    let fname = document.getElementById('fname').value;
    let mname = document.getElementById('mname').value;
    let section = document.getElementById('section').value;
    let grade = document.getElementById('grade').value;
    let strand = document.getElementById('strand').value;
    let address = document.getElementById('address').value;
    let cnum = document.getElementById('cnum').value;
    let bday = document.getElementById('bday').value;
    let guardian = document.getElementById('guardian').value;
    let guardian_num = document.getElementById('guardian_num').value;

//alert('ok');
    let x = document.getElementById('fullname');
    x.innerHTML = ("<b>" + lname + ", " + "<br> " + fname + " " + mname + "."+ "</b>" ).toUpperCase();

    let y = document.getElementById('gr-sec');
    y.innerHTML = (grade + "-" + section + "<br> " + strand).toUpperCase();

    document.getElementById('stud_num').innerHTML = ("<b>" + stud_num + "</b>");

    document.getElementById('contact_details').innerHTML = ("CONTACT NO.: " + cnum + "<br>" + "ADDRESS: " + address + "<br>" + "BIRTHDATE: " + bday).toUpperCase();

    document.getElementById('guardian_name').innerHTML = ((guardian + "<br>" + guardian_num ).toUpperCase());

		const player = document.getElementById('player');
		const canvas = document.getElementById('canvas');
		const context = canvas.getContext('2d');
		const captureButton = document.getElementById('capture');

			const constraints = {
			video: true,
			};

		captureButton.addEventListener('click', () => {
		// Draw the video frame to the canvas.
		context.drawImage(player, 0, 0, canvas.width, canvas.height);

		});

		// Attach the video stream to the video element and autoplay.
		navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
		player.srcObject = stream;
		});

        var image = canvas.toDataURL('image/png');
        document.getElementById('img').src =  image ;
        //console.log(image);
}

function check(){
        console.log("ok");
        var image = canvas.toDataURL('image/png');
        document.getElementById('img').src = "'" + image + "'";
        console.log(image);
        alert('ok');
    }
    