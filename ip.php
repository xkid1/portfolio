<?PHP
//get ip address location etc..
function getUserIP()
{
    // Get real visitor IP behind CloudFlare network
    if (isset($_SERVER['HTTP_CLIENT_IP'])) {
            return $_SERVER['HTTP_CLIENT_IP'];
    }elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
      return $_SERVER['HTTP_X_FORWARDED_FOR'];
    }else {
      return(isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '');
    }


}


$user_ip = getUserIP();

$query=@unserialize(file_get_contents('http://ip-api.com/php/'.$user_ip));
if ($query && $query['status'] == 'success') {
  echo "ISP :" .$query['isp']."<br>";
    echo "Country :" .$query['country']."<br>";
      echo "Country Code :" .$query['countryCode']."<br>";
        echo "Region:" .$query['region']."<br>";
        echo "Region Name :" .$query['regionName']."<br>";
          echo "City :" .$query['city']."<br>";
            echo "Zip :" .$query['zip']."<br>";
              echo "Latitude :" .$query['lat']."<br>";
                echo "Longtitude :" .$query['lon']."<br>";
                  echo "TimeZone :" .$query['timezone']."<br>";
                    echo "ORG is :" .$query['org']."<br>";
                      echo "AS :" .$query['as']."<br>";
}
//get the bworser using
  function getBrowser(){
      if(strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE)
        echo 'Internet explorer';
     elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Trident') !== FALSE) //For Supporting IE 11
        echo 'Internet explorer';
     elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Firefox') !== FALSE)
       echo 'Mozilla Firefox';
     elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Chrome') !== FALSE)
       echo 'Google Chrome';
     elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Opera Mini') !== FALSE)
       echo "Opera Mini";
     elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Opera') !== FALSE)
       echo "Opera";
     elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Safari') !== FALSE)
       echo "Safari";
     else
       echo 'Something else';
  }
  $user_browser = getBrowser();

  echo $user_browser;


  //get the device mobile or desktop
  function getDevice(){

        if (isset($_SERVER['HTTP_USER_AGENT'])) {
          return $_SERVER['HTTP_USER_AGENT'];
        }

}

  $user_device = getDevice();

  echo $user_device;
//date in time
  function dateTime(){
      $now = new DateTime();
    echo $now->format('Y-m-d H:i:s');
  }

  $user_date = dateTime();
  echo   $user_date;
?>
