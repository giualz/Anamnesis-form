pipeline {
  environment{
    GIT_BRANCH = "main"
    IMAGE_NAME = "azevedoc/giulia-web-app"
    CONTAINER_NAME = "giulia-demo-test"
    DOCKER_PORTS_EXPOSED = "5000:5000"
  }
   agent any
   stages {
     stage('Cloning Git') {
       steps{
         git(
            url: 'https://github.com/giualz/Anamnesis-form.git',
            branch: "${GIT_BRANCH}"
         )
        }
       }
     stage('Building image') {
       steps {
         sh "docker build . -t $IMAGE_NAME"
       }
     }
     stage('Running image') {
       environment{
         CHECK_CONTAINER = sh(script:'docker ps -aq --filter name=$CONTAINER_NAME', returnStdout:true).trim()
       }
       steps {
         echo "$CHECK_CONTAINER"
         script{
           if("$CHECK_CONTAINER" != ""){
             sh "docker stop $CONTAINER_NAME"
             sh "docker rm $CONTAINER_NAME"
           }
         }
         sh "docker run -p $DOCKER_PORTS_EXPOSED -d --name $CONTAINER_NAME $IMAGE_NAME"
       }
     }
    }
}
