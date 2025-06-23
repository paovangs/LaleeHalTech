<template>
    <div class="box-delt">
        <div class="yeer">
            <p class="new">Price and Packeg</p>
            <p class="bee">Job postings remain activer for one week.the posting durationcan be</p>
            <p class="bee">extended for an additional week be usingone additinal post credit.</p>
        </div> 
        <div class="boy">
            <div class="tom">
                <p class="ree">LAK</p>
                <p class="do">390,000</p>
                <p class="dee">Saved:</p>
                <div class="box"></div>
                <p class="fee">1 POST(S)</p>
                <p class="boo">Each job postings have 1</p>
                <p class="boo">week duration</p>
            </div>
            <div class="tom">
                <p class="ree">LAK</p>
                <p class="do">960,000</p>
                <p class="dee">
                    Saved:
                    <span class="pan">210,000</span>
                </p>
                <div class="box"></div>
                <p class="fee">1 POST(S)</p>
                <p class="boo">Each job postings have 1</p>
                <p class="boo">week duration</p>
            </div>
            <div class="tom">
                <p class="ree">LAK</p>
                <p class="do">1,620,000</p>
                <p class="dee">
                    Saved:
                    <span class="pan">
                        720,000
                    </span>
                </p>
                <div class="box"></div>
                <p class="fee">1 POST(S)</p>
                <p class="boo">Each job postings have 1</p>
                <p class="boo">week duration</p>
            </div>
            <div class="tom">
                <p class="ree">LAK</p>
                <p class="do">2,500,000</p>
                <p class="dee">
                    Saved:
                    <span class="pan">1,400,000</span>
                </p>
                <div class="box"></div>
                <p class="fee">1 POST(S)</p>
                <p class="boo">Each job postings have 1</p>
                <p class="boo">week duration</p>
            </div>
            <div class="tomm">
                <p class="fee">
                    Make Than
                    <span class="lu">10 Post</span>
                </p>
                <p class="fee">Please Contact our</p>
                <p class="boo">sales team</p>
                <div class="box"></div>
                <p class="fee">sales@108.jobs</p>
                <p class="boo">(+856)20   </p>
                <p class="boo">22217639 </p>
                
                
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss"scoped>
.box-delt {
    // border: 1px solid red;
    margin-top: 70px;
    .yeer {
        text-align: center;
        .new {
            font-size: 30px;
            font-weight: bold;
        }
        .bee {
            font-size: 20px;
            line-height: 0.5;
            font-weight: bold;


        }

    }
    .boy {
        // border: 1px solid red;
        display: flex;
        margin-top: 50px;
        .tom {
            border: 1px solid  rgb(244, 248, 248);
            width: 20%;
            padding: 10px 15px;
            background-color: rgb(244, 248, 248);
            border-radius: 8px;
            margin: 6px;
            .ree {
                font-size: 18px;

            }
            .do {
                font-size: 30px;
                font-weight: bold;
                color: blue;
                margin-top: -20px;
            }
            .dee {
                margin-top: -30px; 
                .pan {
                    color: red;
                    font-size: 18px;
                }           
            }
            .box {
                border: 1px solid darkgray;
                width: 20%;

            }
            .fee {
                font-size: 25px;
                font-weight: bold;
            }
            .boo {
                font-size: 18px;
                line-height: 1;
                margin-top: -15px;
            }
        }
        .tomm {
            width: 20%;
            padding: 10px 20px;
            margin: 5px;
            .fee {
                font-size: 18px;
                .lu {
                    color: blue;
                    font-size: 18px;
                    font-weight: bold;
                }

            }
            .do {
                font-size: 30px;
                font-weight: bold;
                color: blue;
                margin-top: -20px;
            }
            .dee {
                margin-top: -30px;            
            }
            .box {
                border: 1px solid darkgray;
                width: 20%;

            }
            .fee {
                font-size:18px;
                font-weight: bold;
            }
            .boo {
                font-size: 18px;
                font-weight: bold;
                line-height: 1.5;
                margin-top: -15px;
            }

        }
    }
   
}
</style>