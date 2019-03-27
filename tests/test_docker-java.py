#!/usr/bin/python3

print("\n[INFO] Running tests for Docker Java image...\n")

import docker
import unittest2 as unittest

client = docker.from_env()

class TestLanguage(unittest.TestCase):
    def test_java(self):
        print("[INFO] Checking Java Installation")
        response = client.containers.run("java", command="which java", remove=True, name="javacontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/java\n", "Java missing!")
        '''
        response = client.containers.run("java", command="java -version", remove=True, name="javacontainer").decode("utf-8")
        self.assertEqual(response, "java version \"1.8.0_201\"\nJava(TM) SE Runtime Environment (build 1.8.0_201-b09)\nJava HotSpot(TM) 64-Bit Server VM (build 25.201-b09, mixed mode)\n", "no java installed!")
        '''

class TestEditors(unittest.TestCase):
    def test_vim(self):
        print("[INFO] Checking vim installation")
        response = client.containers.run("java", command="which vim", remove=True, name="javacontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/vim\n", "Vim missing!")

    def test_nano(self):
        print("[INFO] Checking nano installation")
        response = client.containers.run("java", command="which nano", remove=True, name="javacontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/nano\n", "Nano missing!")

# Add tests for sample code

if __name__ == '__main__':
    unittest.main()