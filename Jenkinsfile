pipeline {
    agent any

    environment {
        CI = 'true'
    }

    triggers {
        // Check GitHub for new commits every 5 minutes
        pollSCM('H/5 * * * *')
    }

    options {
        timeout(time: 60, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '20'))
    }

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install browsers') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            junit allowEmptyResults: true, testResults: 'junit-results/results.xml'
            archiveArtifacts artifacts: 'playwright-report/**, monocart-report/**, allure-results/**', allowEmptyArchive: true
        }
    }
}
