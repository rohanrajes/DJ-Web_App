song = "";
leftwrist_x = 0;
leftwrist_y = 0;
rightwrist_x = 0;
rightwrist_y = 0;

function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',getPoses);
}

function modelLoaded()
{
    console.log("PoseNet has loaded!");
}

function draw()
{
    image(video,0,0,600,500);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function pause()
{
    song.pause();
}

function stop()
{
    song.stop();
}

function getPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftwrist_x = results[0].pose.leftWrist.x;
        leftwrist_y = results[0].pose.leftWrist.y;
        console.log("Left wrist x = "+leftwrist_x + "Left wrist y = "+leftwrist_y);

        rightwrist_x = results[0].pose.rigthWrist.x;
        rightwrist_y = results[0].pose.rightWrist.y;
        console.log("Right wrist x = "+rightwrist_x + "Right wrist y = "+rightwrist_y);
    }
}