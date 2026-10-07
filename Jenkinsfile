pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test') {
            steps {
                echo 'Running basic application test...'

                bat 'if not exist index.html exit 1'
                bat 'if not exist style.css exit 1'
                bat 'if not exist script.js exit 1'

                echo 'Test passed!'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t cafe-menu:v1 .'
            }
        }

        stage('Docker Deploy') {
            steps {
                bat 'docker rm -f cafe-menu-v1 || exit 0'
                bat 'docker run -d --name cafe-menu-v1 -p 8081:80 cafe-menu:v1'
            }
        }
    }

    post {
        success {
            echo 'Cafe V1 deployed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}