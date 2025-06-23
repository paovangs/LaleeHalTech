<template>
    <div class="apply">
        <div class="img">
            <img src="https://www.jobthai.com/static/images/postresume/customize-privacy-setting.svg" alt="">
        </div>
        <div class="delt">
            <p class="how">
                จัดการ
                <span class="tlal">ข้อมูลความเป็นส่วนตัว</span>
            </p>
            <p class="Now">เลือกปิดหรือเปิดการแสดงข้อมูลบางส่วนในประวัติที่ฝากไว้</p>
            <p class="Now">ได้ เช่น เบอร์โทรศัพท์, ที่อยู่ หรืออีเมล</p>
        </div>
    </div>
    <div class="Applynow">
        <div class="chil">
            <p class="now">
                Apply Now
                <span class="span">สมัครงานด่วน</span>
            </p>
            <p class="span">เฉพาะสมาชิก JobThai</p>
            <p class="tail">กดสมัครงานได้ง่ายเพียงปุ่ม "สมัครงานด่วน"​ (Apply</p>
            <p class="tail">Now) และยังมีอีก 3 วิธี การสมัครงานให้เลือกใน</p>
            <p class="tali">JobThai</p>
        </div>
        <div class="img">
            <img src="https://www.jobthai.com/static/images/postresume/apply-now-via-jobthai.svg" alt="">
        </div>
    </div>
    
    <div class="box-upate">
        <div class="img">
            <img src="https://www.jobthai.com/static/images/postresume/jobthai-jobs-update.svg" alt="">
        </div>
        <div class="jobs">
            <p class="box">
                JOBS UPDATE
                <span class="span">ส่งตรงข่าวสารเกี่ยวกับ</span>
            </p>
            <p class="span">งานที่สนใจ</p>
            <p class="forter">ไม่พลาดทุกการอัปเดตงานทุกเดือนกับ Jobs Update ที่</p>
            <p class="forter">จะส่งงานที่น่าสนใจให้คุณทุกเดือน</p>
        </div>

    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss"scoped>
.apply {
    // border: 1px solid red;
    display: flex;
    justify-content: space-between;
    padding:  5% 15%;
    .img {
        & img {
            width: 90%;
            height: 50vh;
        }
    }
    .delt {
        // border: 1px solid red;
        line-height: 0.5;
        align-content: center;
        justify-content: center;
        .how {
            font-size: 30px;
            font-weight: bold;
            .tlal {
                font-size: 30px;
                font-weight: bold;
                color: #fe6d43;
            }
        }
        .Now {
            font-size: 20px;
        }
    }
}
.Applynow {
    // border: 1px solid red;
    display: flex;
    justify-content: space-between;
    padding: 5% 15%;
    & img {
        width: 100%;
        height: 55vh;
    }
    .chil {
        // border: 1px  solid green;
        line-height: 0.7;
        padding: 40px;
        margin-top: 50px;
        .now {
            font-size: 30px;
            font-weight: bold;
            color: #fe6d43;
            .span {
                font-size: 30px;
                font-weight: bold;
                color: black;

            }

        }
        .span {
            font-size: 30px;
            font-weight: bold;   
        }
        .tail {
            font-size: 20px;
        }

    }
}
.box-upate {
    display: flex;
    justify-content: space-between;
    padding: 3% 15%;
    .img {
        margin-top: -100px;
        & img{
            width: 75%;
            height: 50vh;
            padding: 20px;
        } 
    }
    .jobs {
        line-height: 0.7;
        width: 65%;
        // margin-top: 50px;
       .box {
          font-size: 30px;
          font-weight: bold;
          color: #fe6d43;
        }
        .forter {
            font-size: 20px;
       }
    }
    .span {
        font-size: 30px;
        font-weight: bold;
        color: black;
    }
    
}
</style>