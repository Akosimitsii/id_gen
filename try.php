<!DOCTYPE html>
<html>
<head>
  <title>Javascript Learn</title>
</head>
<body>
  <div id="hello" style="background-image: url('1.jpg')">
    Hello
    
  </div>
  <div id="hi">
    HI
    
  </div>
  <script type="text/javascript">
        
    function codespeedy(){
        var print_div = document.getElementById("hello");
        var print_area = window.open();
        print_area.document.write(print_div.innerHTML);
        print_area.document.close();
        print_area.focus();
        print_area.print();
        print_area.close();
        // This is the code print a particular div element
            }

  </script>
<form>
    <input type="button" value="Click Me" onclick="codespeedy()">
  </form>
</body>
</html>