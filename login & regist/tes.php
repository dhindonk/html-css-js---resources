<?php
// See the password_hash() example to see where this came from.
$hash = '$2y$07$BCryptRequires22Chrcte/VlQH0piJtjXl.0t1XkA8pw9dMXTpOq';

if (password_vertify(123, $hash)) {
    print "Logged in";
}
  else {
      print "Password Incorrect";
  }
  