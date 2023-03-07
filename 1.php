<!DOCTYPE html>
<html>
<head>
  <title></title>
  <!--<script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js"></script>-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="printThis.js"></script>

</head>
<body>

<h2 id="content-to-print">This is the content which will be print</h2>
<button id="print-element">Print the aboive content</button>

<h2>This is the content which will not be print</h2>

<script type="text/javascript">
  $( "#print-element" ).click(function() {
       $("#content-to-print").printThis();
    });
</script>

</body>
</html>