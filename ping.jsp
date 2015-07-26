<html>
<head><title>Ping database</title></head>
<body>
<table>
<%@ page import="java.util.*" %>
<%@ page import="javax.sql.*;" %>
<% 

java.sql.Connection con;
java.sql.Statement s;
java.sql.ResultSet rs;
java.sql.PreparedStatement pst;

con = null;
s = null;
pst = null;
rs = null;
String guid=request.getParameter("guid");

if (guid != "23049820910298") {
   throw new Exception("incorrect guid");
}
   
String url= 
"jdbc:jtds:sqlserver://localhost:1433/;databaseName=gdc";
String id= "gdc";
String pass = "gdc123";
try{

Class.forName("net.sourceforge.jtds.jdbc.Driver");
con = java.sql.DriverManager.getConnection(url, id, pass);

}catch(ClassNotFoundException cnfex){
cnfex.printStackTrace();

}
String sql = "select top 10 * from dbo.BillingLog";
try{
s = con.createStatement();
rs = s.executeQuery(sql);
%>

<%

}
catch(Exception e){e.printStackTrace();}
finally{
if(rs!=null) rs.close();
if(s!=null) s.close();
if(con!=null) con.close();
}

%>

</body>
</html>
