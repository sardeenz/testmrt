<?php


// The GDC WSDL for the validate service
$wsdl = "http://worldview.globaldataconsortium.com:8080/wvservice-4.0.1/validate?wsdl";


// Create a new SoapClient with our wsdl and trace=1. Trace=1 allows us to output the
// XML from the request and response directly
$client = new SoapClient($wsdl, array(
    "trace"=>1,
    "exceptions"=>0));

// These will print all the functions and types for this service if desired.
// Will give you essentially what the full input struct would look like
// (but most fields are optional)
//var_dump($client->__getFunctions()); 
//var_dump($client->__getTypes()); 

?>

<html>
<body>

<?php
if($_POST) {
    

    $username = $_POST["username"];
    $password = $_POST["password"];
    $tenant = $_POST["tenant"];

    $addressLine1 = $_POST["addressLine1"];
    $addressLine2 = $_POST["addressLine2"];
    $addressLine3 = $_POST["addressLine3"];
    $addressLine4 = $_POST["addressLine4"];

    $full_email_address = $_POST["full_email_address"];

    $completename = $_POST["completename"];

    $phone_number = $_POST["phone_number"];

    $options = $_POST["options"];
    
    $parameters = array(
        "input" => array(
            "address" => array(
                "addressLine1" => $addressLine1,
                "addressLine2" => $addressLine2,
                "addressLine3" => $addressLine3,
                "addressLine4" => $addressLine4
            ),
            "credentials" => array(
                "username" => $username,
                "password" => $password,
                "tenant" => $tenant
            ),
            "identity" => array(
                "completename" => $completename
            ),
            "options" => $options,
            "email" => array(
                "full_email_address" => $full_email_address
            ),
            "phone" => array(
                "phone_number" => $phone_number
            ),
            
        )
    );
    
    // Make the SOAP request
    $value = $client->Validate($parameters);

    // Get the request and response XML
    $req = $client->__getLastRequest();
    $res = $client->__getLastResponse();


?>

    
  Response:
<?php
      // The DOMDocument object is just for formatting the output, $res is what has the XML for the response.
  $dom = new DOMDocument;
  $dom->preserveWhiteSpace = FALSE;
  $dom->loadXML($res);
  $dom->formatOutput = TRUE;

  echo "<pre>".htmlentities($dom->saveXml())."</pre>"; ?>


<?php } else { ?>

    
<form action="soap_example.php" method="post">
Username: <input type="text" name="username"><br>
Password: <input type="text" name="password"><br>
Tenant: <input type="text" name="tenant"><br>
Address Line 1: <input type="text" name="addressLine1"><br>
Address Line 2: <input type="text" name="addressLine2"><br>
Address Line 3: <input type="text" name="addressLine3"><br>
Address Line 4: <input type="text" name="addressLine4"><br>
Name: <input type="text" name="completename"><br>
E-mail: <input type="text" name="full_email_address"><br>
Phone Number: <input type="text" name="phone_number"><br>
Options:  <input type="text" name="options"><br>
<input type="submit">
</form>


<?php }?>


</body>
</html>