INSERT INTO mysql_servers (hostname, hostgroup_id, port, weight, max_connections) VALUES ('mysql-source', 0, 3306, 1000, 1000);
INSERT INTO mysql_servers (hostname, hostgroup_id, port, weight, max_connections) VALUES ('mysql-replica', 1, 3306, 1000, 1000);
INSERT INTO mysql_users (username, password, default_hostgroup, transaction_persistent) VALUES ('root', 'pass', 0, 1);
LOAD MYSQL SERVERS TO RUNTIME;
LOAD MYSQL USERS TO RUNTIME;
SAVE MYSQL SERVERS TO DISK;
SAVE MYSQL USERS TO DISK;
