pipeline {

    agent any

    stages {

        stage('Test') {
            steps {
                echo 'Running basic application test...'

                sh 'test -f index.html'
                sh 'test -f style.css'
                sh 'test -f script.js'

                echo 'Test passed!'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t cafe-menu:v1 .'
            }
        }

        stage('Docker Deploy') {
            steps {
                sh 'docker rm -f cafe-menu-v1 || true'
                sh 'docker run -d --name cafe-menu-v1 -p 8081:80 cafe-menu:v1'
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