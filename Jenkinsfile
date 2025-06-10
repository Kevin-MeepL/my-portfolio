pipeline {
  agent any

  environment {
    DOCKER_IMAGE = 'kevindelol21/my-portfolio:latest'
    DOCKERHUB_CREDENTIALS = 'docker-pat'      // Jenkins credential ID for DockerHub
    SSH_KEY = 'ssh-username-and-private-key'                        // Jenkins credential ID for EC2 private key
    EC2_HOST = '50.17.122.212'
  }

  stages {
    stage('Checkout Code') {
      steps {
        git branch: 'main', credentialsId: 'github-pat', url: 'https://github.com/Kevin-MeepL/my-portfolio.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          sh "docker build -t $DOCKER_IMAGE ."
        }
      }
    }

    stage('Login to DockerHub') {
      steps {
        withCredentials([usernamePassword(credentialsId: "$DOCKERHUB_CREDENTIALS", passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
          sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
        }
      }
    }

    stage('Push Docker Image') {
      steps {
        script {
          sh "docker push $DOCKER_IMAGE"
        }
      }
    }

    stage('Deploy to EC2') {
      steps {
        timeout(time: 5, unit: 'MINUTES') {
          sshagent (credentials: ["$SSH_KEY"]) {
            sh """
              ssh -o StrictHostKeyChecking=no ec2-user@$EC2_HOST '
                if ! command -v docker &> /dev/null; then
                  echo "Docker not found, installing..."
                  sudo yum update -y && sudo yum install -y docker
                  sudo systemctl start docker
                  sudo usermod -aG docker ec2-user
                fi &&
                docker pull $DOCKER_IMAGE &&
                docker stop portfolio || true &&
                docker rm portfolio || true &&
                docker run -d --name portfolio -p 80:80 $DOCKER_IMAGE
              '
            """
          }
        }
      }
    }

    stage('Verify Deployment') {
      steps {
        sh "curl --fail http://$EC2_HOST || echo 'App may not be up yet'"
      }
    }
  }
}
