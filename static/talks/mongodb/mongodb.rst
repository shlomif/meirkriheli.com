====================
MongoDB
====================

"hu **mongo** us"

Document-oriented database


No NoSQL for you!
------------------------------------------

Come back next year:

* Document
* Key/Value
* Tabular
* Object
* Graph
* `And more`_ ...

.. _And more: http://en.wikipedia.org/wiki/NoSQL


Features
---------------------

* Document oriented
* Schema less (sort of)
* Indexing (on any attribute and depth)
* Replication
* Document based querying
* In-place updates
* Map/Reduce

Brownie Points
--------------------

* Auto Sharding
* GridFS
* Geospatial Indexing and querying
* Easy getting started


Scale and trade offs
------------------------

* Scale Up vs. Scale Out
* Joins are problematic
* So are transactions
* MongoDB sacrifices those to Scale Out



BSON/JSON
-----------------

* Scanability
* Custom types


JSON data types
--------------------

* object (dict/hash)
* array
* string
* number
* boolean (true/false)
* null

BSON extra types
--------------------

* ObjectID
* DateTime
* BinData
* DBRef


Hello schemaless
----------------------

Just like discovering dynamic languages for the 1st time (plus it maps smoothly to
dynamic languages).

Not exactly schema less (more of dynamic one):

* Collection Indexes
* Each document has structure

Collections are created as needed (on write).


Documents
--------------

* Grouped by collections
* A document is JSON object (dict/hash) of key/value pairs
* Values can be arrays, other objects and valid data types


Example document
----------------------------------------

.. sourcecode:: js

    {
      _id: "September 19th, 2012",
      talks: [
        {
          title:  "Meta-Moose",
          lecturer: "Ynon Perek",
          description: "Using the meta object, dyna ..."
          slides: "http://www.slideshare.net/YnonPerek/metamoose-14339965"
        },
        {
          title: "Project Euler",
          lecturer: "Shlomi Fish",
        }, { ... }
      ]
    }


_id
-----------------

* Needed (except for system & capped collections)
* Immutable, Unique within a collection
* Any type, other than arrays,
* Will be assigned implicitly an ObjectID if missing.
* Auto indexed 


mongo shell
---------------

Basically a JS shell. Let's play with it a bit.


Querying
-------------

.. sourcecode:: js

    db.products.find({'type': 'case'})


Find all documents in collection products where type is "case" (even if type is
an array).


Advanced
-----------

Many `query operators`_, like

* $gt, $gte, $lt, $lte, $ne,$mod
* $all, $in, $nin
* $exists
* $nor, $or $and
* $size, $type
* RegEx

.. _query operators: http://www.mongodb.org/display/DOCS/Advanced+Queries


Updates
-------------

Some of the `update operators`_ (in addition to save() ):

* $inc
* $set, $unset
* $push,  $pushAll, $pop, $pull, $pullAll
* $addToSet and $each
* $rename
* $bit

.. _update operators: http://www.mongodb.org/display/DOCS/Updating


Programming Languages
----------------------

Has official support for many languages: 


    C, C++, C# / .NET,
    Erlang, Haskell, Java, JavaScript,
    Lisp, node.JS, Perl, PHP,
    Python, Ruby, Scala

Plus few unofficial ones.

For Perl, there's `MongoDB at CPAN`_

.. _MongoDB at CPAN: http://search.cpan.org/~friedo/MongoDB/


Perl example
-----------------

.. sourcecode:: perl

    use MongoDB;

    my $conn = MongoDB::Connection->new;
    my $catalog_db = $conn->pcat;  # pcat db

    my $products = $catalog_db->products;  # products collection

    my $services = $products->find({type => "service"}); # we get a cursor

    while (my $service = $services->next) {
        print $service->{'_id'} . ', ' . $service->{'name'} . "\n";
    }


Insert
--------

.. sourcecode:: perl

    $products->insert({
        name => "Dummy box", type => ["service", "dummy"]
    });

    # or 

    $catalog_db->products->insert({
        name => "Dummy box", type => ["service", "dummy"]
    });


Update
----------


.. sourcecode:: perl

    # For type service increment price by 20, set the raised flag 

    $products->update(
        {type => "service"},
        {'$inc' => {monthly_price => 20},  {'$set' => {raised => 1}} }
    );

.. sourcecode:: perl

    # with boolean. To get booleans set $MongoDB::BSON::use_boolean to 1

    use boolean;
    $products->update(
        {type => "service"},
        {'$inc' => {monthly_price => 20},  {'$set' => {raised =>true}} }
    );

    

Capped collections
-----------------------

Let's talk a bit about capped collections and tailabile cursors.

.. sourcecode:: perl

    my $cursor = $coll->find->tailable(1);
    for (;;) {
        if (defined(my $doc = $cursor->next)) {
            say $doc;
        }
        else {
            sleep 1;
        }
    }


Something from the trenches
--------------------------------

* Think about and design your data structure
* Don't use MongoDB < 2.0 (2.2 is recommended)
* Deploy servers on 64 bits (little endian is mandatory)
* 16MB Document size limit
* Don't ``kill -9 mongod``


Resources
----------

* MongoDB_
* `MondoDB documentation`_
* `MongoDB at CPAN`_
* `The Little MongoDB Book`_

.. _MongoDB: http://www.mongodb.org/
.. _The Little MongoDB Book: http://openmymind.net/2011/3/28/The-Little-MongoDB-Book/
.. _MondoDB documentation: http://www.mongodb.org/display/DOCS/Home


Thank you
----------

- Meir Kriheli
- http://meirkriheli.com
- mkriheli@gmail.com

.. footer:: Perl Mongers TLV Oct 2012

