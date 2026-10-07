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

        stage('Ansible Deploy') {
            steps {
                sh 'ansible-playbook ansible/deploy.yml'
            }
        }
    }

    post {
        success {
            echo 'Cafe V1 deployed successfully using Ansible!'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}