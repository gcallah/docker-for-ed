#!/usr/bin/python3

print("\n[INFO] Running tests on Docker CPP image...\n")

import docker
import unittest2 as unittest

IMAGE_NAME = "gcallah/cplusplus"
client = docker.from_env()

try:
    # Check if the image exists
    client.images.get(IMAGE_NAME)
except:
    IMAGE_NAME = "cplusplus"

class TestLanguage(unittest.TestCase):
    def test_cpp(self):
        print("[INFO] Checking gcc and gdb installation")
        response = client.containers.run(IMAGE_NAME, command="which gcc", remove=True, name="cppcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/gcc\n", "gcc missing!")
        response = client.containers.run(IMAGE_NAME, command="which gdb", remove=True, name="cppcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/gdb\n", "gdb missing!")
    def test_clang(self):
        print("[INFO] Checking clang and clang-format installation")
        response = client.containers.run(IMAGE_NAME, command="which clang", remove=True, name="cppcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/clang\n", "clang missing!")
        response = client.containers.run(IMAGE_NAME, command="which clang-format", remove=True, name="cppcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/clang-format\n", "clang-format missing!")

class TestEditors(unittest.TestCase):
    def test_nano(self):
        print("[INFO] Checking Nano installation")
        response = client.containers.run(IMAGE_NAME, command="which nano", remove=True, name="cppcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/nano\n", "Nano missing!")
    
    def test_emacs(self):
        print("[INFO] Checking Emacs installation")
        response = client.containers.run(IMAGE_NAME, command="which emacs", remove=True, name="cppcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/emacs\n", "Emacs missing!")

    def test_vim(self):
        print("[INFO] Checking vim installation")
        response = client.containers.run(IMAGE_NAME, command="which vim", remove=True, name="cppcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/vim\n", "vim missing!")

class TestSampleCode(unittest.TestCase):
    def test_sample(self):
        print("[INFO] Testing sample C++ code ")
        response = client.containers.run(IMAGE_NAME, command="./run_sample.sh", remove=True, name="cppcontainer").decode("utf-8")
        self.assertEqual(response, "Hello, World!\n", "Error in Hello World sample!")

if __name__ == '__main__':
    unittest.main()