#!/usr/bin/python3

print("\n[INFO] Running tests on Docker CPP image...\n")

import docker
import unittest2 as unittest

client = docker.from_env()

class TestLanguage(unittest.TestCase):
    def test_cpp(self):
        print("[INFO] Checking gcc and gdb installation")
        response = client.containers.run("cplusplus", command="which gcc", remove=True, name="cppcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/gcc\n", "gcc missing!")
        response = client.containers.run("cplusplus", command="which gdb", remove=True, name="cppcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/gdb\n", "gdb missing!")

class TestEditors(unittest.TestCase):
    def test_nano(self):
        print("[INFO] Checking Nano installation")
        response = client.containers.run("cplusplus", command="which nano", remove=True, name="cppcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/nano\n", "Nano missing!")
    
    def test_emacs(self):
        print("[INFO] Checking Emacs installation")
        response = client.containers.run("cplusplus", command="which emacs", remove=True, name="cppcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/emacs\n", "Emacs missing!")

    def test_vim(self):
        print("[INFO] Checking vim installation")
        response = client.containers.run("cplusplus", command="which vim", remove=True, name="cppcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/vim\n", "vim missing!")

class TestSampleCode(unittest.TestCase):
    def test_sample(self):
        print("[INFO] Testing sample C++ code ")
        response = client.containers.run("cplusplus", command="./run_sample.sh", remove=True, name="cppcontainer").decode("utf-8")
        self.assertEqual(response, "Hello, World!\n", "Error in Hello World sample!")

if __name__ == '__main__':
    unittest.main()