#!/usr/bin/python3

print("\n[INFO] Running tests on Docker PL image...\n")

import docker
import unittest2 as unittest

client = docker.from_env()

class TestLanguages(unittest.TestCase):
    def test_python(self):
        print("[INFO] Checking Python3 installation")
        response = client.containers.run("pl", command="which python3", remove=True, name="plcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/local/bin/python3\n", "Python3 missing!")
    
    def test_cpp(self):
        print("[INFO] Checking gcc and gdb installation")
        response = client.containers.run("pl", command="which gcc", remove=True, name="plcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/gcc\n", "gcc missing!")
        response = client.containers.run("pl", command="which g++", remove=True, name="plcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/g++\n", "g++ missing!")

    def test_haskell(self):
        print("[INFO] Checking Haskell installation")
        response = client.containers.run("pl", command="which ghc", remove=True, name="plcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/ghc\n", "Haskell (ghc) missing!")

    def test_scheme(self):
        print("[INFO] Checking MIT-Scheme installation")
        response = client.containers.run("pl", command="which scheme", remove=True, name="plcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/local/bin/scheme\n", "MIT-Scheme missing!")

class TestEditors(unittest.TestCase):
    def test_nano(self):
        print("[INFO] Checking Nano installation")
        response = client.containers.run("pl", command="which nano", remove=True, name="plcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/nano\n", "Nano missing!")

    def test_vim(self):
        print("[INFO] Checking vim installation")
        response = client.containers.run("pl", command="which vim", remove=True, name="plcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/vim\n", "vim missing!")
    
    def test_emacs(self):
        print("[INFO] Checking Emacs installation")
        response = client.containers.run("pl", command="which emacs", remove=True, name="plcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/emacs\n", "Emacs missing!")

class TestSampleCode(unittest.TestCase):
    def test_sample(self):
        print("[INFO] Testing sample C++ code ")
        response = client.containers.run("pl", command="./run_sample.sh", remove=True, name="plcontainer").decode("utf-8")
        self.assertEqual(response, "Hello, World!\n", "Error in Hello World sample!")

if __name__ == '__main__':
    unittest.main()