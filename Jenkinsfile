pipeline {                         // Start of the pipeline script
  agent any                       // Run the pipeline on any available Jenkins agent

  stages {                       // Define the sequential stages of the pipeline
    stage('Build') {             // First stage called "Build"
      steps {                   // Steps to execute inside this stage
        echo 'Installing dependencies...'    // Just print this message in the logs
        sh 'npm install'                     // Run `npm install` to install Node.js dependencies

        echo 'Building React app...'        // Print a message
        sh 'npm run build'                   // Run `npm run build` to build the React app
      }
    }

    stage('Test') {            // Second stage called "Test"
      steps {
        echo 'Skipping tests as none are defined yet'  // Just a placeholder message
      }
    }

    stage('Deploy') {          // Third stage called "Deploy"
      steps {
        echo 'Deploying the app...'           // Placeholder for deploy steps
      }
    }
  }
}
