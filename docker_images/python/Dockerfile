FROM python:3.8.0-buster

COPY requirements.txt /requirements.txt

RUN apt-get update

RUN apt-get install -y vim emacs nano git build-essential

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

# run cmd
CMD ["bash"]
