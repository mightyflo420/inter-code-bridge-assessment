# Use Debian as the base image
FROM debian:latest

# Install system dependencies
RUN apt-get update && \
    apt-get install -y python3 python3-pip python3-venv gcc libpq-dev && \
    apt-get clean

# Set work directory
WORKDIR /app

# Copy backend code
COPY app /app/app
COPY requirements.txt /app/
COPY wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh

# Create and activate a virtual environment, then install dependencies
RUN python3 -m venv /app/venv && \
    /app/venv/bin/pip install --upgrade pip && \
    /app/venv/bin/pip install --no-cache-dir -r requirements.txt

# Expose port
EXPOSE 8000

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV PATH="/app/venv/bin:$PATH"

# Run the FastAPI app using the venv's python
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"] 