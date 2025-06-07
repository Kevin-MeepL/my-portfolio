pipeline {
  agent any

  environment {
    DOCKER_IMAGE = 'kevindelol21/my-portfolio:latest'
    DOCKERHUB_CREDENTIALS = '70266f54-c93b-49c3-85ee-51d6a36ad0f3'      // Jenkins credential ID for DockerHub
    SSH_KEY = 'aws-ssh-cred'                        // Jenkins credential ID for EC2 private key
    EC2_HOST = '50.17.122.212'
  }

  stages {
    stage('Checkout Code') {
      steps {
        git branch: 'main', credentialsId: 'github-token', url: 'https://github.com/Kevin-MeepL/my-portfolio.git'
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
        sshagent (credentials: ["$SSH_KEY"]) {
          sh """
            ssh -o StrictHostKeyChecking=no ec2-user@$EC2_HOST '
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
}
