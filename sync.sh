#!/bin/sh
rsync -avze ssh build/ mkriheli@meirkriheli.com:/home/mkriheli/webapps/main/
ssh mkriheli@meirkriheli.com 'setfacl -m u:apache:r-x -R ~/webapps/main'
