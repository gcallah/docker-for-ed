# Docker For Education

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/320px-Docker_%28container_engine%29_logo.svg.png">
</p>

[![Build Status](https://img.shields.io/travis/com/gcallah/docker-for-ed/master.svg?style=for-the-badge)](https://travis-ci.com/gcallah/docker-for-ed)
[![License](https://img.shields.io/github/license/gcallah/docker-for-ed.svg?style=for-the-badge)](https://github.com/gcallah/docker-for-ed/blob/master/LICENSE)
[![Repo Size](https://img.shields.io/github/repo-size/gcallah/docker-for-ed.svg?style=for-the-badge)](https://github.com/gcallah/docker-for-ed)

Working on docker setups for education.

- Site available at [gcallah.github.io/docker-for-ed](https://gcallah.github.io/docker-for-ed/#/)

## Instructions

### For React gh-pages site:
- Change dir `cd docker_for_edu_site`
- Run `npm install`
- Start dev server `npm start`
- To deploy, from the root dir `make deploy`
- React prod files in `docker_for_edu_site/build` dir.

## Docker Images

| Name | Status| Downloads |
|------|------|-----------|
| C++ | latest | [![Docker Pulls](https://img.shields.io/docker/pulls/gcallah/cplusplus.svg)](https://hub.docker.com/r/gcallah/cplusplus) |
| Programming Languages | latest | [![Docker Pulls](https://img.shields.io/docker/pulls/gcallah/pl.svg)](https://hub.docker.com/r/gcallah/pl)|
| Java | In Progress | [![Docker Pulls](https://img.shields.io/docker/pulls/gcallah/java.svg)](https://hub.docker.com/r/gcallah/java)|
| Distributed Computing | Soon |
| Operating Systems (Xv6) | In Progress |
| Big Data | In Progress |

## License

GNU GENERAL PUBLIC LICENSE
