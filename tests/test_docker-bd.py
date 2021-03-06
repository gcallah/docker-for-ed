#!/usr/bin/python3

import docker
import unittest2 as unittest

print("\n[INFO] Running tests for Docker Big Data image...\n")

IMAGE_NAME = "gcallah/pbda"
client = docker.from_env()

try:
    # Check if the image exists
    client.images.get(IMAGE_NAME)
except:
    IMAGE_NAME = "pbda"

class TestPbda(unittest.TestCase):
    def test_is_bd_running(self):
        print("[INFO] Checking if big Data was built and if kernel is running")
 

if __name__ == '__main__':
    unittest.main()