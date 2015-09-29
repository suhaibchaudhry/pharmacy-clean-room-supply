commerce per user price module for Drupal 7.x.

This module provide per product per user price for Drupal Commerce from custom database table product_price_list.
Suppose we have 3 user and 4 products in site then the per product per user price would be 3*4=12.
Currently this will work for logged in user has "Custom Price Override" roles.

REQUIREMENTS
------------
* Drupal Commerce
* Commerce line item

INSTALLATION INSTRUCTIONS
-------------------------
1.  Copy the module in
    your Drupal sites/all/modules/ directory.
2.  Login as site administrator.
3.  Enable the Custom module on the Administer -> Modules page 
    (Under the "Commerce (contrib)" category).
4.  Create user roles "Custom Price Override" under Administer -> people -> permission -> Roles .
5. This module create custom table in database product_price_list. Insert price in our custom table.
Suppose we have three user in site haveing id 1,2 and 3. We have 2 product in site haveing SKU p1 and p2
The format should be

id	product_id	user_id		price
1	p1		1		4.2
2	p2		1		2.3
3	p1		2		4.9
4	p2		2		3.6
5	p1		3		1.2
6	p2		3		2.2

DEVELOPER OPTIONS
-------------
1. If you don't want to apply per product per user price feature for user has "Custom Price Override" roles comment line number 13, 25, 33 and 46
