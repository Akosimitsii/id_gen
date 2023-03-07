function generate() {

    let stud_num = document.getElementById('stud_id').value;
    let lname = document.getElementById('lname').value;
    let fname = document.getElementById('fname').value;
    let mname = document.getElementById('mname').value;
    let section = document.getElementById('section').value;
    let grade = document.getElementById('grade').value;
    let strand = document.getElementById('strand').value;
    let address = document.getElementById('address').value;
    let guardian = document.getElementById('guardian').value;
alert('ok');
    let x = document.getElementById('fullname');
    x.innerHTML = (lname + ", " + "<br/> " + fname + " " + mname + ".").toUpperCase();

    let y = document.getElementById('gr-sec');
    y.innerHTML = (grade + "-" + section + "<br/> " + strand).toUpperCase();

    document.getElementById('stud_num').innerHTML = stud_num;

		const player = document.getElementById('player');
		// const canvas = document.getElementById('canvas');
		// const context = canvas.getContext('2d');
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
}
