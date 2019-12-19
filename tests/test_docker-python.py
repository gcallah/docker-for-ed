#!/usr/bin/python3

print("\n[INFO] Running tests on Docker Python image...\n")

import docker
import unittest2 as unittest

IMAGE_NAME = "gcallah/python"
client = docker.from_env()

try:
    # Check if the image exists
    client.images.get(IMAGE_NAME)
except:
    IMAGE_NAME = "python"

class TestLanguage(unittest.TestCase):
    def test_python(self):
        print("[INFO] Checking Python and pip installation")
        response = client.containers.run(IMAGE_NAME, command="which python3.6", remove=True, name="pythoncontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/python3.6\n", "python3.6 missing!")
        response = client.containers.run(IMAGE_NAME, command="which pip", remove=True, name="pythoncontainer").decode("utf-8")
        self.assertEqual(response, "/usr/local/bin/pip\n", "pip missing!")

class TestEditors(unittest.TestCase):
    def test_nano(self):
        print("[INFO] Checking Nano installation")
        response = client.containers.run(IMAGE_NAME, command="which nano", remove=True, name="pythoncontainer").decode("utf-8")
        self.assertEqual(response, "/bin/nano\n", "Nano missing!")
    
    def test_emacs(self):
        print("[INFO] Checking Emacs installation")
        response = client.containers.run(IMAGE_NAME, command="which emacs", remove=True, name="pythoncontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/emacs\n", "Emacs missing!")

    def test_vim(self):
        print("[INFO] Checking vim installation")
        response = client.containers.run(IMAGE_NAME, command="which vim", remove=True, name="pythoncontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/vim\n", "vim missing!")

class TestSampleCode(unittest.TestCase):
    def test_sample(self):
        print("[INFO] Testing sample Python code ")
        response = client.containers.run(IMAGE_NAME, command="python3.6 /hello.py", remove=True, name="pythoncontainer").decode("utf-8")
        self.assertEqual(response, "Hello, World!\n", "Error in Hello World sample!")

if __name__ == '__main__':
    unittest.main()
