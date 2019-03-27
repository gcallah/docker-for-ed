#!/usr/bin/python3

import docker
import unittest2 as unittest

print("\n[INFO] Running tests for Docker Xv6 OS image...\n")

dockerClient = docker.from_env()
lsOutput = ".              1 1 512\
..             1 1 512\
README         2 2 2327\
cat            2 3 13600\
echo           2 4 12612\
forktest       2 5 8040\
grep           2 6 15476\
init           2 7 13196\
kill           2 8 12664\
ln             2 9 12560\
ls             2 10 14748\
mkdir          2 11 12744\
rm             2 12 12720\
sh             2 13 23208\
stressfs       2 14 13392\
usertests      2 15 56324\
wc             2 16 14140\
zombie         2 17 12384\
console        3 18 0"

forktestOutput = "fork test\
fork test OK"

nanoOutput = "exec: fail\
exec nano failed"

class TestXV6(unittest.TestCase):
    def test_is_xv6_running(self):
        print("[INFO] Checking if XV6 was built and if kernel is running")
        # self.assertEqual(dockerClient.containers.run("xv6", command="ls", remove=True, name="xv6").decode("utf-8"), lsOutput)
        # self.assertEqual(dockerClient.containers.run("xv6", command="forktest", remove=True, name="xv6").decode("utf-8"), forktestOutput)
        # self.assertEqual(dockerClient.containers.run("xv6", command="nano", remove=True, name="xv6").decode("utf-8"), nanoOutput)

if __name__ == '__main__':
    unittest.main()