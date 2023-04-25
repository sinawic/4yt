FROM python:3.9.6-alpine AS builder

WORKDIR /app 

COPY requirements.txt /app

RUN pip3 install -r requirements.txt --no-cache-dir

COPY . /app 

EXPOSE 8000

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
