#!/usr/bin/python3

print("\n[INFO] Running tests on Docker SpringBoot image...\n")

import docker
import unittest2 as unittest

IMAGE_NAME = "gcallah/springboot"
client = docker.from_env()

try:
    # Check if the image exists
    client.images.get(IMAGE_NAME)
except:
    IMAGE_NAME = "springboot"

class TestJava(unittest.TestCase):
    def test_java(self):
        print("[INFO] Checking Java installation")
        response = client.containers.run(IMAGE_NAME, command="which java", remove=True, name="sbcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/java\n", "Java missing!")

    def test_javac(self):
        print("[INFO] Checking Javac installation")
        response = client.containers.run(IMAGE_NAME, command="which javac", remove=True, name="sbcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/javac\n", "Java missing!")

class TestMaven(unittest.TestCase):
    def test_maven(self):
        print("[INFO] Checking Maven installation")
        response = client.containers.run(IMAGE_NAME, command="which mvn", remove=True, name="sbcontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/mvn\n", "Maven missing!")

if __name__ == '__main__':
    unittest.main()
