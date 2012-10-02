====================
Salt Stack
====================

Let's play master and minion

(or)

Manage your infrastructure


.. class:: no-title

Salt Stack
--------------

Two for one:

* Configuration Management
* Remote Execution


Scale
---------

* Able to manage tens of thousands of servers
* ZeroMQ_ based for messaging
* Persistent connections/Parallel execution
* MessagePack_
* SSH is slower

.. _MessagePack: http://msgpack.org/
.. _ZeroMQ: http://www.zeromq.org/


Security
----------------

* Authentication (Public keys)
* Only if you want (on by default)
* Encryption (AES)


Things I Like
-------------------

* Simple Architecture
* Easy Installation
* Easy Configuration
* Plugin and Extension API
* File server (salt://)


Easy installation_
---------------------

* Packages and Repos for Linux distros
* FreeBSD ports
* Instructions for Windows and Solaris

No packages ? No problem

* From PyPI
* ``python setup.py install``

.. _installation: http://salt.readthedocs.org/en/latest/topics/installation/index.html

Easy Configuration
--------------------

* Sane defaults
* Set your master name or IP in the minion conf
* Add the minion key to master


Basics
-------------

* States_ - Configration
* Grains_ - Matching
* Groups_ - Predefined minion groups
* Pillars_ - Global values definitions

.. _States: http://salt.readthedocs.org/en/latest/topics/tutorials/starting_states.html
.. _Grains: http://salt.readthedocs.org/en/latest/topics/targeting/grains.html
.. _Groups: http://salt.readthedocs.org/en/latest/topics/targeting/nodegroups.html
.. _Pillars: http://salt.readthedocs.org/en/latest/topics/pillar/index.html


States
----------

* YAML files
* Could be Python, but cumbersome
* Jinja templates
* Starts with ``top.sls`` under ``files_root`` definition
* Inherit via ``include`` and ``require``
* ``watch``


States (sync)
--------------

After updating the states, apply them to minions::

    salt '*' state.highstate

State example
--------------

From salt's documentation:

.. class:: tiny

.. sidebar:: Legend

    * ``apache``: the name
    * ``pkg``, ``service``: modules
    * ``installed``, ``running``: module methods
    * ``require``: Dependency


.. sourcecode:: yaml

    apache:
      pkg:
        - installed
      service:
        - running
        - require:
          - pkg: apache
            


.. class:: no-title


Production example
--------------------

Let's see a state file we use in production:



Modules
-----------

`Built in modules`_ include things like (partial list):

* pkg - virtual for many package management
* cmd - shell commands
* cp - copy files and rendered templates
* cron
* django
* virtualenv

.. _Built in modules: http://salt.readthedocs.org/en/latest/ref/modules/all/index.html


Modules (Continued)
-------------------------

* pip (with virtualenv support)
* file - owner, group, mode etc
* freebsdjail
* gem, rvm - Ruby gems, version manager
* git and hg
* monit
* mysql and postgres


Custom modules
-------------------

Custom modules can be written in Python.

Let's see an example from production:


Targeting Minions
---------------------

Can be used to match minions from cli commands and/or state files based on:

* based on minion id: Globbing, Regex, Lists
* Grains
* Node groups
* Compound (mix and match)

Examples from `Salt's targeting documentation`_:

.. _Salt's targeting documentation: http://salt.readthedocs.org/en/latest/topics/targeting/index.html


Globbing
------------

Match all minions::

    salt '*' test.ping

Match all minions in the example.net domain or any of the example domains::

    salt '*.example.net' test.ping
    salt '*.example.*' test.ping


Regex
--------

Match both web1-prod and web1-devel minions::

    salt -E 'web1-(prod|devel)' test.ping

.. class:: small

When using regular expressions in a State's top file, specify the
matcher as the first option::

    base:
      'web1-(prod|devel)':
      - match: pcre
      - webserver

.. class:: small

executes the contents of webserver.sls matching minions.


Lists
---------

Simple lists of minion id's::

    salt -L 'web1,web2,web3' test.ping


Grains
---------


Match all CentOS minions::

    salt -G 'os:CentOS' test.ping


Match 64-bit CPUs minions, return number of available cores::

    salt -G 'cpuarch:x86_64' grains.item num_cpus

.. class:: small

Grains can be statically assigned within the minion configuration file. Can also
write custom grains (python functions) and sync to minions.


Node Groups
-----------

.. class:: small

Match on groups of nodes defined in the master's config file::

    nodegroups:
      group1: 'L@foo.domain.com,bar.domain.com,baz.domain.com and bl*.domain.com'
      group2: 'G@os:Debian and foo.domain.com'

.. class:: small

Specify a nodegroup via the -N option at the command-line::

    salt -N group1 test.ping

.. class:: small

Specify a nodegroup with - match: nodegroup in a top file::

    base:
      group1:
        - match: nodegroup
        - webserver

Compound
---------

A combination of target definitions combined with boolean operators::

    salt -C 'webserv* and G@os:Debian or E@web-dc1-srv.*' test.ping

That same example expressed in a top file looks like the following::

    base:
      'webserv* and G@os:Debian or E@web-dc1-srv.*':
        - match: compound
        - webserver

Contact
----------

- Meir Kriheli
- http://meirkriheli.com
- mkriheli@gmail.com

.. footer:: PyWeb-IL 36 Sep 2012

